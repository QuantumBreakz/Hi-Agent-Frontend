import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HI Agent — 24/7 AI Voice Agent for Home Service Businesses',
  description: 'Never miss another call. HI Agent answers every inbound call, qualifies leads, and books appointments for home service contractors — 24 hours a day, 7 days a week.',
  keywords: 'AI voice agent, home service, plumbing, HVAC, roofing, missed calls, AI receptionist',
  openGraph: {
    title: 'HI Agent — 24/7 AI Voice Agent for Home Service Businesses',
    description: 'Never miss another call. HI Agent answers every inbound call, qualifies leads, and books appointments — 24/7.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
