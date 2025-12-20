"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center md:text-left"
          >
            <h2 id={`${title}-title`} className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white break-words leading-tight">
              {title}
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-prose break-words leading-relaxed">{lead}</p>
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm md:text-base text-cyan-100 hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 transition-colors duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              >
                {ctaLabel}
              </a>
            </div>
          </motion.div>
          
          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="rounded-2xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-xl p-4 transition-transform duration-500 hover:scale-[1.02]">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default VerbSection
