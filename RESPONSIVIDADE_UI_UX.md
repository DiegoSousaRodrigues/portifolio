# Plano de responsividade, UI e UX

## Objetivo

Garantir que o portfolio funcione bem em telas pequenas, medias e grandes, sem quebras de layout, textos espremidos, botoes sem area confortavel de toque, overflow horizontal ou secoes visualmente desbalanceadas.

Este plano complementa o `ANALISE_PROJETO.md` e deve ser atualizado conforme as melhorias forem implementadas.

## Como manter este documento atualizado

Sempre que uma etapa for concluida:

1. riscar o item concluido com `~~texto~~`;
2. registrar a data e um resumo curto em `Historico de execucao`;
3. validar em pelo menos `390px`, `768px`, `1024px` e `1280px`;
4. rodar `yarn lint` e `yarn build`;
5. adicionar prints no pull request quando a mudanca alterar visualmente a pagina.

## Viewports obrigatorios

- `390px`: celular comum.
- `430px`: celular grande.
- `768px`: tablet/retrato.
- `1024px`: tablet/painel pequeno.
- `1280px`: desktop comum.
- `1440px`: desktop largo.

## Criterios gerais de aceite

1. A pagina nao deve gerar scroll horizontal em nenhum viewport.
2. Todo texto deve caber dentro do proprio container.
3. Nenhum botao ou link deve quebrar de forma visualmente ruim.
4. Elementos interativos devem ter area de toque confortavel no mobile.
5. A hierarquia visual deve continuar clara em mobile e desktop.
6. As secoes devem ter espacamento vertical consistente.
7. O conteudo principal deve ficar legivel sem zoom.
8. Imagens, iframes e cards devem ter largura responsiva previsivel.
9. O foco por teclado deve continuar visivel.
10. O comportamento de hover nao deve ser a unica pista de interacao.

## Diagnostico inicial

### Pontos mais criticos

1. `CardContact` ainda usa layout em linha no mobile e larguras calculadas rigidas.
2. `CodeAboutMe` tem largura e altura pensadas para desktop, podendo ocupar espaco demais no mobile.
3. `CardAboutMe` usa cards quadrados em linha, o que pode apertar demais em telas pequenas.
4. `CardExperiences` limita o card a `md:w-1/3`, mesmo quando a lista tem pouco conteudo.
5. `ExperiencePreviewFrame` usa altura fixa de `400px`, o que pode ficar pesado no mobile.
6. `Header` pode ficar apertado em telas pequenas se o CTA e a marca competirem por espaco.
7. `Container` usa `px-[32px]` fixo, que pode ser excessivo em celulares.
8. `CardHeader` usa `justify-between`, mas precisa lidar bem com a existencia ou ausencia de acao.

## Ordem recomendada de execucao

### Fase 1: ~~base responsiva global~~

1. ~~Ajustar `Container` para usar padding responsivo:
   - mobile: padding lateral menor;
   - tablet/desktop: padding mais confortavel;
   - desktop largo: largura maxima opcional para evitar linhas muito extensas.~~
2. ~~Revisar espacamento vertical entre secoes.~~
3. ~~Garantir que `html` e `body` nao permitam overflow horizontal acidental.~~
4. ~~Criar um padrao de foco reutilizavel para links e botoes, se a duplicacao aumentar.~~

### Fase 2: ~~Header e Hero~~

1. ~~Ajustar `Header` para mobile:
   - reduzir padding interno do CTA em telas pequenas;
   - garantir que a marca e o botao nao se sobreponham;
   - considerar esconder o texto do CTA em telas muito pequenas apenas se necessario.~~
2. ~~Ajustar `CardPrincipal`:
   - reduzir altura minima no mobile;
   - revisar escala do titulo;
   - garantir que os CTAs fiquem em coluna ou largura total quando necessario;
   - revisar espacamento entre texto, botoes e links sociais.~~
3. ~~Ajustar `CodeAboutMe`:
   - reduzir `min-height` no mobile;
   - ajustar padding interno do bloco de codigo;
   - reduzir fonte do codigo em telas pequenas;
   - limitar ou ocultar decoracoes que ocupem espaco demais no mobile;
   - garantir que o codigo nao gere overflow horizontal.~~

### Fase 3: ~~Sobre mim e Tecnologias~~

1. ~~Ajustar `CardAboutMe`:
   - trocar cards em linha por grid responsiva;
   - usar `grid-cols-1` ou `grid-cols-2` no mobile conforme o espaco;
   - evitar `min-h` grande demais nos cards pequenos;
   - manter alinhamento visual consistente no desktop.~~
2. ~~Ajustar `CardTechnology`:
   - fazer grupos ocuparem largura adequada no mobile;
   - permitir quebra organizada dos icones;
   - reduzir gaps em telas pequenas;
   - garantir que cada grupo tenha boa leitura sem ficar estreito demais.~~
3. ~~Revisar titulos de secao:
   - manter tamanhos coerentes;
   - evitar que headings secundarios parecam maiores que o contexto.~~

### Fase 4: ~~Projetos~~

