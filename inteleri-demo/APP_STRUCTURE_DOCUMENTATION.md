# Cursor Agent Guide — Intleri Demo Site

> **Goal:** Implement content + UX improvements for the Intleri demo (Next.js 15 / React 19 / TS), aligned with Security‑first, Predictive‑by‑default, and Composable (TSM/MCP) doctrine. **This file replaces the previous MD guide.**

## Repo assumptions

* Framework: **Next.js App Router**, React 19, TypeScript, Tailwind, Framer Motion.
* Paths used below are relative to repo root.
* Existing folders (keep): `src/app/*`, `src/components/*`, `src/data/*`, `src/lib/*`.

---

## Non‑negotiable standards

1. **Do not degrade security, architecture, or code quality.**
2. **File placement:** create/modify files only in correct folders.
3. **Completion criterion:** page builds pass, lint passes, and visual/ARIA checks meet acceptance criteria below.
4. **No test cheating:** do not disable type checks, linters, or accessibility checks to pass.
5. **Security delegation:** keep security microcopy and boundaries visible; no shadow APIs.

---

## Work plan (high level)

1. **Brand & hero polish** (copy + links + accessible buttons).
2. **Pillars → canonical pages** (card links).
3. **Challenge → Solution → Outcome** strip.
4. **KPIs with “Methodology” tooltips** (data + component).
5. **Compliance wording** (“SOC 2 controls mapped”).
6. **SEO metadata per route**.
7. **Accessibility & motion safety** (contrast, focus, reduced‑motion).
8. **Perf** (LCP, image/fonts, lazy motion).

---

## Step‑by‑step tasks (with acceptance criteria)

### 0) Brand consistency

* **Task:** Normalize brand to **Intleri** across code, metadata, nav, JSON, and OG tags.
* **Files to search:** `src/**/*.{tsx,ts,md,json}`.
* **Accept:** No occurrences of alternative spellings.

### 1) Home hero copy & CTAs (`src/app/page.tsx`)

* **Replace H1** with **“Zero‑Trust Logistics Intelligence.”**
* **Subhead:** *“Connect your ecosystem—from forecast to fleet—on a GPU‑native fabric that powers predictive decisions and **composable** automations.”*
* **CTAs:** Primary `Get a demo`, Secondary `Explore the platform`, Ghost `See a 60‑second tour` (anchor link).
* **Accept:** copy appears; buttons are keyboard reachable and have visible focus rings.

### 2) Pillar cards link to canonical pages

* **Cards:**

  * **Security‑native by design (SECaaS)** → `/platform#security`
  * **Predictive by default (TPI & signals)** → `/apps/analytics`
  * **Composable apps & agents (TSM + MCP)** → `/tsm` (primary) and `/agents` (secondary link in card footnote)
* **Accept:** Cards act as links (whole card clickable); hover and focus styles accessible (WCAG AA).

### 3) “Challenge → Solution → Outcome” strip (below hero)

* **Content:**

  * **Challenge:** Trust & Risk → **Solution:** Security‑Native Foundation → **Outcome:** Auditable operations
  * **Challenge:** Complexity → **Solution:** Composable App Suite → **Outcome:** Lower time‑to‑value
  * Include one KPI microstat per outcome (reuse MetricStat).
* **Accept:** 3 responsive columns ≥768px, stacked on mobile; ARIA roles set (region/heading).

### 4) KPI Methodology tooltips

* **Data:** Add `src/data/methodology.json` (schema below).
* **Component:** Create `components/MethodologyTooltip.tsx` (Radix Tooltip or lightweight div) and integrate into `MetricStat` via new prop `methodologyKey?: string`.
* **Copy:** Small definition + data source + last updated.
* **Accept:** On hover/focus of an info icon, tooltip appears; ESC or blur dismisses; mobile long‑press supported.

### 5) Compliance wording (badge in hero/floating card)

* Replace “SOC2 guardrail verified” → **“SOC 2 controls mapped”** (or “SOC 2 program in progress” if preferred).
* **Accept:** Updated everywhere the phrase appears (cards, footer strips, badges).

