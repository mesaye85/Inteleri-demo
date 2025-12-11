"use client";

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion } from "framer-motion"
import GlassCard from "./GlassCard"
import NeonButton from "./NeonButton"
import Link from "next/link"

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
    <section className={cn('py-16 md:py-20 section-background overflow-hidden', className)} aria-labelledby={`${title}-title`}>
      <div className={cn('mx-auto max-w-6xl px-4')}>
        <div className={cn('grid items-center gap-8 md:gap-12', reverse ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : 'md:grid-cols-2')}>
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id={`${title}-title`} className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-3 text-white/80 max-w-prose leading-relaxed text-lg">{lead}</p>
            <div className="mt-8">
              <Link href={ctaHref}>
                <NeonButton variant="neon">
                  {ctaLabel}
                </NeonButton>
              </Link>
            </div>
          </motion.div>
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlassCard className="p-4 bg-slate-900/40">
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
                  className="h-56 md:h-64 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 ring-1 ring-white/10 relative overflow-hidden group"
                  role="img"
                  aria-label={`${title} illustration placeholder`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default VerbSection