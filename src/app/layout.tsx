import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import './responsive.css'

export const metadata: Metadata = {
  title: 'Lim Teng Hong | Software Engineer',
  description: 'Personal website of Lim Teng Hong - Software Engineer & Developer',
  keywords: 'software engineer, developer, web development, portfolio',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* CRT scanline effect */}
        <div className="scanline"></div>
        {children}
      </body>
    </html>
  )
}
