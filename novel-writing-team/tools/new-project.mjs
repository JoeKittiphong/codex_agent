import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const templatesDir = path.join(rootDir, 'manuscript', 'templates')
const projectsDir = path.join(rootDir, 'manuscript', 'projects')

const slug = process.argv[2]
const title = process.argv[3] ?? ''

if (!slug) {
  console.error('Usage: node tools/new-project.mjs <project-slug> [title]')
  process.exit(1)
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error('Project slug must use lowercase letters, numbers, and hyphens only.')
  process.exit(1)
}

const projectDir = path.join(projectsDir, slug)

async function copyDir(source, target) {
  await mkdir(target, { recursive: true })
  const entries = await readdir(source, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name === 'README.md') {
      continue
    }

    const from = path.join(source, entry.name)
    const to = path.join(target, entry.name)

    if (entry.isDirectory()) {
      await copyDir(from, to)
      continue
    }

    let content = await readFile(from, 'utf8')

    if (entry.name === 'project-README.md') {
      const nextPath = path.join(target, 'README.md')
      content = content
        .replace('## ชื่อเรื่อง:', `## ชื่อเรื่อง: ${title}`)
        .replace('## project slug:', `## project slug: ${slug}`)
      await writeFile(nextPath, content, 'utf8')
      continue
    }

    if (entry.name === 'series-bible.md') {
      content = content.replace('- ชื่อเรื่อง:', `- ชื่อเรื่อง: ${title}`)
    }

    await writeFile(to, content, 'utf8')
  }
}

async function updateIndex() {
  const indexPath = path.join(projectsDir, 'index.md')
  let content = await readFile(indexPath, 'utf8')
  const row = `| ${slug} | ${title || '-'} | ตั้งต้นใหม่ | - | รอกรอกโครงเรื่อง |`

  if (!content.includes(`| ${slug} |`)) {
    content = `${content.trim()}\n| ${slug} | ${title || '-'} | ตั้งต้นใหม่ | - | รอกรอกโครงเรื่อง |\n`
    await writeFile(indexPath, content, 'utf8')
  }
}

async function main() {
  try {
    const info = await stat(projectDir).catch(() => null)
    if (info) {
      console.error(`Project already exists: ${projectDir}`)
      process.exit(1)
    }

    await mkdir(projectDir, { recursive: true })
    await copyDir(templatesDir, projectDir)
    await mkdir(path.join(projectDir, 'episodes'), { recursive: true })
    await rm(path.join(projectDir, 'project-README.md'), { force: true }).catch(() => {})
    await updateIndex()

    console.log(`Created project: manuscript/projects/${slug}/`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

await main()
