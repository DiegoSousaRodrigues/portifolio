import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        heading: ['var(--font-satoshi)', 'sans-serif'],
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
        },

        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#64748B',
        },

        card: {
          DEFAULT: 'rgba(15, 23, 42, 0.72)',
          hover: 'rgba(30, 41, 59, 0.86)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
