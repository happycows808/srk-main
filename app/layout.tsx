import type { Metadata } from 'next'
import { Bebas_Neue, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Street Racing Kills | Reckless Driving Prevention Organization',
  description: 'Street Racing Kills is a 501(c)(3) nonprofit organization dedicated to preventing reckless driving through education, intervention, and community advocacy. Founded 2014, Los Angeles, CA.',
  keywords: 'street racing, reckless driving prevention, SRK, traffic safety, Los Angeles, nonprofit',
  openGraph: {
    title: 'Street Racing Kills',
    description: 'A Reckless Driving Prevention Organization · Founded 2014 · 501(c)(3) · Los Angeles, CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${sourceSerif.variable}`}>
      <body className="bg-black text-white font-serif">
        <Header />
        {children}
      </body>
    </html>
  )
}
