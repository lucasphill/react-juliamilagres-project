import type { ReactNode } from 'react'
import type { SectionId } from '../models/site'
export function Section({ id, eyebrow, title, children, className = '' }: { id: SectionId; eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return <section id={id} tabIndex={-1} aria-labelledby={id + '-title'} className={'section ' + className}>
    <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={id + '-title'}>{title}</h2></div>{children}
  </section>
}
