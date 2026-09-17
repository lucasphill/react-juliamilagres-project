import { Collapse } from 'antd'
import type { FaqItem } from '../models/site'
import { Section } from '../components/Section'

export function Faq({ faq }: { faq: FaqItem[] }) {
  const items = [...faq].sort((a, b) => a.order - b.order).map((item) => ({ key: item.id, label: item.question, children: <p>{item.answer}</p>, forceRender: true }))
  return <Section id="perguntas-frequentes" eyebrow="Perguntas frequentes" title="Talvez você esteja se perguntando…" className="faq-section"><Collapse accordion bordered={false} items={items} /></Section>
}
