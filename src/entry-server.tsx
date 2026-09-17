import { createCache, extractStyle } from '@ant-design/cssinjs'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { site } from './content/site'
import { releaseErrors } from './models/site'
import { SiteProviders } from './theme/SiteProviders'

export function render(url = '/') {
  const cache = createCache()
  const html = renderToString(<SiteProviders cache={cache}><StaticRouter location={url}><App /></StaticRouter></SiteProviders>)
  return { html, css: extractStyle(cache, { plain: true }), site, errors: releaseErrors(site) }
}
