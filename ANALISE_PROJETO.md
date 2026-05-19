# Analise do projeto de portfolio

## Visao geral

Este projeto e um portfolio pessoal desenvolvido com Next.js 15, React 19, TypeScript, Tailwind CSS 4 e `windstitch`.

## Como manter este documento atualizado

Sempre que uma melhoria deste diagnostico for implementada:

1. atualizar este arquivo na mesma rodada de trabalho;
2. riscar os itens concluidos com `~~texto~~`;
3. registrar a data e um resumo curto do que foi feito no historico de execucao;
4. revisar prioridades se a mudanca alterar o estado real do projeto.

Essa regra existe para que outra conversa consiga continuar o trabalho sem perder o contexto do que ja foi resolvido.

A aplicacao hoje e uma landing page unica, organizada em secoes:

1. Cabecalho
2. Hero principal
3. Sobre mim
4. Tecnologias
5. Projetos em destaque
6. Contato

Os arquivos de rota ficam em `src/app`, os componentes ficam em `src/components`, os tokens visuais principais estao em `src/app/globals.css` e `tailwind.config.ts`, e os assets estaticos estao bem separados em `public/images` e `public/svg`.

## Estado atual do projeto

### O que esta bom

1. **Estrutura simples e facil de entender**
   - A divisao entre `src/app`, `src/components`, `src/styles` e `public` esta clara.
   - A pagina principal em `src/app/page.tsx` funciona como um bom mapa da landing page.

2. **Boa base visual**
   - O projeto ja tem identidade visual consistente no desktop: paleta escura, gradientes, bordas suaves e bom contraste geral.
   - O hero principal e o bloco de codigo em `CodeAboutMe` criam personalidade para o portfolio.

3. **Uso correto de TypeScript em pontos importantes**
   - Os arrays de tecnologias e experiencias usam `satisfies`, o que melhora seguranca de tipos sem perder inferencia.
   - O projeto esta com `strict: true` no `tsconfig.json`.

4. **Componentizacao razoavel para o tamanho atual**
   - Secoes como `CardTechnology`, `CardExperiences` e `CardContact` ja estao separadas.
   - O uso de arquivos `.types.ts` e `.styles.ts` mostra uma intencao boa de padronizacao.

5. **Build funcional**
   - `yarn lint` executa sem erros.
   - `yarn build` conclui com sucesso.
   - O bundle inicial da pagina esta pequeno para uma landing page simples.

### O que esta mediano

1. **A arquitetura atende bem o tamanho atual, mas ainda nao escala bem**
   - Dados de tecnologias e projetos ainda ficam dentro dos componentes.
   - Para uma pagina com poucas secoes isso funciona, mas ficara mais dificil manter quando houver mais projetos, filtros ou conteudo dinamico.

2. **A pagina esta mais madura no desktop do que no mobile**
   - O layout principal responde razoavelmente em telas pequenas.
   - Algumas secoes, principalmente `CardContact`, ainda foram pensadas primeiro para desktop e sofrem quando a largura diminui.

3. **A padronizacao de estilo foi iniciada, mas ainda nao foi concluida**
   - Parte do projeto usa `windstitch`.
   - Parte usa classes Tailwind diretamente no JSX.
   - `CodeAboutMe` usa varios objetos `style` inline.
   - Isso ainda funciona, mas reduz consistencia e aumenta o custo de manutencao.

4. **A base de documentacao ainda e inicial**
   - O `README.md` continua sendo o texto padrao do `create-next-app`.
   - O projeto ainda nao explica seu objetivo, stack, estrutura nem como evoluir o conteudo.

5. **A semantica HTML esta funcional, mas pode melhorar**
   - Existem dois `<h1>` na pagina (`CardPrincipal` e `CardContact`).
   - Alguns titulos de secao sao `span` em vez de headings.
   - Icones acionaveis aparecem em `button` sem rotulo acessivel.

## Pontos ruins priorizados

### 1. Prioridade maxima: ~~botoes importantes ainda nao fazem nada~~

**Status**

~~Concluido em 19 de maio de 2026.~~

Nesta rodada:

- os CTAs principais passaram a usar links reais em vez de botoes sem acao;
- foram adicionados links para GitHub, LinkedIn, WhatsApp e e-mail;
- foram adicionados ids nas secoes `inicio`, `sobre`, `tecnologias`, `projetos` e `contato`;
- `Ver projetos` e `Sobre mim` passaram a navegar para secoes internas;
- os botoes sem destino definido em `CardHeader` deixaram de ser renderizados por enquanto;
- foram adicionados rotulos acessiveis aos links sociais apenas com icone;
- o texto `Linkdin` foi corrigido para `LinkedIn`.

**Onde aparece**

- `src/components/Header/Header.tsx`
- `src/components/CardPrincipal/CardPrincipal.tsx`
- `src/components/CardHeader/CardHeader.tsx`
- `src/components/CardContact/CardContact.tsx`

**Problema original**

Varios CTAs sao renderizados como `button`, mas nao possuem acao real:

- `Vamos conversar`
- `Ver projetos`
- `Sobre mim`
- botoes sociais do hero
- botoes de contato
- `Ver todas`
- `Ver todos os projetos`

Em um portfolio, conversao e navegacao sao parte central do produto. Hoje o usuario ve comandos visuais, mas varios deles nao entregam comportamento.

**Como foi resolvido**

1. ~~Definir o destino de cada CTA:
   - scroll interno para secoes da pagina;
   - link externo para GitHub, LinkedIn, WhatsApp e e-mail;
   - rota futura para uma pagina de projetos, se ela for criada.~~
2. ~~Adicionar `id` nas secoes principais, por exemplo:
   - `sobre`
   - `tecnologias`
   - `projetos`
   - `contato`~~
3. ~~Trocar `button` por:
   - `<a href="#projetos">` para navegacao interna simples;
   - `Link` do Next.js se houver rota interna;
   - `<a href="...">` para canais externos.~~
4. ~~Manter `button` apenas quando houver uma acao real de interface, como abrir modal ou disparar formulario.~~
5. ~~Validar teclado, foco visivel e comportamento em nova aba para links externos.~~

### 2. Prioridade maxima: ~~secao de contato quebra no mobile~~

**Status**

~~Concluido em 19 de maio de 2026.~~

Nesta rodada:

- `CardContact` passou a usar layout em coluna no mobile e duas areas no desktop;
- as larguras calculadas rigidas foram removidas dos botoes secundarios;
- WhatsApp ficou como CTA principal em largura total;
- e-mail e LinkedIn passaram a usar grid responsiva;
- o titulo da secao deixou de ser `h1`, mantendo apenas um `h1` principal na pagina;
- a nota final passou a quebrar melhor em telas pequenas.

**Onde aparece**

- `src/components/CardContact/CardContact.tsx`

**Problema original**

No mobile, a secao de contato continua em duas colunas. Isso comprime o conteudo lateral, quebra os botoes e deixa o texto muito estreito.

**Como foi resolvido**

1. ~~Trocar o container principal interno de:
   - `flex gap-4`
   - para algo como `flex flex-col gap-6 lg:flex-row`.~~
2. ~~Fazer os dois blocos internos ocuparem largura total no mobile:
   - `w-full`
   - e aplicar largura limitada apenas a partir de `lg`.~~
3. ~~Substituir o grupo dos botoes secundarios por uma grade responsiva:
   - `grid grid-cols-1 gap-3 sm:grid-cols-2`.~~
4. ~~Remover larguras calculadas rigidas no mobile, como:
   - `min-w-[calc(100%_/_3_)]`
   - `w-[calc(100%_/_2_-_16px)]`~~
5. ~~Testar pelo menos em:
   - 390 px
   - 768 px
   - 1280 px~~
6. ~~Depois da correcao, revisar espacamento vertical e tamanho do titulo para evitar linhas excessivamente curtas.~~

### 3. Prioridade alta: ~~falta o basico de idioma, SEO e metadata~~

**Status**

~~Concluido em 19 de maio de 2026.~~

Nesta rodada:

- o idioma do documento foi alterado para `pt-BR`;
- `src/app/layout.tsx` passou a exportar metadata completa do portfolio;
- foram adicionados titulo, descricao, autores, palavras-chave, canonical, Open Graph, Twitter Card, robots e icons;
- foi criada uma imagem Open Graph dinamica em `src/app/opengraph-image.tsx`;
- os estilos da imagem Open Graph ficaram em `src/app/opengraph-image.styles.ts`;
- a URL base passa a usar `NEXT_PUBLIC_SITE_URL`, com fallback local para desenvolvimento.

