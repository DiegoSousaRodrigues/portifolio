import {
  Attr,
  BottomGlow,
  CodeBlock,
  CodeLine,
  Comment,
  DotsPattern,
  EditorCard,
  EditorHeader,
  FileName,
  Keyword,
  SideGlow,
  StatusDot,
  StringToken,
  Tag,
  Text,
  TopGlow,
  Variable,
  WindowControls,
  WindowDot,
  Wrapper,
} from './CodeAboutMe.styles'

export function CodeAboutMe() {
  return (
    <Wrapper>
      {/* Glow superior */}
      <TopGlow />

      {/* Glow lateral */}
      <SideGlow />

      {/* Glow inferior */}
      <BottomGlow />

      {/* Pontilhado lateral */}
      <DotsPattern />

      {/* Card editor */}
      <EditorCard>
        {/* Header */}
        <EditorHeader>
          <WindowControls>
            <WindowDot color="red" />
            <WindowDot color="yellow" />
            <WindowDot color="green" />
          </WindowControls>

          <FileName>about.tsx</FileName>

          <StatusDot />
        </EditorHeader>

        {/* Código */}
        <CodeBlock>
          <CodeLine>
            <Keyword>const</Keyword> <Variable>DiegoSousa</Variable>{' '}
            <Text>= () =&gt; {'{'}</Text>
          </CodeLine>

          <CodeLine indent={1}>
            <Keyword>return</Keyword> <Text>(</Text>
          </CodeLine>

          <CodeLine indent={2}>
            <Tag>&lt;div</Tag> <Attr>className</Attr>
            <Text>=</Text>
            <StringToken>{'"developer"'}</StringToken>
            <Tag>&gt;</Tag>
          </CodeLine>

          <CodeLine indent={3}>
            <Tag>&lt;h1&gt;</Tag>
            <Text>Code. Design. Performance.</Text>
            <Tag>&lt;/h1&gt;</Tag>
          </CodeLine>

          <CodeLine indent={3}>
            <Tag>&lt;p&gt;</Tag>
            <Text>Construindo soluções</Text>
          </CodeLine>

          <CodeLine indent={4}>
            <Text>que geram valor.</Text>
            <Tag>&lt;/p&gt;</Tag>
          </CodeLine>

          <CodeLine indent={2}>
            <Tag>&lt;/div&gt;</Tag>
          </CodeLine>

          <CodeLine indent={1}>
            <Text>)</Text>
          </CodeLine>

          <CodeLine>
            <Text>{'}'}</Text>
          </CodeLine>

          <br />

          <CodeLine>
            <Comment>{'// Sempre aprendendo, sempre evoluindo.'}</Comment>
          </CodeLine>

          <CodeLine>
            <Keyword>export default</Keyword> <Variable>DiegoSousa</Variable>
          </CodeLine>
        </CodeBlock>
      </EditorCard>
    </Wrapper>
  )
}
