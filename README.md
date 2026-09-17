# Julia Milagres — Psicologia clínica

Landing page institucional em página única, mobile first, desenvolvida para apresentar o trabalho da psicóloga clínica Julia Milagres, esclarecer dúvidas frequentes e direcionar para o primeiro contato.

Apresenta identidade visual sofisticada e acolhedora em tons de azul petróleo (`#0d5668`, `#073c49`), superfícies com efeito de vidro fosco (*glassmorphism* com fallback para navegadores sem `backdrop-filter`), tipografia refinada e animações delicadas que respeitam `prefers-reduced-motion`.

## Arquitetura e Tecnologias

- **React 19** + **TypeScript** + **Vite**
- **React Router 7**: gerenciamento da rota única institucional `/` e navegação interna por âncoras (`#inicio`, `#sobre-mim`, `#como-funciona`, `#agende-consulta`, `#perguntas-frequentes`)
- **Ant Design 6** + **@ant-design/cssinjs**: botões, menu mobile e sanfonas de FAQ acessíveis
- **Tailwind CSS 4**: composição e responsividade mobile-first
- **SSG / Pré-renderização estática**: build híbrido com SSR (`src/entry-server.tsx` e `scripts/prerender.mjs`) gerando HTML estático completo e estilos críticos injetados, garantindo legibilidade imediata mesmo sem JavaScript e otimização para motores de busca (SEO)
- **Playwright** + **@axe-core/playwright**: testes end-to-end e validação contínua de acessibilidade (WCAG 2.1 AA) em Chromium, Firefox e WebKit

## Assets e Identidade Visual

Os ativos visuais institucionais originais fornecidos estão localizados em:
- `src/assets/logo.png`: logotipo principal horizontal
- `src/assets/icon.png`: símbolo gráfico institucional

## Instalação e Execução

Pré-requisito: Node.js 20+ LTS e npm.

```bash
# Instalação de dependências reproduzível
npm ci

# Servidor de desenvolvimento local
npm run dev

# Verificação de linting (ESLint)
npm run lint

# Build completo de produção (cliente + SSR + pré-renderização estática)
npm run build

# Pré-visualização do build de produção
npm run preview

# Execução da suíte completa de testes E2E (Chromium, Firefox, WebKit)
npm run test:e2e
```

## Edição de Conteúdo

Todo o conteúdo institucional, textos, seções e perguntas frequentes são configurados centralizadamente em:
- `src/content/site.ts`: define dados do perfil, biografia, descrição das sessões, canais de agendamento e perguntas frequentes tipadas por `src/models/site.ts`.

## Validação de Conteúdo e Release

O projeto possui validação estrita que distingue o modo de desenvolvimento/prévia do modo de publicação oficial:

- **Modo Preview (`npm run build`)**: permite visualizar a landing page com dados de rascunho (*draft*), omitindo links de agendamento fictícios caso o contato ainda não tenha sido aprovado, e gerando `<meta name="robots" content="noindex, nofollow">`.
- **Validação de Conteúdo (`npm run validate:content`)**: inspeciona o arquivo `src/content/site.ts` e bloqueia a publicação se faltarem itens obrigatórios (canal de contato HTTPS/mailto/tel aprovado, domínio público com HTTPS, número de registro profissional e revisão editorial aprovada).
- **Build de Publicação (`npm run build:release`)**: executa a validação editorial estrita, compila os pacotes e gera os arquivos finais de publicação com canonical URL, `robots.txt` público e `sitemap.xml`.

## Pendências para Publicação Oficial

Para liberar a versão de produção para o público geral:
1. **Canal de Contato**: configurar o link ou número oficial de WhatsApp / e-mail / telefone aprovado em `src/content/site.ts`.
2. **Registro Profissional**: preencher o número do CRP de Julia Milagres.
3. **Domínio Oficial**: definir o domínio HTTPS final no campo `seo.siteUrl`.
4. **Revisão Editorial**: atualizar o campo `editorialStatus: 'approved'` e `reviewedAt`.
