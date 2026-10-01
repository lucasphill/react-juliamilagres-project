import { Section } from '../components/Section'

export function Process() {
  const steps = [
    ['01.', 'Primeiro contato:', 'Você pode entrar em contato pelo WhatsApp para apresentar brevemente o que está buscando e tirar suas primeiras dúvidas sobre o atendimento.'],
    ['02.', 'Conversa inicial:', 'Esse é um momento para nos conhecermos, compreender sua demanda e avaliar se minha forma de trabalho pode fazer sentido para você.'],
    ['03.', 'Construção do processo:', 'A partir das suas necessidades e objetivos, definimos conjuntamente os focos do acompanhamento, a frequência das sessões e as estratégias que poderão ser utilizadas.'],
    ['04.', 'Acompanhamento:', 'Ao longo do processo, revisamos os objetivos e observamos mudanças, dificuldades e novos caminhos. A terapia é construída em parceria, com respeito ao seu ritmo e à sua singularidade.'],
  ]
  return <Section id="como-funciona" eyebrow="Como funciona" title="Um caminho construído com cuidado." className="process-section">
    <div className="process-grid">{steps.map(([number, title, text]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </Section>
}
