import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'Portafolio Alberto Barrueta',
  description: 'Desarrollador Web Fullstack con NextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
