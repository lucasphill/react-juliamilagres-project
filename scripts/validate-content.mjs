import { spawnSync } from 'node:child_process'
for (const script of ['build:ssr', 'prerender:release']) {
  const result = spawnSync(`npm run ${script}`, { stdio: 'inherit', shell: true })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}
console.log('Conteúdo aprovado para publicação.')
