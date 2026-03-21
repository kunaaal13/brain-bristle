import type { Metadata } from 'next'
import { Crimson_Pro, Geist } from 'next/font/google'
import './globals.css'
import { siteMetadata } from '../content/data'
import Header from '../components/Header'
import Footer from '../components/Footer'

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin'],
  display: 'swap',
})

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
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
