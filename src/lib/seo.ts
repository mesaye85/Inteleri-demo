import type { Metadata } from 'next'
import seo from '@/data/seo.json'

export function pageMeta(key: keyof typeof seo): Metadata {
  const entry = seo[key]
  return {
    title: entry.title,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
    },
  }
}
