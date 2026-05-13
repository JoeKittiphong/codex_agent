import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const projectsDir = path.join(rootDir, 'manuscript', 'projects')
const outputDir = path.join(rootDir, 'output')

async function migrateProject(slug) {
  const episodesDir = path.join(projectsDir, slug, 'episodes')
  const projectOutputDir = path.join(outputDir, slug)
  
  try {
    await mkdir(projectOutputDir, { recursive: true })
    const files = await readdir(episodesDir)
    let migratedCount = 0

    for (const file of files) {
      if (!file.endsWith('.md')) continue

      const filePath = path.join(episodesDir, file)
      const content = await readFile(filePath, 'utf8')

      // Look for "Prose:" marker
      const splitIndex = content.indexOf('\nProse:\n') !== -1 
        ? content.indexOf('\nProse:\n') 
        : content.indexOf('\r\nProse:\r\n')

      if (splitIndex !== -1) {
        // We found the split marker!
        let metadata = content.substring(0, splitIndex).trim()
        const prose = content.substring(splitIndex + 8).trim() // Skip \nProse:\n

        // Extract title for the prose header
        const titleMatch = metadata.match(/^ตอนที่\s*\d+:\s*(.+)$/m)
        const title = titleMatch ? titleMatch[1] : 'ไม่ระบุชื่อตอน'

        // Write the prose to the output directory
        const outFilePath = path.join(projectOutputDir, file)
        const outContent = `ไฟล์: output/${slug}/${file}\nตอนที่ ${file.match(/ep-(\d+)/)?.[1] || '?'}: ${title}\n\n${prose}\n`
        await writeFile(outFilePath, outContent, 'utf8')

        // Overwrite the original file with just metadata
        metadata += '\n'
        await writeFile(filePath, metadata, 'utf8')
        
        migratedCount++
      }
    }

    console.log(`✅ Migrated ${migratedCount} episodes for project: ${slug}`)
  } catch (err) {
    // Directory might not exist or other error, just skip
    if (err.code !== 'ENOENT') {
      console.error(`Error migrating project ${slug}:`, err)
    }
  }
}

async function main() {
  try {
    const projects = await readdir(projectsDir, { withFileTypes: true })
    for (const project of projects) {
      if (project.isDirectory()) {
        await migrateProject(project.name)
      }
    }
    console.log('🎉 Migration complete!')
  } catch (err) {
    console.error('Migration failed:', err)
  }
}

main()
