import { SITE_URL } from '@/lib/site'

type Crumb = { name: string; path: string }

export function BreadcrumbJsonLd({ trail }: { trail: Crumb[] }) {
  const items = [{ name: 'Home', path: '/' }, ...trail]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${c.path}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
