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
  node tools/check-world-opening.mjs <project-slug>
  node tools/check-world-opening.mjs <project-slug> --episode ep-01

Behavior:
- reads prose from manuscript if Prose: exists, otherwise falls back to output/
- checks the first paragraph of ep-01 by heuristic
- meant as a semi-automatic gate for world-opening paragraphs
`)
}

function parseArgs(argv) {
  const options = {
    slug: null,
    episodePrefix: 'ep-01',
    help: false,
  }

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') options.help = true
    else if (arg === '--episode') options.episodePrefix = argv[++i] ?? 'ep-01'
    else if (arg.startsWith('--')) throw new Error(`Unknown option: ${arg}`)
    else if (!options.slug) options.slug = arg
    else throw new Error(`Unexpected argument: ${arg}`)
  }

  return options
}

function extractProseFromManuscript(text) {
  const markers = ['\nProse:\n', '\r\nProse:\r\n']
  for (const marker of markers) {
    const idx = text.indexOf(marker)
    if (idx !== -1) return text.slice(idx + marker.length).trim()
  }
  return null
}

function extractProseFromOutput(text) {
  const lines = text.split(/\r?\n/)
  if (lines.length < 3) return text.trim()
  return lines.slice(3).join('\n').trim()
}

function firstParagraph(text) {
  const parts = text
    .split(/\r?\n\s*\r?\n/)
    .map(part => part.trim())
    .filter(Boolean)
  return parts[0] ?? ''
}

function countThaiWords(text) {
  if (typeof Intl?.Segmenter !== 'function') {
    return text.trim().split(/\s+/).filter(Boolean).length
  }
  const segmenter = new Intl.Segmenter('th', { granularity: 'word' })
  let count = 0
  for (const segment of segmenter.segment(text)) {
    if (segment.isWordLike) count++
  }
  return count
}

function hitCategory(text, keywords) {
  return keywords.some(keyword => text.includes(keyword))
}

function analyzeParagraph(paragraph) {
  const normalized = paragraph.trim()
  const wordCount = countThaiWords(normalized)
  const startsWithDialogue = /^["'“”‘’]/.test(normalized)

  const categories = {
    place: ['เมือง', 'สลัม', 'ตรอก', 'ถนน', 'กำแพง', 'คลอง', 'ป่า', 'หอคอย', 'ตลาด', 'หลังคา', 'ห้อง', 'ฐาน', 'ตึก', 'ทางเดิน', 'ชั้น'],
    environment: ['ฝน', 'หมอก', 'ควัน', 'ลม', 'ร้อน', 'หนาว', 'กลิ่น', 'แสง', 'มืด', 'ฟ้า', 'ฝุ่น', 'โคลน', 'ชื้น', 'แดด'],
    peopleLife: ['คน', 'เด็ก', 'ชาว', 'พ่อค้า', 'แม่ค้า', 'คนงาน', 'ยาม', 'แก๊ง', 'ครอบครัว', 'ผู้คน', 'บ้าน', 'กิน', 'อยู่', 'หาเช้า'],
    system: ['อาคม', 'ฤทธิ์', 'ระบบ', 'กฎ', 'แบตเตอรี่', 'เสาไฟ', 'พลัง', 'เทคโนโลยี', 'เมืองชั้น', 'ภาษี', 'ชิป', 'พลังงาน'],
  }

  const hits = Object.entries(categories)
    .filter(([, keywords]) => hitCategory(normalized, keywords))
    .map(([name]) => name)

  const score = {
    minWords: wordCount >= 45,
    maxWords: wordCount <= 220,
    notDialogueFirst: !startsWithDialogue,
    enoughWorldSignals: hits.length >= 2,
  }

  const pass = score.minWords && score.maxWords && score.notDialogueFirst && score.enoughWorldSignals

  const reasons = []
  if (!score.minWords) reasons.push('first paragraph is too short to establish the world clearly')
  if (!score.maxWords) reasons.push('first paragraph is too long and may drift toward infodump')
  if (!score.notDialogueFirst) reasons.push('first paragraph starts with direct dialogue')
  if (!score.enoughWorldSignals) reasons.push('not enough setting/world signals detected')

  return {
    pass,
    wordCount,
    startsWithDialogue,
    hits,
    reasons,
    manualChecklist: [
      'ผู้อ่านเห็นทันทีว่าโลกนี้หน้าตาแบบไหน',
      'มีภาพของวิถีชีวิตหรือสภาพการเอาตัวรอดของผู้คน',
      'มีกฎ/ระบบ/สภาพแวดล้อมของโลกโผล่มาอย่างน้อยคร่าวๆ',
      'ย่อหน้าเปิดเป็นเหตุการณ์จริง ไม่ใช่ย่อหน้าอธิบาย lore ล้วน',
    ],
  }
}

async function findEpisodeFile(slug, episodePrefix) {
  const episodeDir = path.join(projectsDir, slug, 'episodes')
  const entries = await readdir(episodeDir)
  const file = entries.filter(name => name.endsWith('.md')).sort().find(name => name.startsWith(episodePrefix))
  if (!file) throw new Error(`Episode not found for prefix: ${episodePrefix}`)
  return file
}

async function loadEpisodeProse(slug, file) {
  const manuscriptPath = path.join(projectsDir, slug, 'episodes', file)
  const manuscript = await readFile(manuscriptPath, 'utf8')
  let prose = extractProseFromManuscript(manuscript)
  let source = 'manuscript'
  if (!prose) {
    const outputPath = path.join(outputDir, slug, file)
    const output = await readFile(outputPath, 'utf8')
    prose = extractProseFromOutput(output)
    source = 'output'
  }
  return { prose, source }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help || !options.slug) {
    printUsage()
    return
  }

  const file = await findEpisodeFile(options.slug, options.episodePrefix)
  const { prose, source } = await loadEpisodeProse(options.slug, file)
  const paragraph = firstParagraph(prose)
  const analysis = analyzeParagraph(paragraph)
  const status = analysis.pass ? 'PASS' : 'FAIL'

  console.log(`# ${options.slug}`)
  console.log(`${status} | ${file} | source ${source}`)
  console.log(`first paragraph words: ${analysis.wordCount}`)
  console.log(`starts with dialogue: ${analysis.startsWithDialogue ? 'yes' : 'no'}`)
  console.log(`world signals: ${analysis.hits.length ? analysis.hits.join(', ') : 'none'}`)
  console.log('manual checklist:')
  for (const item of analysis.manualChecklist) {
    console.log(`- ${item}`)
  }
  console.log('first paragraph:')
  console.log(paragraph)

  if (!analysis.pass) {
    console.log('reasons:')
    for (const reason of analysis.reasons) {
      console.log(`- ${reason}`)
    }
    process.exitCode = 1
  }
}

main().catch(err => {
  console.error('check-world-opening failed:', err)
  process.exitCode = 1
})
