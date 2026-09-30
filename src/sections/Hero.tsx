import { Button } from 'antd'
import type { SiteContent } from '../models/site'
import { useSectionNavigation } from '../components/useSectionNavigation'
import photo from '../assets/photo.webp'

export function Hero({ site }: { site: SiteContent }) {
  const navigate = useSectionNavigation()
  return <section id="inicio" tabIndex={-1} className="hero-section" aria-labelledby="hero-title">
    <div className="hero-copy reveal">
      <p className="eyebrow"><span>Psicóloga Clínica Integrativa</span> · escuta e acolhimento</p>
      <h1 id="hero-title">Talvez você esteja<br /><em>vivendo uma fase difícil.</em></h1>
      <p className="hero-intro">{site.profile.introduction}</p>
      <div className="hero-actions"><Button className="appointment-button" type="primary" size="large" href="#agende-consulta" onClick={navigate}>Marque uma conversa inicial</Button><a className="text-link" href="#sobre-mim" onClick={navigate}>Conheça meu trabalho <span>↓</span></a></div>
    </div>
    <div className="hero-art reveal" aria-label="Foto de Júlia Milagres">
      <div className="hero-orbit" /><img src={photo} alt="Júlia Milagres" width="560" height="560" />
    </div>
  </section>
}
