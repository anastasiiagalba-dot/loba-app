import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LOBA - Wellness & Self-Care',
    description: 'Your personal wellness companion by Feral Madre',
      manifest: '/manifest.json',
        themeColor: '#8B5E83',
        }

        export default function RootLayout({ children }: { children: React.ReactNode }) {
          return (
              <html lang="en">
                    <body className="bg-loba-cream text-loba-900 min-h-screen">{children}</body>
                        </html>
                          )
                          }