import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Schema Monitor — Detect Breaking Changes Automatically',
  description: 'Monitor API response schemas and get instant alerts when fields are added, removed, or changed. Protect your integrations from silent breaking changes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d7c4ec13-4123-4433-9100-d225edbc62f0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