### 6) SEO metadata per page

* **Add `export const metadata`** to: `/page.tsx`, `/platform/page.tsx`, `/apps/page.tsx`, `/tsm/page.tsx`, `/agents/page.tsx`, `/robotics/page.tsx`, `/demos/page.tsx`, `/about/page.tsx`.
* Titles/Descriptions from `src/data/seo.json`. Create a small helper in `src/lib/seo.ts`.
* **Accept:** View page source: correct `<title>`/meta description; Lighthouse SEO ≥ 95.

### 7) A11y & motion

* **Reduced motion:** Respect `prefers-reduced-motion` in `components/Motion.tsx`. Provide `shouldReduceMotion` hook and bypass heavy animations.
* **Focus:** Ensure all interactive elements have visible focus and a11y labels.
* **Contrast:** Verify button text and card copy pass AA on the glass gradient.
* **Accept:** Axe/lighthouse a11y ≥ 95; keyboard‑only nav works.

### 8) Performance hygiene

* **Fonts:** Use `next/font` for Inter and Roboto Mono; preload headings weight.
* **Images:** Convert hero background to static asset via `next/image`, set `priority` on the first visual.
* **Motion:** Lazy‑mount animation blocks on intersection; avoid hydrating non‑critical motion before LCP.
* **Accept:** Lighthouse Performance ≥ 90 on desktop with throttling.

---

## New/updated files (snippets)

### `src/data/methodology.json`

```json
{
  "post_to_award_hours": {
    "name": "Post→Award (hours)",
    "definition": "Median time from posting to awarded status in the load lifecycle.",
    "source": "Demo telemetry or connected TMS stream",
    "last_updated": "2025-10-01"
  },
  "eta_accuracy_pct": {
    "name": "ETA Accuracy (%)",
    "definition": "Share of trips with actual arrival within SLA window vs planned ETA.",
    "source": "Carrier telemetry + route plan",
    "last_updated": "2025-10-01"
  },
  "co2_intensity_kg_per_mi": {
    "name": "CO₂ Intensity (kg/mi)",
    "definition": "Trip‑level emissions per mile averaged across active routes.",
    "source": "Fuel / EV logs + emissions model",
    "last_updated": "2025-10-01"
  }
}
```

### `src/components/MethodologyTooltip.tsx`

```tsx
'use client';
import * as React from 'react';
import { Info } from 'lucide-react';
import methodology from '@/data/methodology.json';

type Props = { keyName: keyof typeof methodology; className?: string; };

export default function MethodologyTooltip({ keyName, className }: Props) {
  const data = (methodology as any)[keyName];
  if (!data) return null;
  return (
    <span className={className} aria-live="polite">
      <span className="inline-flex items-center gap-1 align-middle">
        <Info aria-hidden className="h-4 w-4" />
        <span className="sr-only">Methodology for {data.name}</span>
      </span>
      <span className="relative group">
        <span className="sr-only">Open methodology</span>
        <div className="invisible group-hover:visible group-focus-within:visible absolute z-50 mt-2 w-72 rounded-2xl bg-slate-900/95 p-3 text-xs shadow-xl ring-1 ring-white/10">
          <div className="font-medium mb-1">{data.name}</div>
          <div className="opacity-90">{data.definition}</div>
          <div className="mt-2 opacity-70">Source: {data.source}</div>
          <div className="opacity-60">Updated: {data.last_updated}</div>
        </div>
      </span>
    </span>
  );
}
```

### `src/components/MetricStat.tsx` (augment)

```tsx
// add prop
export type MetricStatProps = {
  label: string;
  value: string | number;
  delta?: string;
  methodologyKey?: 'post_to_award_hours' | 'eta_accuracy_pct' | 'co2_intensity_kg_per_mi';
};

// inside component
{props.methodologyKey && (
  <MethodologyTooltip keyName={props.methodologyKey} className="ml-2" />
)}
```

### `src/components/ChallengeSolutionOutcome.tsx`

