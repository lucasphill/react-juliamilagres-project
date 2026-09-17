export type EditorialStatus = 'draft' | 'approved'
export type SectionId = 'inicio' | 'sobre-mim' | 'como-funciona' | 'agende-consulta' | 'perguntas-frequentes'
export interface SectionDefinition { id: SectionId; title: string; navLabel: string; order: number }
export interface ProfessionalProfile {
  name: string; profession: string; introduction: string; biography: string
  processDescription: string; registration: string | null; modalities: string[]
  photo: { src: string; alt: string; width: number; height: number } | null
  status: EditorialStatus
}
export interface BookingChannel { label: string; href: string; displayContact: string; status: EditorialStatus }
export interface FaqItem { id: string; question: string; answer: string; topic: 'first-contact' | 'sessions' | 'modalities' | 'duration' | 'booking'; order: number; status: EditorialStatus }
export interface BrandIdentity { logo: string; symbol: string; alternativeText: string }
export interface SiteMetadata { title: string; description: string; locale: 'pt-BR'; siteUrl: string | null }
export interface SiteContent {
  profile: ProfessionalProfile; sections: SectionDefinition[]; booking: BookingChannel | null
  faq: FaqItem[]; brand: BrandIdentity; seo: SiteMetadata
  editorialStatus: EditorialStatus; reviewedAt: string | null
}
export function validBooking(channel: BookingChannel | null): channel is BookingChannel {
  if (!channel || channel.status !== 'approved' || !channel.label.trim() || !channel.displayContact.trim()) return false
  try {
    const url = new URL(channel.href)
    return ['https:', 'mailto:', 'tel:'].includes(url.protocol) &&
      !!(url.hostname || url.pathname) && !url.username && !url.password &&
      !/example\.|localhost|exemplo|placeholder|\.invalid/i.test(channel.href)
  } catch { return false }
}
export function releaseErrors(site: SiteContent): string[] {
  const errors: string[] = []
  if (site.editorialStatus !== 'approved' || !site.reviewedAt || !/^\d{4}-\d{2}-\d{2}$/.test(site.reviewedAt) || Number.isNaN(Date.parse(site.reviewedAt))) errors.push('Revisão editorial global pendente.')
  const p = site.profile
  if (p.status !== 'approved' || [p.name, p.profession, p.introduction, p.biography, p.processDescription, p.registration].some(v => !v?.trim())) errors.push('Perfil, biografia e registro precisam de aprovação.')
  if (!validBooking(site.booking)) errors.push('Canal de contato aprovado ausente ou inválido.')
  const topics = new Set(site.faq.filter(f => f.status === 'approved' && f.question.trim() && f.answer.trim()).map(f => f.topic))
  if (topics.size !== 5 || site.faq.some(f => f.status !== 'approved') || new Set(site.faq.map(f => f.id)).size !== site.faq.length) errors.push('Aprovar cinco temas de perguntas frequentes com IDs únicos.')
  try {
    const url = new URL(site.seo.siteUrl || '')
    if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || /example\.|localhost|exemplo|\.invalid/i.test(url.hostname)) throw new Error()
  } catch { errors.push('Domínio HTTPS público válido ausente.') }
  if (!site.seo.title.trim() || !site.seo.description.trim()) errors.push('Metadados incompletos.')
  if (/a confirmar|em breve|em revisão|placeholder|lorem ipsum|TODO/i.test(JSON.stringify(site))) errors.push('Conteúdo ainda contém pendências editoriais.')
  return errors
}
