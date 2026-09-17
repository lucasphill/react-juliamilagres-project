import { Button } from 'antd'
import type { SiteContent } from '../models/site'
import { useSectionNavigation } from '../components/useSectionNavigation'

export function Hero({ site }: { site: SiteContent }) {
  const navigate = useSectionNavigation()
  return <section id="inicio" tabIndex={-1} className="hero-section" aria-labelledby="hero-title">
    <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
    <div className="hero-copy reveal">
      <p className="eyebrow">Psicologia clínica · escuta e acolhimento</p>
      <h1 id="hero-title">Um espaço para<br /><em>se ouvir por inteiro.</em></h1>
      <p className="hero-intro">{site.profile.introduction}</p>
      <div className="hero-actions"><Button type="primary" size="large" href="#agende-consulta" onClick={navigate}>Agende uma consulta</Button><a className="text-link" href="#sobre-mim" onClick={navigate}>Conheça meu trabalho <span>↓</span></a></div>
    </div>
    <div className="hero-art reveal" aria-label="Identidade visual de Julia Milagres">
      <div className="hero-orbit" /><img src={site.brand.logo} alt={site.brand.alternativeText} width="560" height="280" />
      <p>“Cuidar de si também é uma forma de recomeçar.”</p>
    </div>
  </section>
}
