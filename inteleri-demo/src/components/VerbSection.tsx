import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type VerbSectionProps = {
  title: string
  lead: string
  ctaHref: string
  ctaLabel?: string
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
  className?: string
}

export const VerbSection = React.memo(function VerbSection({
  title,
  lead,
  ctaHref,
  ctaLabel = 'Learn more',
  imageSrc,
  imageAlt,
  reverse,
  className
}: VerbSectionProps) {
  return (
    <section className={cn('py-16 md:py-20 section-background', className)} aria-labelledby={`${title}-title`}>
      <div className={cn('mx-auto max-w-6xl px-4')}>        
        <div className={cn('grid items-center gap-8 md:gap-12', reverse ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : 'md:grid-cols-2')}>
          {/* Copy */}
          <div>
            <h2 id={`${title}-title`} className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-3 text-white/80 max-w-prose">{lead}</p>
            <div className="mt-6">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-100 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
          {/* Illustration */}
          <div className="relative">
            <div className="rounded-2xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-xl p-4">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? ''}
                  width={880}
                  height={520}
                  className="rounded-xl ring-1 ring-white/10"
                />
              ) : (
                <div
                  className="h-56 md:h-64 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 ring-1 ring-white/10"
                  role="img"
                  aria-label={`${title} illustration placeholder`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default VerbSection