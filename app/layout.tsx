import type { Metadata } from 'next'
import { Crimson_Pro, Geist } from 'next/font/google'
import './globals.css'
import { siteMetadata } from '../content/data'
import Header from '../components/Header'
import Footer from '../components/Footer'

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  display: 'swap',
  subsets: ['latin'],
})

const geist = Geist({
  variable: '--font-geist',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.title,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${crimsonPro.variable} ${geist.variable}`}>
      <body
        className={`site-shell flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
