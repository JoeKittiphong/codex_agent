import { readdir, readFile, writeFile, mkdir, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const projectsDir = path.join(rootDir, 'manuscript', 'projects')
const outputDir = path.join(rootDir, 'output')

function printUsage() {
  console.log(`Usage:
  node tools/sync-output.mjs <project-slug>
  node tools/sync-output.mjs <project-slug> --finalize
  node tools/sync-output.mjs --all
  node tools/sync-output.mjs --all --finalize --include-template

Default mode:
- read Metadata + Prose from manuscript/projects/[slug]/episodes/
- export prose to output/[slug]/
- keep manuscript files unchanged

Finalize mode (--finalize):
- export prose to output/[slug]/
- strip prose out of manuscript episode files
- leave metadata-only files in manuscript/

Options:
- --all               process every project under manuscript/projects/
- --finalize          strip prose from manuscript after exporting
- --include-template  include ep-00-template.md in the operation
`)
}

function parseArgs(argv) {
  const args = new Set(argv.filter(arg => arg.startsWith('--')))
  const slugs = argv.filter(arg => !arg.startsWith('--'))

  return {
    slugs,
    all: args.has('--all'),
    finalize: args.has('--finalize'),
    includeTemplate: args.has('--include-template'),
    help: args.has('--help') || args.has('-h'),
  }
}

function splitEpisodeContent(content) {
  const lfMarker = '\nProse:\n'
  const crlfMarker = '\r\nProse:\r\n'

  if (content.includes(lfMarker)) {
    const splitIndex = content.indexOf(lfMarker)
    return {
      metadata: content.substring(0, splitIndex).trimEnd(),
      prose: content.substring(splitIndex + lfMarker.length).trim(),
    }
  }

  if (content.includes(crlfMarker)) {
    const splitIndex = content.indexOf(crlfMarker)
    return {
      metadata: content.substring(0, splitIndex).trimEnd(),
      prose: content.substring(splitIndex + crlfMarker.length).trim(),
    }
  }

  return null
}

function extractTitle(metadata, fallback = 'ไม่ระบุชื่อตอน') {
  const match = metadata.match(/^ตอนที่\s*[^:]+:\s*(.+)$/m)
  return match ? match[1].trim() : fallback
}

function buildOutputContent(slug, fileName, metadata, prose) {
  const title = extractTitle(metadata)
  const epMatch = fileName.match(/ep-(\d+)/)
  const epNo = epMatch ? epMatch[1] : '?'
  return `ไฟล์: output/${slug}/${fileName}\nตอนที่ ${epNo}: ${title}\n\n${prose}\n`
}

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function syncProject(slug, options) {
  const episodesDir = path.join(projectsDir, slug, 'episodes')
  const projectOutputDir = path.join(outputDir, slug)

  const summary = {
    slug,
    exported: 0,
    finalized: 0,
    skipped: 0,
    warnings: [],
  }

  await mkdir(projectOutputDir, { recursive: true })
  const files = (await readdir(episodesDir)).filter(file => file.endsWith('.md')).sort()

  for (const file of files) {
    if (!options.includeTemplate && file.startsWith('ep-00-')) {
      summary.skipped++
      continue
    }

    const filePath = path.join(episodesDir, file)
    const outFilePath = path.join(projectOutputDir, file)
    const content = await readFile(filePath, 'utf8')
    const split = splitEpisodeContent(content)

    if (!split) {
      if (!(await fileExists(outFilePath))) {
        summary.warnings.push(`- ${slug}/${file}: no Prose block in manuscript and no output file found`)
      }
      summary.skipped++
      continue
    }

    const outContent = buildOutputContent(slug, file, split.metadata, split.prose)
    await writeFile(outFilePath, outContent, 'utf8')
    summary.exported++

    if (options.finalize) {
      await writeFile(filePath, `${split.metadata}\n`, 'utf8')
      summary.finalized++
    }
  }

  return summary
}

function logSummary(summary, options) {
  const mode = options.finalize ? 'finalize' : 'export'
  console.log(`✅ ${summary.slug}: ${mode} complete | exported ${summary.exported} | finalized ${summary.finalized} | skipped ${summary.skipped}`)
  if (summary.warnings.length) {
    console.log(summary.warnings.join('\n'))
  }
}

export async function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv)

  if (options.help || (!options.all && options.slugs.length === 0)) {
    printUsage()
    return
  }

  let slugs = options.slugs

  if (options.all) {
    const entries = await readdir(projectsDir, { withFileTypes: true })
    slugs = entries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort()
  }

  for (const slug of slugs) {
    const summary = await syncProject(slug, options)
    logSummary(summary, options)
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  main().catch(err => {
    console.error('sync-output failed:', err)
    process.exitCode = 1
  })
}
