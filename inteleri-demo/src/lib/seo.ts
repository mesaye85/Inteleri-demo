import type { Metadata } from 'next'
import seo from '@/data/seo.json'

type SEOMetadata = {
  title: string;
  description: string;
}

type SEODictionary = Record<string, SEOMetadata>

export function pageMeta(key: keyof typeof seo): Metadata {
  const entry = seo[key as keyof SEODictionary]
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
