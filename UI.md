1) UX patterns to adopt (mapped to Intleri)
Hero chip + 2-line headline + dual CTA
Add a small pill above the H1 (“Introducing Intleri Neon Control Surface”), crisp H1, and two CTAs (primary + ghost). Neon does this cleanly. 
Opera Neon
Interactive “visual demo” slab (non-functional)
Create a framed, fake-interactive slab that cycles through task cards (load posting, RFQ, emissions report) with tiny app badges (Slack, Notion, PDF, etc.). Include a line of microcopy: “Visual demo, not live input.” Neon uses this pattern to convey capability safely. 
Opera Neon
Verb-led sections (×3)
Neon’s “Acts / Understands / Speeds up” maps well to Secures / Understands / Orchestrates:
Secures every request (SECaaS, fail-closed) → /platform#security. 
Opera Neon
Understands your operations (signals, TPI) → /apps/analytics. 
Opera Neon
Orchestrates your flow (TSM runbooks, agents) → /tsm, /agents. 
Opera Neon
“Watch video” CTA
Add a secondary CTA near the hero/demo. Even a placeholder improves scannability. 
Opera Neon
Proof & trust band
Neon uses “From the company that gave you tabs” + Essentials + Privacy sections; mirror with:
“Built by operators for operators” (or “Open docs & public changelog”).
Platform Essentials (VPN/ad-block analog → your “RBAC, Audit, Observability”).
Designed with compliance in mind (SOC 2 mapping, GDPR, NIST). 
Opera Neon
Waitlist / access-code form
If you’re pre-GA, offer “Request access” + optional access code just like Neon’s join flow. 
Opera Neon
Release notes / blog hook
Add a small “Release notes” link near the fold; it adds legitimacy. 
Opera Neon
2) Visual language adjustments
Cards: Larger radius (rounded-3xl/4xl), subtle inner glow, ring-white/10, and uniform icon grid at top-left, matching Neon’s glass tiles. 
Opera Neon
Background: Single dark gradient with a faint radial splash behind the demo slab.
Spacing: Big vertical rhythm (hero → demo → verbs): pt-28 pb-16 per block.
Typography: Tighten H1 tracking slightly; trim paragraph width (max-w-prose).
Badges: Micro-pills for “AI”, “Security”, “Agents” with quiet borders.
3) Agent task list (files & acceptance)
A. Hero polish – src/app/page.tsx
Add chip, 2-line H1, dual CTA.
Accept: Keyboard focus visible; Lighthouse a11y ≥95.
B. Demo Frame – src/components/DemoFrame.tsx
Fake-interactive panel cycling 3–4 “task cards” with app badges; include “visual demo” disclaimer.
Accept: Auto-cycles every 6–8s; pause on hover; reduced-motion disables animation. 
Opera Neon
C. Verb Sections – src/components/VerbSection.tsx + use thrice on home
Props: title, lead, image, ctaHref.
Titles: “Secures every request”, “Understands your operations”, “Orchestrates your flow”.
Accept: Each section links to canonical page; images lazy-load. 
Opera Neon
D. Trust band – src/components/TrustBand.tsx
Three tiles: Platform Essentials · Compliance by Design · Changelog.
Accept: Tiles are links; copy mirrors your SECaaS/compliance. 
Opera Neon
E. Access form – src/components/AccessForm.tsx
Fields: name, work email, company, modules, optional access code; success + error states.
Accept: ARIA labels, serverless action hook; rate-limit errors handled. 
Opera Neon
F. Release notes hook – add small link near hero or verbs → /blog/changelog
Accept: Visible, non-intrusive. 
Opera Neon
4) Microcopy (drop-ins)
Hero subhead: “Connect your ecosystem—from forecast to fleet—on a GPU-native fabric that powers predictive decisions and composable automations.”
Demo disclaimer: “Interactive demonstration. Not live input.” 
Opera Neon
Security tile: “Fail-closed SECaaS · Tenant isolation · Forensics-grade audit.”
Compliance note: “SOC 2 controls mapped · GDPR aligned · NIST/ISO mappings available.”
5) Motion, a11y, perf
Respect prefers-reduced-motion; avoid parallax in hero.
Ensure card text contrast AA on glass; keep glows subtle.
Preload heading font via next/font; priority the hero image.
No keyboard traps in the demo slab; Escape dismisses any overlays.
6) Quick success metrics
Hero bounce ↓; Time on page ↑ (target +10–15%).
CTA click-through ≥ 2.0× baseline after adding demo slab + verbs.
Lighthouse: Perf ≥ 90 / A11y ≥ 95 / SEO ≥ 95.

