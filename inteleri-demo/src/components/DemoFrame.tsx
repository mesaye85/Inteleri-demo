'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Shield, Bot, LineChart, Truck, FileText, Gauge } from 'lucide-react'
import { useReducedMotion } from './Motion'

export type DemoItem = {
  id: string
  badge?: string
  icon?: React.ReactNode
  title: string
  lines?: string[]
}

export type DemoFrameProps = {
  items?: DemoItem[]
  intervalMs?: number
  className?: string
  disclaimer?: string
}


const DEFAULT_ITEMS: DemoItem[] = [
  {
    id: 'load-posting',
    badge: 'Loadboard',
    icon: <Truck className="h-5 w-5" aria-hidden />,
    title: 'Post → Bid → Award',
    lines: [
      'Intelligent matching engaged',
      '3 bids received · structured terms',
      'Carrier trust tier: A'
    ]
  },
  {
    id: 'rfq',
    badge: 'Procurement',
    icon: <FileText className="h-5 w-5" aria-hidden />,
    title: 'RFQ compiled',
    lines: [
      '5 suppliers shortlisted',
      'Policy token: rfq.issue.v1',
      'Spend guardrail active'
    ]
  },
  {
    id: 'emissions',
    badge: 'Emissions',
    icon: <Gauge className="h-5 w-5" aria-hidden />,
    title: 'Period report ready',
    lines: [
      'Intensity: 0.82 kg/mi',
      'Targets on track (QTD)',
      'Export: ESG PDF'
    ]
  },
  {
    id: 'risk',
    badge: 'Intelligence',
    icon: <LineChart className="h-5 w-5" aria-hidden />,
    title: 'Location risk brief',
    lines: [
      '10-domain score computed',
      'Advisory: reroute SE-05',
      'Confidence: medium'
    ]
  },
  {
    id: 'tsm',
    badge: 'TSM',
    icon: <Bot className="h-5 w-5" aria-hidden />,
    title: 'Runbook compiled',
    lines: [
      '8 services orchestrated',
      'Robotics co‑pilot engaged',
      'SOC 2 controls mapped'
    ]
  }
]

export const DemoFrame = React.memo(function DemoFrame({
  items = DEFAULT_ITEMS,
  intervalMs = 7000,
  className,
  disclaimer = 'Interactive demonstration. Not live input.'
}: DemoFrameProps) {
  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const reduced = useReducedMotion()

  const len = items.length
  const active = items[index]

  React.useEffect(() => {
    if (reduced || paused || len === 0) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len)
    }, Math.max(3000, intervalMs))
    return () => window.clearInterval(id)
  }, [intervalMs, len, paused, reduced])

  function go(dir: -1 | 1) {
    setIndex((i) => {
      const nxt = i + dir
      if (nxt < 0) return len - 1
      if (nxt >= len) return 0
      return nxt
    })
  }

  return (
    <section
      aria-label="Visual demo"
      className={cn(
        'relative rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-xl',
        'shadow-[0_0_80px_-30px_rgba(56,189,248,0.45)]',
        'p-4 sm:p-6 md:p-8',
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center gap-2 text-xs text-white/70">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          <Shield className="h-3.5 w-3.5" aria-hidden /> Demo
        </span>
        <span aria-live="polite">{disclaimer}</span>
      </div>

      {/* Slide */}
      <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="md:col-span-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            {active.icon}
            <span>{active.badge}</span>
          </div>
          <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-white">
            {active.title}
          </h3>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            {active.lines?.map((l, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                <span>{l}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              onClick={() => go(-1)}
              aria-label="Previous"
            >
              Prev
            </button>
            <button
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              onClick={() => go(1)}
              aria-label="Next"
            >
              Next
            </button>
          </div>
        </div>
        <div className="md:col-span-2">
          {/* Faux UI surface */}
          <div
            className={cn(
              'relative h-64 md:h-72 rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-900/70',
              'ring-1 ring-white/10 shadow-inner overflow-hidden'
            )}
            role="img"
            aria-label={`${active.title} illustration`}
          >
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.35),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.25),transparent_50%)]" />
            <div className="absolute inset-4 grid grid-cols-12 grid-rows-12 gap-2 text-[10px] sm:text-xs">
              <div className="col-span-7 row-span-6 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="col-span-5 row-span-2 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="col-span-5 row-span-4 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="col-span-12 row-span-4 rounded-xl bg-white/5 ring-1 ring-white/10" />
            </div>
          </div>
          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {items.map((it, i) => (
              <button
                key={it.id}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full ring-1 ring-white/15',
                  i === index ? 'bg-cyan-300' : 'bg-white/20 hover:bg-white/30'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})