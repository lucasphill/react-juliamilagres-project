import type { ProfessionalProfile } from '../models/site'
import { Section } from '../components/Section'

export function Process({ profile }: { profile: ProfessionalProfile }) {
  const steps = [
    ['01.', 'Primeiro contato:', 'Você pode iniciar nossa conversa através do canal de contato disponível. Sinta-se à vontade para compartilhar o que for relevante para dar o primeiro passo.'],
    ['02.', 'Conversa inicial:', 'Neste momento, teremos uma conversa para que você possa me conhecer, entender minha abordagem e esclarecer todas as suas dúvidas sobre como o processo terapêutico funciona. É um espaço para você se sentir seguro(a) e decidir se este é o caminho para você.'],
    ['03.', 'Seu processo:', profile.processDescription],
  ]
  return <Section id="como-funciona" eyebrow="Como funciona" title="Um caminho construído com cuidado." className="process-section">
    <div className="process-grid">{steps.map(([number, title, text]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </Section>
}
