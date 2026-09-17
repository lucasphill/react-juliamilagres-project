import { spawnSync } from 'node:child_process'

const release = process.argv.includes('--release')
const run = (script) => {
  const result = spawnSync(`npm run ${script}`, { stdio: 'inherit', shell: true })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}
run('build:client')
run('build:ssr')
run(release ? 'prerender:release' : 'prerender')
