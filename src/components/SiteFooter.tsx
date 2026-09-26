import type { SiteContent } from '../models/site'
import { validBooking } from '../models/site'
import { useSectionNavigation } from './useSectionNavigation'

export function SiteFooter({ site }: { site: SiteContent }) {
  const navigate = useSectionNavigation()
  const sections = [...site.sections].sort((a, b) => a.order - b.order)
  return <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-logo"><img src={site.brand.logo} alt={site.brand.alternativeText} width="320" height="160" /></div>
      <div className="footer-identity"><strong>{site.profile.name}</strong><span>{site.profile.profession}</span><span>{site.profile.registration}</span></div>
      <div className="footer-links">
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          {sections.map((section) => <a key={section.id} href={'#' + section.id} onClick={navigate}>{section.navLabel}</a>)}
        </nav>
        <div className="footer-social">
          {validBooking(site.booking) && <a className="footer-social-link" href={site.booking.href} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
          <a className="footer-social-link" href="https://www.instagram.com/juliaamilagres.psi" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
    <p className="footer-disclaimer">Este site oferece informações institucionais e não substitui atendimento profissional ou serviço de emergência.</p>
    <div className="footer-note">
      <div className="footer-credits">
        <span>© 2026 Julia Milagres. Todos os direitos reservados.</span>
        <a href="https://www.linkedin.com/in/lucasphillscp/" target="_blank" rel="noopener noreferrer">Desenvolvido por: Lucas Phill Soares Correa Pinto</a>
      </div>
    </div>
  </footer>
}
