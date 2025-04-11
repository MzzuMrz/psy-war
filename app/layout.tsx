import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M E M E T I C  W A R F A R E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
