import { Collapse } from 'antd'
import type { FaqItem } from '../models/site'
import { Section } from '../components/Section'

function inlineContent(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  )
}

function answerContent(answer: string) {
  return answer.split('\n\n').map((block, index) => {
    const lines = block.split('\n')
    if (lines.every((line) => line.startsWith('- '))) {
      return <ul key={index}>{lines.map((line, itemIndex) => <li key={itemIndex}>{inlineContent(line.slice(2))}</li>)}</ul>
    }
    return <p key={index}>{inlineContent(block)}</p>
  })
}

export function Faq({ faq }: { faq: FaqItem[] }) {
  const items = [...faq].sort((a, b) => a.order - b.order).map((item) => ({ key: item.id, label: item.question, children: <div className="faq-answer">{answerContent(item.answer)}</div>, forceRender: true, classNames: { body: 'ant-collapse-content-box' } }))
  return <Section id="perguntas-frequentes" eyebrow="Perguntas frequentes" title="Talvez você esteja se perguntando…" className="faq-section"><Collapse classNames={{ body: 'ant-collapse-content-box' }} bordered={false} items={items} /></Section>
}