**Onde aparece**

- `src/app/layout.tsx`

**Problema original**

A pagina esta em portugues, mas o HTML usa `lang="en"`. Alem disso, o projeto ainda nao define metadata propria de portfolio.

**Impacto original**

- Leitores de tela podem escolher pronuncia inadequada.
- Motores de busca recebem sinais fracos sobre o conteudo.
- Compartilhamento em redes sociais fica sem titulo, descricao e imagem dedicados.

**Como foi resolvido**

1. ~~Alterar `<html lang="en">` para `<html lang="pt-BR">`.~~
2. ~~Exportar `metadata` no `layout.tsx` com `title`, `description`, `keywords`, `authors`, `openGraph` e `twitter`.~~
3. ~~Criar uma imagem Open Graph real para o portfolio.~~
4. ~~Definir icons e revisar o `title` exibido no navegador.~~
5. Se o portfolio ganhar mais paginas, adicionar `sitemap.ts` e `robots.ts`.

### 4. Prioridade alta: ~~padrao de estilos ainda esta inconsistente~~

**Status**

~~Concluido em 18 de maio de 2026.~~

Nesta rodada:

- todas as classes de componentes foram movidas para arquivos `.styles.ts`;
- `CodeAboutMe` deixou de usar estilos inline;
- estilos compartilhados passaram para `src/styles/button.styles.ts`;
- `tailwind.config.ts` virou a fonte principal de cores, sombras e gradientes;
- `globals.css` ficou apenas com configuracao global minima.

**Onde aparece**

- `src/styles/commum.ts`
- `src/components/CardAboutMe/CardAboutMe.styles.ts`
- `src/components/CardTechnology/CardTechnology.styles.ts`
- `src/components/CardExperiences/CardExperiences.styles.ts`
- `src/components/CardContact/CardContact.styles.ts`
- `src/components/CodeAboutMe/CodeAboutMe.tsx`
- varios componentes com `className` direto no JSX

**Problema original**

O projeto mistura:

- `windstitch`
- classes Tailwind inline
- estilos inline em objeto
- tokens repetidos em `globals.css` e `tailwind.config.ts`

Isso dificulta alteracoes visuais consistentes e aumenta chance de duplicacao.

**Como foi resolvido**

1. ~~Usar `windstitch` em todos os blocos de estilo dos componentes.~~
2. ~~Migrar `CodeAboutMe` para `CodeAboutMe.styles.ts`.~~
3. ~~Preencher os arquivos `.styles.ts` antes vazios que passaram a ter responsabilidade real.~~
4. ~~Extrair o estilo compartilhado de botao para `src/styles/button.styles.ts`.~~
5. ~~Centralizar cores, sombras e gradientes em `tailwind.config.ts`.~~
6. ~~Remover estilos visuais inline e classes diretas no JSX dos componentes.~~

### 5. Prioridade alta: a secao de projetos usa um `iframe` fragil

**Onde aparece**

- `src/components/CardExperiences/CardExperiences.tsx`
- `src/components/CardExperiences/CardExperiences.styles.ts`

**Problema**

O preview do projeto depende de um `iframe` externo. Na revisao atual, o frame aparece em branco. Mesmo quando funciona, essa abordagem traz riscos:

- depende de outro deploy estar no ar;
- pode falhar por politicas de frame;
- custa mais performance;
- fica menos previsivel visualmente.

**Como melhorar passo a passo**

1. Gerar screenshots reais dos projetos.
2. Salvar as imagens em `public/images/projects`.
3. Trocar o `iframe` por `next/image`.
4. Manter o link externo no CTA `Ver projeto`.
5. Se quiser mostrar mais contexto, adicionar:
   - descricao curta;
   - stack;
   - status;
   - link do repositorio.
6. Transformar a lista de projetos em dados separados, por exemplo em `src/data/projects.ts`.
7. Ajustar o layout de `ExperiencesList` para uma grade responsiva quando houver mais de um projeto.

### 6. Prioridade media: acessibilidade ainda esta incompleta

**Onde aparece**

- `src/components/CardPrincipal/CardPrincipal.tsx`
- `src/components/Header/Header.tsx`
- `src/components/CardContact/CardContact.tsx`
- `src/components/CardExperiences/CardExperiences.tsx`

