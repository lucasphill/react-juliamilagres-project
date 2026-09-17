import type { SiteContent } from '../models/site'
import { validBooking } from '../models/site'
import { useSectionNavigation } from './useSectionNavigation'

export function SiteFooter({ site }: { site: SiteContent }) {
  const navigate = useSectionNavigation()
  return <footer className="site-footer">
    <div className="footer-inner">
      <img src={site.brand.logo} alt={site.brand.alternativeText} width="320" height="160" />
      <div><strong>{site.profile.name}</strong><span>{site.profile.profession}</span>{site.profile.registration && <span>{site.profile.registration}</span>}</div>
      <div className="footer-links">
        {validBooking(site.booking) && <a href={site.booking.href}>{site.booking.displayContact}</a>}
        <a href="#inicio" onClick={navigate}>Voltar ao início ↑</a>
      </div>
    </div>
    <p className="footer-note">Este site oferece informações institucionais e não substitui atendimento profissional ou serviço de emergência.</p>
  </footer>
}
