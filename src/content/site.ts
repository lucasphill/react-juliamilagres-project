import type { SiteContent } from '../models/site'
import logo from '../assets/logo.png'
import symbol from '../assets/icon.png'

export const site: SiteContent = {
  profile: {
    name: 'Julia Milagres', profession: 'Psicóloga clínica',
    introduction: 'Um convite para olhar para si com mais gentileza. Conheça este espaço e encontre o seu próximo passo.',
    biography: 'Cada história merece ser ouvida com cuidado. Este é o espaço de Julia Milagres, psicóloga clínica, para apresentar seu trabalho e facilitar o primeiro contato.',
    processDescription: 'Uma vez iniciado, o processo terapêutico será construído em conjunto, com base nas suas necessidades e objetivos. Utilizaremos as ferramentas da TCC e a compreensão sistêmica para promover seu autoconhecimento, desenvolvimento e bem-estar.',
    registration: null, modalities: [], photo: null, status: 'draft',
  },
  sections: [
    { id: 'inicio', title: 'Início', navLabel: 'Início', order: 0 },
    { id: 'sobre-mim', title: 'Sobre mim', navLabel: 'Sobre mim', order: 1 },
    { id: 'como-funciona', title: 'Como funciona', navLabel: 'Como funciona', order: 2 },
    { id: 'agende-consulta', title: 'Agende consulta', navLabel: 'Agende consulta', order: 3 },
    { id: 'perguntas-frequentes', title: 'Perguntas frequentes', navLabel: 'Perguntas frequentes', order: 4 },
  ],
  booking: {
    label: 'WhatsApp',
    href: 'https://wa.me/5531995509080',
    displayContact: '+55 31 99550-9080',
    status: 'approved',
  },
  faq: [
    {
      id: 'quem-sou-eu', question: 'Quem será minha psicóloga?', topic: 'biography', order: 0, status: 'draft',
      answer: [
        'Sou Júlia Milagres, psicóloga com uma trajetória profissional sólida e diversificada, construída sobre a paixão pelo desenvolvimento humano e a compreensão das relações.',
        'Minha formação acadêmica começou com a Graduação em Psicologia pela PUC Minas. Desde então, busquei aprofundar meus conhecimentos com Especializações em Gestão de Pessoas, Neuropsicologia e Psicolinguística. Essa base me permite uma visão abrangente da mente, do comportamento e das dinâmicas humanas.',
        'Paralelamente à minha formação, construí uma carreira de mais de 7 anos em Recursos Humanos. Nessa jornada, fui protagonista em iniciativas de cultura, clima e engajamento, desenvolvimento de talentos, recrutamento e seleção por competências, processo de boas-vindas e projetos de diversidade e inclusão. Minha experiência em RH me proporcionou uma visão estratégica e consultiva, transformando diagnósticos em planos de ação práticos e fortalecendo a conexão entre estratégia de negócio e gestão de pessoas.',
        'No ambiente acadêmico, contribuí com a publicação de artigos voltados para a Análise do Comportamento, explorando temas como o tratamento de fobias e a promoção do bem-estar. Durante a graduação, atuei como monitora de Análise do Comportamento e Psicologia e Ética, consolidando minha base teórica e prática.',
        'Hoje, como Psicóloga Integrativa, trago toda essa bagagem para a clínica, combinando minha expertise em TCC, Sistêmica e outras abordagens com uma compreensão aprofundada das dinâmicas individuais e relacionais, para oferecer um suporte completo e personalizado.',
      ].join('\n\n'),
    },
    {
      id: 'primeiro-contato', question: 'Como posso dar o primeiro passo?', topic: 'first-contact', order: 1, status: 'draft',
      answer: 'O primeiro passo é sempre o mais importante. Para iniciar sua jornada, basta **entrar em contato através do nosso canal de atendimento**. Assim, podemos agendar uma conversa inicial para que você me conheça, entenda minha abordagem e tire todas as suas dúvidas, sentindo-se seguro(a) para decidir sobre o seu processo terapêutico.',
    },
    {
      id: 'sessoes', question: 'Como funcionam as sessões?', topic: 'sessions', order: 2, status: 'draft',
      answer: 'As sessões são **individualizadas e focadas nos seus objetivos e necessidades específicas**. Utilizo uma abordagem integrativa, combinando técnicas da **Psicologia Cognitivo-Comportamental (TCC)** para desenvolver estratégias práticas e a **perspectiva Sistêmica** para compreender as dinâmicas de seus relacionamentos e contextos. Meu compromisso é oferecer um **ambiente acolhedor, ético e de total confidencialidade**, onde você se sinta à vontade para explorar suas questões e promover seu bem-estar.',
    },
    {
      id: 'modalidades', question: 'O atendimento é on-line ou presencial?', topic: 'modalities', order: 3, status: 'draft',
      answer: [
        'Ofereço atendimento em **duas modalidades** para melhor atender às suas necessidades:',
        '- **Online:** Realizado através da plataforma **Microsoft Teams**, proporcionando flexibilidade e comodidade, onde quer que você esteja.\n- **Presencial:** Disponível no bairro **Ouro Preto, em Belo Horizonte (MG)**, para aqueles que preferem o contato direto.',
        'Ambas as modalidades são igualmente eficazes e os valores se adequam ao modelo escolhido.',
      ].join('\n\n'),
    },
    {
      id: 'duracao', question: 'Qual é a duração de uma sessão?', topic: 'duration', order: 4, status: 'draft',
      answer: 'A duração padrão de uma sessão é de **50 minutos**, geralmente com frequência semanal. No entanto, a **periodicidade e o formato podem ser adequados de acordo com a sua necessidade** e o plano terapêutico estabelecido em conjunto.',
    },
    {
      id: 'agendamento', question: 'Como posso agendar uma sessão?', topic: 'booking', order: 5, status: 'draft',
      answer: 'Para agendar sua sessão, basta **clicar no botão de contato** disponível no site. Você será direcionado(a) para o meu **WhatsApp profissional**, onde poderei responder suas mensagens e auxiliar no agendamento.',
    },
    {
      id: 'abordagens', question: 'Quais são suas abordagens terapêuticas?', topic: 'approaches', order: 6, status: 'draft',
      answer: 'Minha prática é fundamentada em uma **abordagem integrativa e humanizada**. Utilizo principalmente a **Psicologia Cognitivo-Comportamental (TCC)**, que oferece ferramentas eficazes para a reestruturação de pensamentos e comportamentos, e a **Psicologia Sistêmica**, que explora as complexas dinâmicas relacionais. Além disso, incorporo princípios da **Terapia de Aceitação e Compromisso (ACT)**, focando na flexibilidade psicológica, e da **Psicologia Humanista**, que valoriza o potencial de crescimento, a empatia e a aceitação incondicional de cada indivíduo.',
    },
    {
      id: 'indicacao', question: 'Para quem é indicada a terapia integrativa?', topic: 'audience', order: 7, status: 'draft',
      answer: [
        'A terapia integrativa é indicada para **qualquer pessoa que busca autoconhecimento, desenvolvimento pessoal e bem-estar duradouro**. É especialmente eficaz para quem deseja:',
        '- Compreender e gerenciar emoções como ansiedade, estresse e depressão.\n- Melhorar relacionamentos interpessoais e familiares.\n- Lidar com transições de vida, lutos ou desafios.\n- Desenvolver habilidades de comunicação e assertividade.\n- Promover o crescimento pessoal e a autorrealização.',
        'Atendo **crianças, adolescentes, adultos e idosos**, adaptando a abordagem às particularidades de cada fase da vida.',
      ].join('\n\n'),
    },
    {
      id: 'valor', question: 'Qual o valor da sessão?', topic: 'pricing', order: 8, status: 'draft',
      answer: 'O valor da sessão será **informado durante o nosso primeiro contato**. Entendo que esta é uma informação importante e farei questão de esclarecer todas as suas dúvidas sobre os honorários e as formas de pagamento.',
    },
  ],
  brand: { logo, symbol, alternativeText: 'Julia Milagres — psicóloga clínica' },
  seo: { title: 'Julia Milagres | Psicóloga clínica', description: 'Conheça Julia Milagres, psicóloga clínica. Saiba mais sobre o atendimento, esclareça suas dúvidas e encontre o caminho para o primeiro contato.', locale: 'pt-BR', siteUrl: null },
  editorialStatus: 'draft', reviewedAt: null,
}
