import { Route, Routes } from 'react-router'
import { site as defaultSite } from './content/site'
import type { SiteContent } from './models/site'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Process } from './sections/Process'
import { Booking } from './sections/Booking'
import { Faq } from './sections/Faq'

export function LandingPage({ content = defaultSite }: { content?: SiteContent }) {
  return <div className="site-shell">
    <SiteHeader sections={content.sections} />
    <main id="conteudo"><Hero site={content} /><About profile={content.profile} /><Process profile={content.profile} /><Booking booking={content.booking} /><Faq faq={content.faq} /></main>
    <SiteFooter site={content} />
  </div>
}

export default function App({ content }: { content?: SiteContent }) {
  return <Routes><Route path="/" element={<LandingPage content={content} />} /></Routes>
}