```tsx
export default function ChallengeSolutionOutcome() {
  const items = [
    {
      challenge: 'Trust & Risk',
      solution: 'Security‑Native Foundation',
      outcome: 'Auditable operations',
      kpi: { label: 'ETA Accuracy', value: '94.6%', methodologyKey: 'eta_accuracy_pct' }
    },
    {
      challenge: 'Complexity',
      solution: 'Composable App Suite',
      outcome: 'Lower time‑to‑value',
      kpi: { label: 'Post→Award', value: '3.2 h', methodologyKey: 'post_to_award_hours' }
    },
    {
      challenge: 'Sustainability',
      solution: 'Emissions Intelligence',
      outcome: 'Target tracking',
      kpi: { label: 'CO₂ Intensity', value: '0.82 kg/mi', methodologyKey: 'co2_intensity_kg_per_mi' }
    }
  ];
  return (
    <section aria-labelledby="cso-title" className="mt-16">
      <h2 id="cso-title" className="text-xl font-semibold">Challenge → Solution → Outcome</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-2xl p-5 bg-slate-800/50 ring-1 ring-white/10">
            <div className="text-sm opacity-80">Challenge</div>
            <div className="font-medium">{it.challenge}</div>
            <div className="mt-3 text-sm opacity-80">Solution</div>
            <div className="font-medium">{it.solution}</div>
            <div className="mt-3 text-sm opacity-80">Outcome</div>
            <div className="font-medium">{it.outcome}</div>
            <div className="mt-4 text-sm flex items-center gap-2">
              <span className="opacity-80">{it.kpi.label}:</span>
              <span className="font-semibold">{it.kpi.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

### `src/lib/seo.ts`

```ts
import type { Metadata } from 'next';
import seo from '@/data/seo.json';

export function pageMeta(key: keyof typeof seo): Metadata {
  const entry = (seo as any)[key];
  return {
    title: entry.title,
    description: entry.description,
    other: { 'og:title': entry.title, 'og:description': entry.description }
  };
}
```

### Example per‑page metadata (`src/app/platform/page.tsx`)

```tsx
import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('platform');
export default function PlatformPage() { /* ... */ }
```

### Reduced motion hook (`src/components/Motion.tsx`)

```tsx
'use client';
import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);
  return reduced;
}
```

---

## Copy updates (drop‑ins)

* **Hero H1:** *Zero‑Trust Logistics Intelligence.*
* **Subhead:** *Connect your ecosystem—from forecast to fleet—on a GPU‑native fabric that powers predictive decisions and **composable** automations.*
* **Floating card badge:** *TSM runbook compiled*

  * Bullets: `8 services orchestrated · Robotics co‑pilot engaged · SOC 2 controls mapped`

---

## Routing & links

* Pillar cards route to: `/platform#security`, `/apps/analytics`, `/tsm` (+ inline link to `/agents`).
* Add a small **Security model** link in hero → `/platform#security`.

---

## Accessibility checklist

* Focus ring visible on: nav links, CTA buttons, cards (link wrappers), icons triggering tooltips.
* Tooltip is dismissible (blur/ESC) and does not trap focus.
* Color contrast AA: verify primary button text, card body text on glass backgrounds.
* Motion: when reduced‑motion is on, disable parallax/heavy transitions.

---

## Performance checklist

* Use `next/font` to load Inter/Roboto Mono; preconnect to fonts if external.
* `next/image` for hero imagery; `priority` on first fold.
* Intersection‑observer to lazy‑mount motion components; avoid blocking LCP.

---

## Dev commands

```bash
pnpm i
pnpm lint
pnpm build
pnpm dev
```

---

## Definition of Done

* Lighthouse: **Perf ≥ 90**, **A11y ≥ 95**, **SEO ≥ 95** on desktop.
* All copy and badges updated; brand spelling is consistent.
* KPI tooltips live and accessible; pillar cards link to canonical pages.
* No console errors, hydration warnings, or a11y violations.

---

## Nice‑to‑have (post‑merge)

* Add a **Token Inspector** demo on `/tsm` (JSON view of a capability token).
* Add **“Security runs first”** callout on `/platform` with RBAC, tenant scoping, validation, throttling, anomaly detection, immutable audit.
