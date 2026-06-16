import type { Metadata } from 'next'
import './global.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'AndyOnchain — Web3 Community Manager',
  description: 'Web3 Community Manager specialising in DeFi, NFTs, and DAOs. Growing communities that actually show up.',
  keywords: ['Web3', 'Community Manager', 'DAO', 'DeFi', 'NFT', 'Discord', 'AndyOnchain'],
  authors: [{ name: 'Andy', url: 'https://twitter.com/andyonchain' }],
  openGraph: {
    title: 'AndyOnchain — Web3 Community Manager',
    description: 'Growing communities that actually show up.',
    url: 'https://andyonchain.xyz',
    siteName: 'AndyOnchain',
    locale: 'en_US',
    type: 'website',
    // Add an OG image by dropping a 1200x630 file at /public/og.png
    // images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AndyOnchain — Web3 Community Manager',
    description: 'Growing communities that actually show up.',
    creator: '@andyonchain',
    // images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-zinc-950 text-white min-h-screen antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}