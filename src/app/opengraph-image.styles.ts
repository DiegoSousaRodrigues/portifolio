import type { CSSProperties } from 'react'
import tailwindConfig from '../../tailwind.config'

const theme = tailwindConfig.theme.extend as {
  backgroundImage: {
    'heading-accent': string
    'og-image': string
  }
  boxShadow: {
    'og-logo-card': string
  }
  colors: {
    background: {
      DEFAULT: string
      secondary: string
    }
    border: {
      editor: string
    }
    primary: {
      DEFAULT: string
    }
    text: {
      primary: string
      secondary: string
    }
  }
}

export const wrapperStyle: CSSProperties = {
  alignItems: 'center',
  background: theme.backgroundImage['og-image'],
  color: theme.colors.text.primary,
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  padding: 72,
  width: '100%',
}

export const contentStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
  maxWidth: 760,
}

export const eyebrowStyle: CSSProperties = {
  alignItems: 'center',
  color: theme.colors.primary.DEFAULT,
  display: 'flex',
  fontSize: 28,
  fontWeight: 700,
  gap: 12,
  letterSpacing: 0,
  textTransform: 'uppercase',
}

export const eyebrowDotStyle: CSSProperties = {
  background: theme.colors.primary.DEFAULT,
  borderRadius: '999px',
  height: 12,
  width: 12,
}

export const titleStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: 82,
  fontWeight: 800,
  letterSpacing: 0,
  lineHeight: 0.96,
}

export const titleAccentStyle: CSSProperties = {
  background: theme.backgroundImage['heading-accent'],
  backgroundClip: 'text',
  color: 'transparent',
}

export const descriptionStyle: CSSProperties = {
  color: theme.colors.text.secondary,
  fontSize: 34,
  lineHeight: 1.25,
  maxWidth: 700,
}

export const logoCardStyle: CSSProperties = {
  alignItems: 'center',
  border: `1px solid ${theme.colors.border.editor}`,
  borderRadius: 36,
  boxShadow: theme.boxShadow['og-logo-card'],
  display: 'flex',
  height: 310,
  justifyContent: 'center',
  width: 310,
}

export const logoMarkStyle: CSSProperties = {
  alignItems: 'center',
  border: `18px solid ${theme.colors.primary.DEFAULT}`,
  borderRadius: 72,
  color: theme.colors.text.primary,
  display: 'flex',
  fontSize: 98,
  fontWeight: 900,
  height: 186,
  justifyContent: 'center',
  width: 186,
}
