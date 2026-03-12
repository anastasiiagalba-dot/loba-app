import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LOBA - Wellness & Self-Care',
  description: 'Your personal wellness companion by Feral Madre',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-purple-50 text-gray-900 min-h-screen">{children}</body>
    </html>
  )
}