1. ~~Ajustar `CardExperiences`:
   - remover `md:w-1/3` fixo do card ou substituir por uma grid responsiva;
   - usar `grid-cols-1` no mobile e `grid-cols-2/3` apenas quando houver mais projetos;
   - garantir que o card atual nao fique estreito demais no desktop.~~
2. ~~Ajustar preview:
   - reduzir altura do `iframe` no mobile;
   - usar `aspect-ratio` para previsibilidade;
   - preparar o layout para a futura troca por `next/image`.~~
3. ~~Ajustar rodape do card:
   - permitir quebra dos links em coluna no mobile;
   - manter espaco suficiente entre `Ver projeto` e `Codigo`.~~

### Fase 5: ~~Contato~~

1. ~~Ajustar `CardContact`:
   - trocar `Content` para `flex-col` no mobile e `lg:flex-row` no desktop;
   - remover larguras calculadas rigidas no mobile;
   - fazer `Actions` ocupar `w-full` no mobile;
   - manter largura limitada no desktop.~~
2. ~~Ajustar botoes:
   - manter WhatsApp como CTA principal em largura total;
   - usar grid responsiva para e-mail e LinkedIn;
   - empilhar os secundarios em celulares estreitos.~~
3. ~~Ajustar titulo:
   - trocar o `h1` por heading secundario para manter apenas um `h1` na pagina;
   - reduzir tamanho em mobile;
   - evitar linhas excessivamente curtas.~~
4. ~~Revisar nota final:
   - permitir quebra de linha natural;
   - manter icone alinhado ao inicio quando o texto quebrar.~~

### Fase 6: ~~acabamento de UI/UX~~

1. ~~Revisar estados interativos:
   - hover;
   - focus-visible;
   - active;
   - links externos.~~
2. ~~Revisar consistencia de bordas, raios e sombras em cards.~~
3. ~~Revisar contraste de textos secundarios.~~
4. ~~Revisar alinhamento dos icones dentro dos botoes.~~
5. ~~Melhorar microcopy onde houver termos inconsistentes.~~
6. ~~Garantir que links externos tenham comportamento previsivel em nova aba.~~

## Checklist por componente

### `Container`

- [x] Padding responsivo.
- [x] Largura maxima em desktop, se fizer sentido.
- [x] Sem overflow horizontal.

### `Header`

- [x] Marca e CTA cabem em `390px`.
- [x] CTA com toque confortavel.
- [x] Foco visivel preservado.

### `CardPrincipal`

- [x] Titulo legivel em `390px`.
- [x] CTAs nao quebram de forma ruim.
- [x] Links sociais acessiveis e bem espacados.
- [x] Bloco `CodeAboutMe` nao domina a tela no mobile.

### `CodeAboutMe`

- [x] Fonte e padding responsivos.
- [x] Sem overflow horizontal.
- [x] Altura visual adequada no mobile.
- [x] Decoracoes nao cortam conteudo importante.

### `CardAboutMe`

- [x] Cards em grid responsiva.
- [x] Cards nao ficam espremidos.
- [x] Texto e cards mantem boa ordem de leitura.

### `CardTechnology`

- [x] Grupos quebram bem no mobile.
- [x] Icones mantem area e espacamento consistentes.
- [x] Labels continuam legiveis.

### `CardExperiences`

- [x] Card usa largura adequada no desktop.
- [x] Preview tem altura responsiva.
- [x] Links do card nao colidem no mobile.
- [x] Layout preparado para mais projetos.

### `CardContact`

- [x] Layout em coluna no mobile.
- [x] Layout em duas areas no desktop.
- [x] Botoes secundarios empilham ou usam grid responsiva.
- [x] Titulo nao usa `h1`.
- [x] Nota final quebra bem.

## Melhorias de UX recomendadas

1. Manter o WhatsApp como CTA principal do contato.
2. Evitar botoes sem destino ate existirem rotas ou secoes reais.
3. Usar textos de acao consistentes:
   - `Ver projeto`;
   - `Codigo`;
   - `Enviar e-mail`;
   - `LinkedIn`.
4. Melhorar o card de projetos com descricao, stack e links bem separados.
5. Considerar um pequeno menu interno no header apenas se a pagina crescer.
6. Evitar animacoes pesadas; priorizar transicoes curtas e previsiveis.

## Validacao tecnica

Rodar ao final de cada fase:

```bash
yarn lint
yarn build
```

Validar visualmente:

1. abrir a pagina no navegador;
2. testar `390px`, `768px`, `1024px`, `1280px` e `1440px`;
3. navegar por teclado ate todos os links;
4. testar links internos `#sobre`, `#projetos` e `#contato`;
5. verificar se nao ha scroll horizontal.

## Historico de execucao

### 19 de maio de 2026

- Criado o plano de responsividade, UI e UX do portfolio.
- Mapeados os principais riscos responsivos por componente.
- Definida a ordem recomendada de implementacao em seis fases.
- Concluida a implementacao responsiva global do portfolio.
- Ajustados `Container`, `Header`, `CardPrincipal`, `CodeAboutMe`, `CardAboutMe`, `CardTechnology`, `CardExperiences` e `CardContact`.
- Validado que o viewport mobile de `390px` nao gera overflow horizontal.
