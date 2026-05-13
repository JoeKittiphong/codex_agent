import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const projectsDir = path.join(rootDir, 'manuscript', 'projects')
const outputDir = path.join(rootDir, 'output')

function printUsage() {
  console.log(`Usage:
  node tools/check-episode-wordcount.mjs <project-slug>
  node tools/check-episode-wordcount.mjs <project-slug> --episode ep-01
  node tools/check-episode-wordcount.mjs --all

Options:
- --all                check every project under manuscript/projects/
- --episode <prefix>   check only one episode file prefix, e.g. ep-01 or ep-24
- --include-template   include ep-00-template.md
- --method <name>      word count method: thai | approx | auto (default: thai)
- --chars-per-word N   approximation factor for --method approx (default: 2.2)

Behavior:
- reads target length from episode metadata line 'ความยาวเป้าหมาย'
- reads prose from manuscript if Prose: exists, otherwise falls back to output/
- uses exact Thai segmentation via Intl.Segmenter by default
- returns non-zero exit code if any checked episode is outside target range
`)
}

function parseArgs(argv) {
  const options = {
    slugs: [],
    all: false,
    episodePrefix: null,
    includeTemplate: false,
    method: 'thai',
    charsPerWord: 2.2,
    help: false,
  }

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--all') options.all = true
    else if (arg === '--include-template') options.includeTemplate = true
    else if (arg === '--help' || arg === '-h') options.help = true
    else if (arg === '--episode') options.episodePrefix = argv[++i] ?? null
    else if (arg === '--method') options.method = (argv[++i] ?? 'thai').toLowerCase()
    else if (arg === '--chars-per-word') options.charsPerWord = Number(argv[++i] ?? '2.2')
    else if (arg.startsWith('--')) throw new Error(`Unknown option: ${arg}`)
    else options.slugs.push(arg)
  }

  return options
}

function parseTargetRange(text) {
  const line = text.split(/\r?\n/).find(line => line.includes('ความยาวเป้าหมาย:'))
  if (!line) return null

  const rangeMatch = line.match(/(\d+)\s*[-–]\s*(\d+)/)
  if (rangeMatch) {
    return { min: Number(rangeMatch[1]), max: Number(rangeMatch[2]), raw: line.trim() }
  }

  const singleMatch = line.match(/(\d+)/)
  if (singleMatch) {
    const value = Number(singleMatch[1])
    return { min: value, max: value, raw: line.trim() }
  }

  return null
}

function extractProseFromManuscript(text) {
  const markers = ['\nProse:\n', '\r\nProse:\r\n']
  for (const marker of markers) {
    const idx = text.indexOf(marker)
    if (idx !== -1) {
      return text.slice(idx + marker.length).trim()
    }
  }
  return null
}

function extractProseFromOutput(text) {
  const lines = text.split(/\r?\n/)
  if (lines.length < 3) return text.trim()
  return lines.slice(3).join('\n').trim()
}

function approxThaiWords(text, charsPerWord) {
  const compact = text.replace(/\s+/g, '')
  return Math.round(compact.length / charsPerWord)
}

function countSegmentedWords(text, locale = 'th') {
  if (typeof Intl?.Segmenter !== 'function') {
    throw new Error('Intl.Segmenter is not available in this Node.js runtime')
  }

  const segmenter = new Intl.Segmenter(locale, { granularity: 'word' })
  let count = 0

  for (const segment of segmenter.segment(text)) {
    if (segment.isWordLike) count++
  }

  return count
}

function resolveCountMethod(options) {
  if (options.method === 'thai') return 'thai'
  if (options.method === 'approx') return 'approx'
  if (options.method === 'auto') {
    return typeof Intl?.Segmenter === 'function' ? 'thai' : 'approx'
  }
  throw new Error(`--method must be one of: thai, approx, auto`)
}

function countWords(text, options) {
  const method = resolveCountMethod(options)
  if (method === 'thai') {
    return {
      method,
      words: countSegmentedWords(text, 'th'),
    }
  }

  return {
    method,
    words: approxThaiWords(text, options.charsPerWord),
  }
}

async function getProjectSlugs(options) {
  if (!options.all) return options.slugs
  const entries = await readdir(projectsDir, { withFileTypes: true })
  return entries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort()
}

async function checkProject(slug, options) {
  const episodesDir = path.join(projectsDir, slug, 'episodes')
  const files = (await readdir(episodesDir)).filter(file => file.endsWith('.md')).sort()
  const results = []

  for (const file of files) {
    if (!options.includeTemplate && file.startsWith('ep-00-')) continue
    if (options.episodePrefix && !file.startsWith(options.episodePrefix)) continue

    const manuscriptPath = path.join(episodesDir, file)
    const manuscript = await readFile(manuscriptPath, 'utf8')
    const target = parseTargetRange(manuscript)

    let prose = extractProseFromManuscript(manuscript)
    let source = 'manuscript'

    if (!prose) {
      const outputPath = path.join(outputDir, slug, file)
      const output = await readFile(outputPath, 'utf8')
      prose = extractProseFromOutput(output)
      source = 'output'
    }

    const count = countWords(prose, options)
    const pass = target ? count.words >= target.min && count.words <= target.max : false

    results.push({
      file,
      source,
      wordCount: count.words,
      method: count.method,
      target,
      pass,
    })
  }

  return results
}

function printProjectResults(slug, results) {
  console.log(`\n# ${slug}`)
  let failCount = 0

  for (const item of results) {
    const targetText = item.target ? `${item.target.min}-${item.target.max}` : 'unknown'
    const status = item.pass ? 'PASS' : 'FAIL'
    if (!item.pass) failCount++
    console.log(`${status} | ${item.file} | ${item.wordCount} words | target ${targetText} | source ${item.source} | method ${item.method}`)
  }

  console.log(`summary: ${results.length - failCount}/${results.length} passed`)
  return failCount
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help || (!options.all && options.slugs.length === 0)) {
    printUsage()
    return
  }
  if (!['thai', 'approx', 'auto'].includes(options.method)) {
    throw new Error('--method must be one of: thai, approx, auto')
  }
  if (!Number.isFinite(options.charsPerWord) || options.charsPerWord <= 0) {
    throw new Error('--chars-per-word must be a positive number')
  }

  const slugs = await getProjectSlugs(options)
  let totalFails = 0

  for (const slug of slugs) {
    const results = await checkProject(slug, options)
    totalFails += printProjectResults(slug, results)
  }

  if (totalFails > 0) {
    process.exitCode = 1
  }
}

main().catch(err => {
  console.error('check-episode-wordcount failed:', err)
  process.exitCode = 1
})