// ===========================================
// File: src/components/DemoFrame.tsx
// Description: Faux-interactive hero demo slab inspired by Opera Neon
// Notes: Cycles through slides, pauses on hover/focus, respects reduced motion
// ===========================================

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Shield, Bot, LineChart, Truck, FileText, Gauge } from 'lucide-react'

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

function useReducedMotion() {
  const [val, setVal] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setVal(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return val
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

export function DemoFrame({
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
}

// ===========================================
// File: src/components/VerbSection.tsx
// Description: Verb-led strip: Secures / Understands / Orchestrates
// ===========================================

import Image from 'next/image'

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

export function VerbSection({
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
    <section className={cn('py-16 md:py-20', className)} aria-labelledby={`${title}-title`}>
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
}

// ===========================================
// Usage example (Home): src/app/page.tsx
// Note: Keep existing hero; insert below hero on the home page.
// ===========================================

/*
import { DemoFrame } from '@/components/DemoFrame'
import { VerbSection } from '@/components/VerbSection'

export default function HomePage() {
  return (
    <main className="space-y-16">
      {ExistingHeroHere}
      <DemoFrame className="mx-auto max-w-6xl" />

      <VerbSection
        title="Secures every request"
        lead="Security runs first and fails closed. RBAC, tenant isolation, input validation, rate limits, anomaly detection, and forensics‑grade logs across apps and agents."
        ctaHref="/platform#security"
      />

      <VerbSection
        title="Understands your operations"
        lead="An event‑driven Signal Fabric streams and correlates telemetry for predictive KPIs, TPI scoring, and anomaly detection."
        ctaHref="/apps/analytics"
        reverse
      />

      <VerbSection
        title="Orchestrates your flow"
        lead="Tokenized Service Model (TSM) and MCP‑powered agents compile runbooks to coordinate humans, services, and robots with auditable boundaries."
        ctaHref="/tsm"
      />
    </main>
  )
}
*/

How to use (agent-ready)
Create files from the canvas into:
src/components/DemoFrame.tsx
src/components/VerbSection.tsx
In src/app/page.tsx, import and place them below the hero:
import { DemoFrame } from '@/components/DemoFrame'
import { VerbSection } from '@/components/VerbSection'

<DemoFrame className="mx-auto max-w-6xl" />

<VerbSection
  title="Secures every request"
  lead="Security runs first and fails closed. RBAC, tenant isolation, input validation, rate limits, anomaly detection, and forensics-grade logs."
  ctaHref="/platform#security"
/>

<VerbSection
  title="Understands your operations"
  lead="Event-driven Signal Fabric streams and correlates telemetry for predictive KPIs, TPI scoring, and anomaly detection."
  ctaHref="/apps/analytics"
  reverse
/>

<VerbSection
  title="Orchestrates your flow"
  lead="TSM + MCP agents compile runbooks to coordinate humans, services, and robots with auditable boundaries."
  ctaHref="/tsm"
/>
Ensure cn helper exists in @/lib/utils (Tailwind class combiner). If not, add a simple one:
export function cn(...a: (string|false|undefined|null)[]) {
  return a.filter(Boolean).join(' ')
}
Acceptance checks
Keyboard focus visible on dots and prev/next.
Tooltip/disclaimer readable; no keyboard traps.
With reduced motion, slides don’t auto-advance.
Lighthouse: A11y ≥95, Perf ≥90.