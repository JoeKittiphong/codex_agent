import { main as syncOutputMain } from './sync-output.mjs'

console.warn('[deprecated] tools/migrate-prose.mjs now forwards to tools/sync-output.mjs --all --finalize --include-template')

const forwardedArgs = process.argv.slice(2)
const hasScopeArg = forwardedArgs.includes('--all') || forwardedArgs.some(arg => !arg.startsWith('--'))
const args = [...forwardedArgs]

if (!hasScopeArg) {
  args.push('--all')
}
if (!args.includes('--finalize')) {
  args.push('--finalize')
}
if (!args.includes('--include-template')) {
  args.push('--include-template')
}

syncOutputMain(args).catch(err => {
  console.error('migrate-prose failed:', err)
  process.exitCode = 1
})
