import type { SiteContent } from '../../src/models/site'
import { site } from '../../src/content/site'

export const approvedFixture: SiteContent = {
  ...site,
  profile: { ...site.profile, registration: 'REGISTRO-DE-TESTE', status: 'approved' },
  booking: { label: 'Canal de teste', href: 'https://contato.test/agenda', displayContact: 'contato de teste', status: 'approved' },
  faq: site.faq.map((item) => ({ ...item, answer: `Resposta aprovada de teste: ${item.topic}.`, status: 'approved' })),
  seo: { ...site.seo, siteUrl: 'https://contato.test/' },
  editorialStatus: 'approved',
  reviewedAt: '2026-09-16',
}

export const unavailableFixture: SiteContent = { ...approvedFixture, booking: null }
