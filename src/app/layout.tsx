import './globals.css'
import type { Metadata } from 'next'
import { Body } from './layout.styles'
// Place Satoshi .woff2 files in src/assets/fonts/.
// When the files exist, load them with next/font/local here and pass
// the generated variable class to <html>, for example:
//
// import localFont from 'next/font/local'
//
// const satoshi = localFont({
//   src: [
//     { path: '../assets/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
//     { path: '../assets/fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
//     { path: '../assets/fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
//   ],
//   variable: '--font-satoshi',
//   display: 'swap',
// })
//
// Then use: <html lang="pt-BR" className={satoshi.variable}>

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Diego Sousa | Front-end Engineer',
    template: '%s | Diego Sousa',
  },
  description:
    'Portfolio de Diego Sousa, front-end engineer especializado em React, Next.js, TypeScript, performance e interfaces digitais escaláveis.',
  applicationName: 'Portfolio Diego Sousa',
  authors: [{ name: 'Diego Sousa' }],
  creator: 'Diego Sousa',
  publisher: 'Diego Sousa',
  keywords: [
    'Diego Sousa',
    'Front-end Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Diego Sousa',
    title: 'Diego Sousa | Front-end Engineer',
    description:
      'Portfolio de Diego Sousa, especialista em React, Next.js e arquitetura frontend.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Diego Sousa | Front-end Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Sousa | Front-end Engineer',
    description:
      'Portfolio de Diego Sousa, especialista em React, Next.js e arquitetura frontend.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/images/logo2.png',
    apple: '/images/logo2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <Body>{children}</Body>
    </html>
  )
}
