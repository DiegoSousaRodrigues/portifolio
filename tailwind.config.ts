import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        heading: ['var(--font-satoshi)', 'sans-serif'],
        'mono-code': [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'monospace',
        ],
      },
      fontSize: {
        xxs: '10px',
      },
      colors: {
        background: {
          DEFAULT: '#050816',
          secondary: '#0B1120',
          elevated: '#111827',
        },

        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          foreground: '#FFFFFF',
          border: '#3A78EA',
        },

        secondary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          foreground: '#FFFFFF',
        },

        accent: {
          DEFAULT: '#38BDF8',
          soft: 'rgba(56, 189, 248, 0.14)',
        },

        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.14)',
          subtle: 'rgba(255, 255, 255, 0.05)',
          faint: 'rgba(255, 255, 255, 0.04)',
          divider: 'rgba(148, 163, 184, 0.08)',
          editor: 'rgba(96, 165, 250, 0.24)',
        },

        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#64748B',
          subtle: '#A1A1AA',
          project: '#D4D4D8',
          editor: '#E5E7EB',
        },

        card: {
          DEFAULT: 'rgba(15, 23, 42, 0.72)',
          hover: 'rgba(30, 41, 59, 0.86)',
        },

        surface: {
          deep: '#07101F',
          soft: 'rgba(255, 255, 255, 0.03)',
        },

        icon: {
          muted: '#9CA3AF',
        },

        editor: {
          surface: '#050816',
          'side-glow': 'rgba(99, 102, 241, 0.72)',
          'bottom-glow': 'rgba(79, 70, 229, 0.44)',
          keyword: '#F472B6',
          variable: '#A3E635',
          tag: '#FDA4AF',
          attribute: '#C4B5FD',
          string: '#5EEAD4',
          dot: {
            red: '#FF5F56',
            yellow: '#FFBD2E',
            green: '#27C93F',
          },
        },
      },
      boxShadow: {
        'primary-button':
          '0 0 0 1px rgba(125, 170, 255, 0.16) inset, 0 0 10px rgba(37, 99, 235, 0.26), 0 7px 16px rgba(29, 78, 216, 0.22)',
        'about-section': '0 0 40px rgba(59, 130, 246, 0.08)',
        'info-card': '0 0 24px rgba(59, 130, 246, 0.08)',
        'info-icon':
          'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 0 20px rgba(37, 99, 235, 0.20)',
        'experience-card': '0 0 40px rgba(59, 130, 246, 0.08)',
        'editor-card':
          '0 20px 60px rgba(2, 6, 23, 0.44), 0 0 0 1px rgba(59, 130, 246, 0.08) inset, inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'editor-side-glow': '0 0 36px rgba(99, 102, 241, 0.45)',
        'editor-status': '0 0 18px rgba(59, 130, 246, 0.90)',
        'editor-dot-red': '0 0 12px #FF5F56',
        'editor-dot-yellow': '0 0 12px #FFBD2E',
        'editor-dot-green': '0 0 12px #27C93F',
        'og-logo-card':
          '0 24px 80px rgba(2, 6, 23, 0.45), 0 0 44px rgba(59, 130, 246, 0.16)',
      },
      dropShadow: {
        'primary-glow': '0 0 14px rgba(59, 130, 246, 0.85)',
      },
      backgroundImage: {
        'primary-button':
          'linear-gradient(110deg, #1F58DC 0%, #2A68EA 58%, #4A8CFF 100%)',
        'hero-glow':
          'radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.08) 34%, transparent 72%)',
        'heading-accent':
          'linear-gradient(90deg, #60A5FA 0%, #C084FC 50%, #3B82F6 100%)',
        'about-section':
          'radial-gradient(ellipse at 88% 16%, rgba(59, 130, 246, 0.20), transparent 34%), linear-gradient(135deg, rgba(2, 6, 23, 0.96) 0%, rgba(7, 16, 31, 0.92) 54%, rgba(11, 18, 32, 0.94) 100%)',
        'info-card':
          'linear-gradient(145deg, rgba(59, 130, 246, 0.20), rgba(255, 255, 255, 0.05) 44%, rgba(56, 189, 248, 0.10))',
        'info-icon':
          'linear-gradient(145deg, rgba(30, 64, 175, 0.34), rgba(2, 6, 23, 0.92))',
        'experience-card':
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(59, 130, 246, 0.10), rgba(255, 255, 255, 0.05))',
        'experience-glow':
          'radial-gradient(circle at top, rgba(59, 130, 246, 0.15), transparent 55%)',
        'editor-top-glow':
          'radial-gradient(circle, rgba(37, 99, 235, 0.48) 0%, rgba(37, 99, 235, 0.16) 44%, transparent 72%)',
        'editor-dots':
          'radial-gradient(rgba(96, 165, 250, 0.82) 1px, transparent 1px)',
        'og-image':
          'radial-gradient(circle at 82% 18%, rgba(59, 130, 246, 0.34), transparent 32%), linear-gradient(135deg, #050816 0%, #07101F 52%, #0B1120 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
