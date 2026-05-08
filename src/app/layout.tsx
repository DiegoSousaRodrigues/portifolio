import './globals.css'
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
// Then use: <html lang="en" className={satoshi.variable}>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
