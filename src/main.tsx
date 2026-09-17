import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import { SiteProviders } from './theme/SiteProviders'
import './index.css'
const root = document.getElementById('root')!
const app = <SiteProviders><BrowserRouter><App /></BrowserRouter></SiteProviders>
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
