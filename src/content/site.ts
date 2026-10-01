import type { SiteContent } from '../models/site'
import logo from '../assets/logo.png'
import symbol from '../assets/icon.png'

export const site: SiteContent = {
  profile: {
    name: 'Júlia Milagres', profession: 'Psicóloga clínica',
    introduction: 'Um convite para olhar para si com mais gentileza. Conheça este espaço e encontre o seu próximo passo.',
    biography: "Existem fases da vida em que aquilo que antes funcionava já não parece suficiente. Uma perda, uma doença, uma mudança profissional, um conflito familiar ou uma ansiedade persistente podem modificar a forma como nos relacionamos conosco e com o mundo.",
    aboutDetails: [
      "Minha prática clínica parte da escuta atenta e do respeito à singularidade de cada história. Como Psicóloga Integrativa, uno recursos da TCC, da ACT e da Psicologia Sistêmica para oferecer um acompanhamento que seja, ao mesmo tempo, acolhedor, reflexivo e prático.",
      "Na TCC, investigamos a relação entre situações, comportamentos, emoções e pensamentos, desenvolvendo estratégias para lidar com os desafios atuais. Na ACT, trabalhamos a flexibilidade psicológica e a possibilidade de agir de acordo com valores importantes, mesmo diante de experiências difíceis. Pela perspectiva Sistêmica, compreendemos como os relacionamentos, a família e os contextos de vida influenciam o sofrimento e os processos de mudança.",
      "Minha experiência em Recursos Humanos também contribui para a compreensão das relações de trabalho, dos desafios de carreira, das transições profissionais e dos impactos que o ambiente organizacional pode ter sobre a saúde mental.",
      "Meu propósito é oferecer um espaço seguro para que você possa se escutar com mais gentileza, compreender o que está vivendo e construir, no seu ritmo, caminhos possíveis de cuidado e transformação.",
    ],
    processDescription: 'Uma vez iniciado, o processo terapêutico será construído em conjunto, com base nas suas necessidades e objetivos. Utilizaremos as ferramentas da TCC e a compreensão sistêmica para promover seu autoconhecimento, desenvolvimento e bem-estar.',
    registration: 'CRP-04 / 87783', modalities: [], photo: null, status: 'draft',
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
      id: 'indicacao', question: 'Como posso ajudar?', topic: 'audience', order: 7, status: 'draft',
      answer: "Temas que podem ser trabalhados em psicoterapia\n\n**Luto e processos de perda**\n\nA psicoterapia pode oferecer um espaço de acolhimento para elaborar a perda de uma pessoa, de um animal, de uma relação, de um projeto, de uma condição de saúde ou de uma forma de vida.\n\nO luto não segue um caminho único nem tem um prazo igual para todas as pessoas. O acompanhamento pode ajudar na expressão das emoções, na construção de novos sentidos e na reorganização da vida após a perda.\n\n**Doenças crônicas**\n\nViver com uma condição crônica pode afetar o corpo, a autonomia, a rotina, os planos e a percepção sobre si mesmo.\n\nO processo terapêutico pode apoiar o manejo emocional, a adaptação às mudanças, a comunicação com familiares e profissionais de saúde e a construção de uma relação mais possível com os limites e necessidades do corpo.\n\n**Saúde mental e carreira**\n\nEscolhas profissionais, mudanças de carreira, desemprego, sobrecarga, falta de reconhecimento e conflitos com os próprios valores podem gerar sofrimento significativo.\n\nA psicoterapia pode ajudar você a compreender suas necessidades, tomar decisões com mais clareza, fortalecer recursos pessoais e construir uma trajetória profissional mais coerente com o que é importante para sua vida.\n\n**Relações familiares**\n\nAs relações familiares podem ser fonte de pertencimento, mas também de conflitos, mágoas, cobranças e dificuldades de comunicação.\n\nA partir de uma visão Sistêmica, buscamos compreender os padrões relacionais e as posições que cada pessoa ocupa na família, favorecendo uma comunicação mais clara, limites mais saudáveis e novas formas de lidar com os vínculos.\n\n**Saúde mental no trabalho**\n\nO ambiente profissional pode impactar profundamente a saúde emocional. Ansiedade, esgotamento, conflitos, assédio, insegurança, dificuldades de liderança e falta de equilíbrio entre vida pessoal e trabalho são temas que podem ser abordados em psicoterapia.\n\nO objetivo não é responsabilizar individualmente a pessoa por problemas organizacionais, mas ajudá-la a compreender sua experiência, identificar recursos e avaliar possibilidades de cuidado e ação.\n\n**Medos, fobias e ansiedade**\n\nMedos intensos, preocupações persistentes, crises de ansiedade e comportamentos de evitação podem limitar a rotina e reduzir a sensação de liberdade.\n\nO acompanhamento pode contribuir para compreender os ciclos de ansiedade, desenvolver estratégias de enfrentamento e construir uma relação diferente com as situações temidas, sempre respeitando o ritmo e as condições de cada pessoa.",
    },
    {
      id: 'indicacao-acompanhamento', question: 'Para quem o acompanhamento pode ser indicado?', topic: 'audience', order: 8, status: 'draft',
      answer: "O acompanhamento pode ser indicado para pessoas que desejam:\n\n- Elaborar perdas e processos de luto;\n- Lidar com mudanças decorrentes de doenças crônicas;\n- Compreender e manejar ansiedade, medos e fobias;\n- Melhorar a comunicação e os limites nas relações familiares;\n- Tomar decisões relacionadas à carreira;\n- Enfrentar conflitos e sofrimento no ambiente de trabalho;\n- Recuperar o equilíbrio após períodos de sobrecarga;\n- Desenvolver maior clareza sobre necessidades, limites e valores;\n- Construir uma relação mais cuidadosa consigo mesmas.\n\nO processo é individualizado e não depende de uma “gravidade” específica. A decisão sobre a indicação e o formato do acompanhamento é construída a partir da avaliação clínica e das necessidades de cada pessoa.",
    },
    {
      id: 'valor', question: 'Qual o valor da sessão?', topic: 'pricing', order: 9, status: 'draft',
      answer: 'O valor da sessão será **informado durante o nosso primeiro contato**. Entendo que esta é uma informação importante e farei questão de esclarecer todas as suas dúvidas sobre os honorários e as formas de pagamento.',
    },
  ],
  brand: { logo, symbol, alternativeText: 'Júlia Milagres — psicóloga clínica' },
  seo: { title: 'Júlia Milagres | Psicóloga clínica', description: 'Conheça Júlia Milagres, psicóloga clínica. Saiba mais sobre o atendimento, esclareça suas dúvidas e encontre o caminho para o primeiro contato.', locale: 'pt-BR', siteUrl: null },
  editorialStatus: 'draft', reviewedAt: null,
}
