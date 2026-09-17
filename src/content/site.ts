import type { SiteContent } from '../models/site'
import logo from '../assets/logo.png'
import symbol from '../assets/icon.png'

export const site: SiteContent = {
  profile: {
    name: 'Julia Milagres', profession: 'Psicóloga clínica',
    introduction: 'Um convite para olhar para si com mais gentileza. Conheça este espaço e encontre o seu próximo passo.',
    biography: 'Cada história merece ser ouvida com cuidado. Este é o espaço de Julia Milagres, psicóloga clínica, para apresentar seu trabalho e facilitar o primeiro contato.',
    processDescription: 'O primeiro passo é uma conversa para conhecer o atendimento e esclarecer suas dúvidas. As informações específicas sobre as sessões serão apresentadas após confirmação com a profissional.',
    registration: null, modalities: [], photo: null, status: 'draft',
  },
  sections: [
    { id: 'inicio', title: 'Início', navLabel: 'Início', order: 0 },
    { id: 'sobre-mim', title: 'Sobre mim', navLabel: 'Sobre mim', order: 1 },
    { id: 'como-funciona', title: 'Como funciona', navLabel: 'Como funciona', order: 2 },
    { id: 'agende-consulta', title: 'Agende consulta', navLabel: 'Agende consulta', order: 3 },
    { id: 'perguntas-frequentes', title: 'Perguntas frequentes', navLabel: 'Perguntas frequentes', order: 4 },
  ],
  booking: null,
  faq: [
    { id: 'primeiro-contato', question: 'Como dar o primeiro passo?', answer: 'Você poderá usar o canal indicado na área de agendamento para iniciar uma conversa. O contato está em breve disponível; nenhum horário é reservado por esta página.', topic: 'first-contact', order: 0, status: 'draft' },
    { id: 'sessoes', question: 'Como funcionam as sessões?', answer: 'Os detalhes sobre o funcionamento das sessões estão em revisão com a profissional e serão apresentados aqui.', topic: 'sessions', order: 1, status: 'draft' },
    { id: 'modalidades', question: 'O atendimento é on-line ou presencial?', answer: 'As modalidades de atendimento estão a confirmar com Julia Milagres. Esta página ainda não informa disponibilidade presencial ou on-line.', topic: 'modalities', order: 2, status: 'draft' },
    { id: 'duracao', question: 'Qual é a duração de uma sessão?', answer: 'A duração e a frequência das sessões estão a confirmar com a profissional.', topic: 'duration', order: 3, status: 'draft' },
    { id: 'agendamento', question: 'Como posso agendar uma consulta?', answer: 'O canal de agendamento estará disponível em breve. Quando informado, ele permitirá solicitar contato, sem confirmar automaticamente uma consulta.', topic: 'booking', order: 4, status: 'draft' },
  ],
  brand: { logo, symbol, alternativeText: 'Julia Milagres — psicóloga clínica' },
  seo: { title: 'Julia Milagres | Psicóloga clínica', description: 'Conheça Julia Milagres, psicóloga clínica. Saiba mais sobre o atendimento, esclareça suas dúvidas e encontre o caminho para o primeiro contato.', locale: 'pt-BR', siteUrl: null },
  editorialStatus: 'draft', reviewedAt: null,
}
