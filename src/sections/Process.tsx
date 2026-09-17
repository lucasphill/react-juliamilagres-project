import type { ProfessionalProfile } from '../models/site'
import { Section } from '../components/Section'

export function Process({ profile }: { profile: ProfessionalProfile }) {
  const steps = [
    ['01', 'Primeiro contato', 'Você entra em contato pelo canal informado e compartilha apenas o necessário para iniciar a conversa.'],
    ['02', 'Conversa inicial', 'Julia apresenta o funcionamento do atendimento e esclarece suas dúvidas sobre os próximos passos.'],
    ['03', 'Seu processo', profile.processDescription],
  ]
  return <Section id="como-funciona" eyebrow="Como funciona" title="Um caminho construído com cuidado." className="process-section">
    <div className="process-grid">{steps.map(([number, title, text]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </Section>
}
