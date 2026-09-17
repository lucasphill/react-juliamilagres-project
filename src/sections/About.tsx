import type { ProfessionalProfile } from '../models/site'
import { Section } from '../components/Section'

export function About({ profile }: { profile: ProfessionalProfile }) {
  return <Section id="sobre-mim" eyebrow="Sobre mim" title="Escuta atenta para histórias únicas." className="about-section">
    <div className="about-grid"><div className="quote-mark" aria-hidden="true">“</div><div><p className="large-copy">{profile.biography}</p><p className="editorial-note">Mais informações sobre formação, abordagem e áreas de atuação serão publicadas após confirmação com a profissional.</p></div></div>
  </Section>
}
