import type { CSSProperties, ReactNode } from 'react'
import type { CodeAboutMeProps } from './CodeAboutMe.types'

export function CodeAboutMe({}: CodeAboutMeProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 760,
        minHeight: 520,
        padding: 32,
        overflow: 'hidden',
        borderRadius: 18,
        border: '1px solid var(--border)',
        background:
          'radial-gradient(circle at 86% 6%, rgba(59,130,246,0.09), transparent 34%), linear-gradient(135deg, rgba(15,23,42,0.34) 0%, rgba(11,17,32,0.44) 52%, rgba(5,8,22,0.58) 100%)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.02) inset, 0 18px 44px rgba(2,6,23,0.14)',
      }}
    >
      {/* Glow lateral */}
      <div
        style={{
          position: 'absolute',
          left: -70,
          top: 220,
          width: 180,
          height: 90,
          borderRadius: '50%',
          border: '2px solid rgba(59,130,246,0.14)',
          filter: 'blur(1px)',
          boxShadow: '0 0 30px rgba(59,130,246,0.12)',
          transform: 'rotate(-18deg)',
        }}
      />

      {/* Glow inferior */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          bottom: -20,
          width: 520,
          height: 60,
          background: 'rgba(56,189,248,0.08)',
          filter: 'blur(35px)',
          borderRadius: '50%',
        }}
      />

      {/* Pontilhado lateral */}
      <div
        style={{
          position: 'absolute',
          right: 32,
          top: 90,
          width: 180,
          height: 260,
          opacity: 0.1,
          backgroundImage:
            'radial-gradient(rgba(148,163,184,0.72) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* Card editor */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          minHeight: 440,
          borderRadius: 16,
          background: 'rgba(5, 8, 22, 0.72)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow:
            '0 18px 45px rgba(2,6,23,0.28), inset 0 1px 0 rgba(255,255,255,0.04)',
          backdropFilter: 'blur(18px)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            position: 'relative',
            height: 58,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(148,163,184,0.08)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 28,
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
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 0.2,
            }}
          >
            about.tsx
          </span>

          <span
            style={{
              marginLeft: 22,
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
            padding: '34px 44px',
            color: '#e5e7eb',
            fontSize: 18,
            lineHeight: 1.7,
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
