import type { CSSProperties, ReactNode } from 'react'
import type { CodeAboutMeProps } from './CodeAboutMe.types'

export function CodeAboutMe({}: CodeAboutMeProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 720,
        minHeight: 560,
        padding: '28px 0 24px 26px',
        overflow: 'hidden',
        borderRadius: 24,
      }}
    >
      {/* Glow superior */}
      <div
        style={{
          position: 'absolute',
          right: -40,
          top: -70,
          width: 430,
          height: 260,
          background:
            'radial-gradient(circle, rgba(37,99,235,0.48) 0%, rgba(37,99,235,0.16) 44%, transparent 72%)',
          filter: 'blur(4px)',
        }}
      />

      {/* Glow lateral */}
      <div
        style={{
          position: 'absolute',
          left: -92,
          top: 260,
          width: 210,
          height: 110,
          borderRadius: '50%',
          border: '2px solid rgba(99,102,241,0.72)',
          filter: 'blur(0.4px)',
          boxShadow: '0 0 36px rgba(99,102,241,0.45)',
          transform: 'rotate(-18deg)',
        }}
      />

      {/* Glow inferior */}
      <div
        style={{
          position: 'absolute',
          left: 40,
          bottom: 4,
          width: 560,
          height: 72,
          background: 'rgba(79,70,229,0.44)',
          filter: 'blur(34px)',
          borderRadius: '50%',
        }}
      />

      {/* Pontilhado lateral */}
      <div
        style={{
          position: 'absolute',
          right: -6,
          top: 4,
          width: 230,
          height: 360,
          opacity: 0.24,
          backgroundImage:
            'radial-gradient(rgba(96,165,250,0.82) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Card editor */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          minHeight: 500,
          borderRadius: 22,
          background: 'rgba(5, 8, 22, 0.84)',
          border: '1px solid rgba(96,165,250,0.24)',
          boxShadow:
            '0 20px 60px rgba(2,6,23,0.44), 0 0 0 1px rgba(59,130,246,0.08) inset, inset 0 1px 0 rgba(255,255,255,0.05)',
          backdropFilter: 'blur(18px)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            position: 'relative',
            height: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(148,163,184,0.08)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 34,
              display: 'flex',
              gap: 10,
            }}
          >
            <span style={dotStyle('#ff5f56')} />
            <span style={dotStyle('#ffbd2e')} />
            <span style={dotStyle('#27c93f')} />
          </div>

          <span
            style={{
              color: '#e5e7eb',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 0.2,
            }}
          >
            about.tsx
          </span>

          <span
            style={{
              marginLeft: 24,
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#3b82f6',
              boxShadow: '0 0 18px rgba(59,130,246,0.9)',
            }}
          />
        </div>

        {/* Código */}
        <pre
          style={{
            margin: 0,
            padding: '34px 42px 38px',
            color: '#e5e7eb',
            fontSize: 17,
            lineHeight: 1.72,
            fontFamily:
              'JetBrains Mono, Fira Code, Consolas, Monaco, monospace',
            whiteSpace: 'pre-wrap',
          }}
        >
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
            <String>{'"developer"'}</String>
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
        </pre>
      </div>
    </div>
  )
}

function CodeLine({
  children,
  indent = 0,
}: {
  children: ReactNode
  indent?: number
}) {
  return (
    <div
      style={{
        paddingLeft: indent * 28,
      }}
    >
      {children}
    </div>
  )
}

function Keyword({ children }: { children: ReactNode }) {
  return <span style={{ color: '#f472b6', fontWeight: 700 }}>{children}</span>
}

function Variable({ children }: { children: ReactNode }) {
  return <span style={{ color: '#a3e635', fontWeight: 700 }}>{children}</span>
}

function Tag({ children }: { children: ReactNode }) {
  return <span style={{ color: '#fda4af', fontWeight: 600 }}>{children}</span>
}

function Attr({ children }: { children: ReactNode }) {
  return <span style={{ color: '#c4b5fd' }}>{children}</span>
}

function String({ children }: { children: ReactNode }) {
  return <span style={{ color: '#5eead4', fontWeight: 600 }}>{children}</span>
}

function Comment({ children }: { children: ReactNode }) {
  return <span style={{ color: '#64748b' }}>{children}</span>
}

function Text({ children }: { children: ReactNode }) {
  return <span style={{ color: '#e5e7eb' }}>{children}</span>
}

function dotStyle(color: string): CSSProperties {
  return {
    width: 14,
    height: 14,
    borderRadius: '50%',
    background: color,
    boxShadow: `0 0 12px ${color}`,
  }
}
