import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = process.cwd()
const release = process.argv.includes('--release')
const serverEntry = path.join(root, 'dist-server', 'entry-server.js')
const { render } = await import(`${pathToFileURL(serverEntry).href}?v=${Date.now()}`)
const result = render('/')

if (release && result.errors.length) {
  console.error(result.errors.map((error) => `- ${error}`).join('\n'))
  process.exit(1)
}

const escapeHtml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const dist = path.join(root, 'dist')
const file = path.join(dist, 'index.html')
let template = await readFile(file, 'utf8')
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) throw new Error('Marcadores de pré-renderização ausentes em dist/index.html.')

const seo = result.site.seo
const canonical = release ? `<link rel="canonical" href="${escapeHtml(seo.siteUrl)}" />` : ''
const head = `<meta name="description" content="${escapeHtml(seo.description)}" />\n    <meta name="robots" content="${release ? 'index, follow' : 'noindex, nofollow'}" />\n    ${canonical}\n    <style data-antd-ssr>@layer antd {${result.css}}</style>`
template = template.replace('<!--app-head-->', head).replace('<!--app-html-->', result.html).replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(seo.title)}</title>`)
await writeFile(file, template, 'utf8')

if (release) {
  const origin = new URL(seo.siteUrl).origin
  await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, 'utf8')
  await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeHtml(origin)}/</loc></url></urlset>\n`, 'utf8')
} else {
  await writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n', 'utf8')
  await rm(path.join(dist, 'sitemap.xml'), { force: true })
}
console.log(`Pré-renderização ${release ? 'pública' : 'de prévia'} concluída.`)
