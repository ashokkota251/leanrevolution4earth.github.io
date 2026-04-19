import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' })
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const brand = SITE_NAME
const defaultTitle = 'Lean Revolution 4 Earth — Climate Justice in Action'
const description =
  'A Just, Lean, and Living Earth for All. Advancing climate justice through community-led action, clean energy, and afforestation. Join the movement.'
const siteUrl = SITE_URL
const ogImage = '/og/og-home.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Lean Revolution 4 Earth',
  },
  description,
  applicationName: brand,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'climate justice',
    'lean philosophy',
    'environmental stewardship',
    'clean energy',
    'afforestation',
    'community-led action',
    'NGO India',
    'Lean Revolution 4 Earth',
    'LR4E',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    title: defaultTitle,
    description,
    siteName: brand,
    url: '/',
    locale: 'en_US',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Ocean plastic tangled in mangrove branches on a shoreline — the crisis driving Lean Revolution 4 Earth.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: brand,
  alternateName: 'LR4E',
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  image: `${siteUrl}${ogImage}`,
  description,
  foundingLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
  areaServed: { '@type': 'Place', name: 'Global' },
  knowsAbout: [
    'Climate justice',
    'Lean philosophy',
    'Afforestation',
    'Clean energy',
    'Environmental stewardship',
    'Community-led climate action',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: brand,
  url: siteUrl,
  inLanguage: 'en',
  publisher: { '@type': 'NGO', name: brand, url: siteUrl },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d2400' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
