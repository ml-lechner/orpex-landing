import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'Orpex — The Operating System for AI-First Startups',
  description: 'Incorporate your company and deploy an autonomous AI workforce. Finance, compliance, GTM, and operations — handled from day one.',
  openGraph: {
    title: 'Orpex — The Operating System for AI-First Startups',
    description: 'Incorporate your company and deploy an autonomous AI workforce that handles finance, compliance, GTM, and operations from day one.',
    type: 'website',
    url: 'https://orpex.ai',
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23818cf8'/%3E%3Cstop offset='100%25' stop-color='%233b82f6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='2' y='2' width='28' height='28' rx='8' stroke='url(%23g)' stroke-width='2.5' fill='none'/%3E%3Ccircle cx='16' cy='16' r='6' fill='url(%23g)'/%3E%3C/svg%3E",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