**Problemas observados**

- botoes apenas com icone nao possuem `aria-label`;
- `alt="logo image"` e `alt="github icon"` sao genericos;
- falta foco visivel consistente nos elementos interativos;
- a hierarquia de titulos pode ser melhor organizada.

**Como melhorar passo a passo**

1. Adicionar `aria-label` nos botoes sociais e nos botoes apenas com icone.
2. Trocar textos alternativos genericos por descricoes especificas, por exemplo:
   - `Logo de Diego Sousa`
   - `Icone do GitHub`
3. Garantir `focus-visible` em links e botoes.
4. Manter um unico `<h1>` principal e usar `<h2>`/`<h3>` nas demais secoes.
5. Revisar contraste e ordem de tabulacao depois das alteracoes.

### 7. Prioridade media: ~~ha codigo morto e convencoes inconsistentes~~

**Status**

~~Concluido em 19 de maio de 2026.~~

Nesta rodada:

- o componente vazio `Information` foi removido;
- os arquivos `.types.ts` vazios e sem valor pratico foram removidos;
- todos os barrels de componentes foram padronizados como `index.ts`;
- todos os barrels passaram a usar export nomeado;
- os imports de componentes passaram a usar os barrels;
- `Header` deixou de usar `default export`;
- `scripts/create-component.js` foi atualizado para gerar o novo padrao.

**Onde aparece**

- `src/components/Information/Information.tsx`
- `src/components/BlueCircle/BlueCircle.styles.ts`
- `src/components/CardPrincipal/CardPrincipal.styles.ts`
- `src/components/CodeAboutMe/CodeAboutMe.styles.ts`
- exports em alguns `index.ts` e `index.tsx`

**Problema original**

Existem componentes vazios, arquivos de estilo vazios e um padrao misto de exportacao (`default` em alguns lugares, nomeado em outros).

**Como foi resolvido**

1. ~~Remover componentes e arquivos sem uso real.~~
2. ~~Usar export nomeado para componentes.~~
3. ~~Usar barrels `index.ts` com `export { Component } from './Component'`.~~
4. ~~Corrigir imports para seguir esse padrao.~~
5. ~~Atualizar o gerador `scripts/create-component.js` para gerar o formato definitivo.~~
6. ~~Rodar `yarn lint` apos a limpeza.~~

### 8. Prioridade media: ~~o conteudo esta acoplado demais aos componentes~~

**Status**

~~Concluido em 19 de maio de 2026.~~

Nesta rodada:

- os dados de tecnologias foram movidos para `src/data/technologies.ts`;
- os dados de projetos foram movidos para `src/data/projects.ts`;
- os tipos `Technology` e `Project` passaram a ficar junto dos dados;
- `CardTechnology` e `CardExperiences` passaram a apenas renderizar dados importados.

**Onde aparece**

- `src/components/CardTechnology/CardTechnology.tsx`
- `src/components/CardExperiences/CardExperiences.tsx`

**Problema original**

Tecnologias e projetos ficam declarados diretamente dentro dos componentes. Isso torna edicoes simples dependentes de abrir arquivos de UI.

**Como foi resolvido**

1. ~~Criar uma pasta `src/data`.~~
2. ~~Mover tecnologias para `src/data/technologies.ts`.~~
3. ~~Mover projetos para `src/data/projects.ts`.~~
4. ~~Manter os tipos proximos dos dados em cada modulo.~~
5. ~~Fazer os componentes apenas renderizarem os dados recebidos.~~
6. Se o portfolio crescer, considerar MDX ou CMS para projetos e experiencias.

### 9. Prioridade baixa: documentacao e validacao automatizada ainda sao fracas

**Onde aparece**

- `README.md`
- ausencia de testes no repositorio

**Problema**

O projeto ainda depende muito de conhecimento implicito.

**Como melhorar passo a passo**

1. Substituir o `README.md` padrao por um README proprio contendo:
   - objetivo do portfolio;
   - stack;
   - estrutura de pastas;
   - comandos;
   - como atualizar projetos e tecnologias.
2. Adicionar pelo menos testes de smoke para:
   - renderizacao da home;
   - existencia das secoes principais;
   - links principais.
3. Comecar com React Testing Library para componentes simples.
4. Se houver interesse em validar fluxo visual completo, adicionar Playwright mais adiante.

## Melhorias recomendadas em ordem de execucao

### Fase 1: corrigir o que afeta o usuario agora

1. ~~Ligar todos os CTAs e links reais.~~
2. ~~Corrigir a responsividade de `CardContact`.~~
3. ~~Ajustar `lang="pt-BR"` e metadata basica.~~
4. ~~Corrigir warnings atuais do linter:
   - `MdEmail` nao usado;
   - `IoMdFlash` nao usado.~~

### Fase 2: estabilizar qualidade e manutencao

1. ~~Padronizar estilos em torno de `windstitch`.~~
2. ~~Migrar `CodeAboutMe` para estilos reutilizaveis.~~
3. ~~Remover arquivos vazios e codigo morto.~~
4. ~~Padronizar exports.~~
5. ~~Separar dados de projetos e tecnologias da camada visual.~~

### Fase 3: elevar o nivel do portfolio

1. Trocar o `iframe` por previews em imagem.
2. Melhorar SEO e compartilhamento social.
3. Revisar acessibilidade por completo.
4. Reescrever o README.
5. Adicionar testes basicos.

## Diagnostico tecnico objetivo

### Comandos executados

```bash
yarn lint
yarn build
```

### Resultado

- `yarn lint`: passou sem erros.
- `yarn build`: passou com sucesso.
- O build tambem mostrou um aviso de ambiente sobre multiplos lockfiles fora do repositorio, por causa de um `package-lock.json` em um diretorio superior. Como o projeto usa Yarn, vale manter somente `yarn.lock` dentro deste repositorio e revisar a origem desse aviso no ambiente local.

## Historico de execucao

### 18 de maio de 2026

- ~~Concluida a padronizacao de estilos com Tailwind + `windstitch`.~~
- ~~Movidos os estilos de componentes para arquivos `.styles.ts`.~~
- ~~Centralizados cores, sombras e gradientes em `tailwind.config.ts`.~~
- ~~Substituido `src/styles/commum.ts` por `src/styles/button.styles.ts` para deixar o estilo compartilhado mais especifico.~~

### 19 de maio de 2026

- ~~Concluida a configuracao basica de idioma, SEO e metadata.~~
- ~~Adicionada metadata completa em `src/app/layout.tsx`.~~
- ~~Criada imagem Open Graph dinamica em `src/app/opengraph-image.tsx`.~~
- ~~Concluida a separacao dos dados de tecnologias e projetos da camada visual.~~
- ~~Criados `src/data/technologies.ts` e `src/data/projects.ts`.~~
- ~~Removidos os arquivos de tipos especificos que ficavam dentro das pastas `CardTechnology` e `CardExperiences`.~~
- ~~Concluida a limpeza de codigo morto e padronizacao de barrels.~~
- ~~Removido o componente vazio `Information`.~~
- ~~Padronizados componentes para export nomeado via `index.ts`.~~
- ~~Atualizado `scripts/create-component.js` para gerar o novo padrao.~~
- ~~Concluida a ligacao dos CTAs e links reais.~~
- ~~Criado `src/data/contact-links.ts` para centralizar GitHub, LinkedIn, WhatsApp e e-mail.~~
- ~~Adicionados ids nas secoes principais para navegacao interna.~~
- ~~Removida a renderizacao temporaria dos botoes sem destino definido em `CardHeader`.~~
- ~~Concluida a correcao responsiva do portfolio.~~
- ~~Criado e executado o plano de `RESPONSIVIDADE_UI_UX.md`.~~
- ~~Ajustados layout global, hero, bloco de codigo, sobre, tecnologias, projetos e contato para mobile e desktop.~~

## Conclusao

O projeto ja tem uma base visual forte e uma estrutura boa para uma landing page pessoal. O principal problema neste momento nao e falta de design, e sim acabamento de produto:

1. botoes que parecem prontos mas ainda nao funcionam;
2. quebra real no mobile;
3. falta de padronizacao tecnica que vai custar caro conforme o portfolio crescer.

Se a evolucao seguir a ordem proposta neste documento, o projeto sai rapidamente de "bonito, mas ainda em construcao" para "portfolio consistente, responsivo e facil de manter".
