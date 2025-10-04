# Intleri Demo Site — Copilot Build Brief

This brief is written for GitHub Copilot (and coding agents) to scaffold a modern, demo‑quality website for **Intleri**. Use it as the single source of truth for project setup, information architecture, component library, content blocks, and acceptance criteria. The visual inspiration is **Opera Neon**: luminous/neon accents, subtle glassmorphism, depth via blurs and soft shadows, and playful motion.

---

## 1) Project Goals

* Showcase Intleri’s platform vision with a fast, modern, *feelable* UI that hints at operational depth.
* Tell the story in 3 layers: **Platform → Apps → Doctrines (TSM, Agentification, Robotics)**.
* Make it easy to run locally, deploy to Vercel, and swap in real API data later.
* Keep the code clean and componentized so it can be extended into a full marketing site.

**Primary value props to communicate:**

* **Security‑as‑a‑Service (SECaaS)**, tenant isolation, and fail‑closed controls.
* **Total Productivity Intelligence (TPI)** with cross‑domain analytics and forecasting.
* **Modular app suite** (Broker, Carrier, Loadboard, Intelligence, Emissions, Inventory, Procurement, Rating, Security, Trust Pilot, Warehouse).
* **API‑first DRF backend**, event‑driven patterns, and microservices‑ready architecture.
* **TSM** (Tokenized Service Model), **Agentification (MCP)**, and **Robotics interop & safety**.

---

## 2) Tech Stack

* **Next.js 14 (App Router)** + **TypeScript**
* **Tailwind CSS** + CSS variables for neon theme tokens
* **shadcn/ui** for primitives; **lucide-react** for icons
* **framer-motion** for micro‑interactions
* Optional: **Recharts** for simple static charts, **clsx** for class composition

**Install**

```bash
npx create-next-app@latest intleri-demo --typescript --eslint --src-dir --app --tailwind --import-alias "@/*"
cd intleri-demo
npm i framer-motion lucide-react recharts clsx
# shadcn
npx shadcn-ui@latest init -y
npx shadcn-ui@latest add button card badge separator tabs tooltip input sheet navigation-menu dialog avatar scroll-area
```

---

## 3) Brand & Theme Tokens (Opera Neon–inspired)

Use a dark base with glass panels and neon accents.

**CSS variables (globals.css)**

```css
:root {
  --bg: #0a0f14;           /* deep night */
  --panel: rgba(255,255,255,0.06);
  --panel-border: rgba(255,255,255,0.12);
  --text: #e6f1ff;
  --muted: #9fb3c8;
  --neon-1: #63e6ff;       /* cyan */
  --neon-2: #a78bfa;       /* violet */
  --neon-3: #22d3ee;       /* teal */
  --glow: 0 0 24px var(--neon-1);
}
```

**Tailwind config additions**

```js
extend: {
  colors: {
    bg: "var(--bg)", text: "var(--text)", muted: "var(--muted)",
    neon: { 1: "var(--neon-1)", 2: "var(--neon-2)", 3: "var(--neon-3)" },
  },
  boxShadow: {
    glow: "0 0 24px var(--neon-1)",
  },
  backdropBlur: { xs: '2px' }
}
```

**Glass panel utility**

```tsx
export const glass = "bg-white/5 backdrop-blur-md border border-white/15";
```

**Motion guidelines**

* Enter transitions: `opacity → y` with `spring` (0.6) and small delays.
* Hover: scale 1.02 + subtle neon shadow.
* Route changes: fade/blur the background gradient.

---

## 4) Information Architecture (Routes)

```
/
/platform
/apps
/apps/[slug]            # dynamic app detail
/tsm                    # Tokenized Service Model
/agents                 # Agentification (MCP) overview
/robotics               # Robotics interop & safety
/demos                  # Guided demo flows
/about                  # Company & contact
```

**Apps to include (cards + dynamic pages):**

* Analytics, Broker, Carrier, Emissions, Intelligence, Inventory, Loadboard, Procurement, Rating, Security, Trust Pilot, Warehouse

---

## 5) Core Components (src/components)

* **NavBar** (floating, semi‑transparent, blur on scroll)
* **NeonButton** (shadcn Button variant with glow)
* **GlassCard** (Panel with gradient stroke, neon hover)
* **AppCard** (icon, short pitch, CTA → detail)
* **BentoGrid** (responsive feature grid)
* **MetricStat** (value + sparkline using Recharts)
* **GlowDivider** (neon gradient hr)
* **Hero** (headline + subhead + action)
* **LogoGrid** (placeholder for logos/standards)
* **Footer** (links + social)

**Example: GlassCard.tsx**

```tsx
export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-2xl p-5 ${className}`} style={{
      background: "var(--panel)",
      backdropFilter: "blur(12px)",
      border: "1px solid var(--panel-border)",
      boxShadow: "0 0 24px rgba(99,230,255,0.15)"
    }}>
      {children}
    </div>
  );
}
```

---

## 6) Page Blueprints (content + sections)

### `/` Home

* **Hero:** “Intleri — Secure, modular logistics intelligence.”

  * Subhead: SECaaS • TPI • DRF API • Microservices‑ready
  * CTA buttons: *View the Platform*, *Explore the Apps*
* **Bento features:**

  1. **SECaaS**: tenant isolation, RBAC, fail‑closed controls.
  2. **TPI Analytics**: cross‑domain KPIs, anomaly detection, forecasting.
  3. **Loadboard → Carrier**: marketplace + execution + unified tracking.
  4. **Emissions**: trip‑level capture, targets, rollups.
  5. **Intelligence**: risk domains, location briefs, executive reports.
  6. **TSM & Agents**: tokenized execution, MCP orchestration.
* **Mini dashboard strip:** 3–4 MetricStat tiles with mocked numbers.
* **Logos/Compliance:** SOC2/GDPR/NIST (placeholder badges).

### `/platform`

* **Architecture graphic** (CSS grid): Experience / Security / App Layer / Data / Ops.
* **Copy:** DRF core, Celery workers, PostgreSQL, Redis, object storage, Prometheus/Grafana/Sentry.
* **Microservices‑ready**: when/why to split; gateway, mesh, SLOs.
* **Security section:** middleware chain, audit logs, rate limits, ML threat detection.

### `/apps`

* **Filterable grid** of AppCard components for the 12 apps.
* Each card shows a **1–2 sentence value prop** and links to `/apps/[slug]`.

### `/apps/[slug]`

Template sections:

* **Executive Summary** (what/why)
* **Core Capabilities** (bullets)
* **How it works** (diagram paragraph)
* **Security & Compliance**
* **Analytics hooks**
* **Roadmap** (3 bullets)

> Provide content seeds per app in §7.

### `/tsm`

* Explain Tokenized Service Model (definition, registry, execution boundary, audit layer).
* Show a simple **token flow diagram** (SVG).
* “Differentiation vs usage‑based SaaS.”

### `/agents`

* Explain **Agentification (MCP)** reference architecture: Agent Host, Protocol, Service Registry, Observability, Data Plane.
* Simple **orchestration blueprint** image with 2–3 nodes.

### `/robotics`

* Scope & positioning; identity/auth/registry; safety/OT security; task & telemetry schemas; KPIs and rollout.

### `/demos`

* 3 guided flows (static):

  1. Post a load → bid → award → tracking.
  2. Emissions report with target tracking.
  3. Intelligence risk report for a strategic location.

### `/about`

* One‑pager: mission, contact form (no backend; mailto: fallback).

---

## 7) Content Seeds (copy blocks)

Use/adapt these short blocks on the relevant pages.

### Platform (highlights)

* **Security‑as‑a‑Service:** Central authority for authZ, tenant isolation, input validation, rate limiting, ML‑assisted anomaly detection, and full audit trails.
* **Event‑Driven Internals:** Business events on create/update; idempotent workers for enrichment, notifications, and retries.
* **Observability:** Prometheus + Grafana + Sentry, SLO‑oriented with graceful degradation.

### Analytics

* **TPI** across 19 domains; anomaly detection, forecasting, automated reporting.
* Multi‑tenant isolation, RBAC, and export to PDF/CSV/JSON.

### Loadboard

* **Marketplace + execution:** posting, bidding, award, live tracking, geofences, exceptions.
* **Discovery:** relevance‑ranked search, alerts, favorites.

### Carrier

* **Execution telemetry:** driver/vehicle linking, on‑time metrics; hooks into Rating & Analytics.

### Emissions

* **Trip‑level capture** for distance & fuel/electric; rollups and intensity metrics; target tracking and deltas.

### Intelligence

* **Ten risk domains (0–10)** with configurable weights; **location briefs** and executive reports.

### Procurement

* **Requisition → PO** with RFQs, contracts, supplier scoring, and spend controls.

### Rating

* **0–100 composite** with decay, normalization, tiering; weekly batch recalculation; disputes.

### Security

* **Fail‑closed** decisions; standards mapping (SOC2/GDPR/NIST); threat detection; audit.

### Trust Pilot

* **Public reviews** with moderation, search, and analytics; cross‑app integration.

### Warehouse/Inventory

* **Mobile ops** (scanning, offline); ABC analysis; forecasting; lot/serial tracking and audits.

> All copy should be succinct and skimmable. Use bullets and short paragraphs.

---

## 8) Sample Content & Data (mock JSON)

Create `/data/apps.json` used by `/apps` and dynamic route.

```json
[
  {"slug":"analytics","title":"Analytics","summary":"TPI across 19 domains with anomaly detection and forecasting.","pillars":["TPI","Forecasting","Anomaly Detection"]},
  {"slug":"loadboard","title":"Loadboard","summary":"Marketplace + execution: posting, bidding, award, and live tracking.","pillars":["Marketplace","Tracking","Routing"]},
  {"slug":"emissions","title":"Emissions","summary":"Trip‑level capture, rollups, intensity metrics, and target tracking.","pillars":["CO2","Targets","Reports"]},
  {"slug":"intelligence","title":"Intelligence","summary":"Multi‑domain risk scoring and location briefs with executive reports.","pillars":["Risk","Locations","Reports"]},
  {"slug":"procurement","title":"Procurement","summary":"Requisition to PO with RFQs, contracts, supplier scoring, and spend controls.","pillars":["RFQ","Contracts","Spend"]},
  {"slug":"rating","title":"Rating","summary":"0–100 composite with decay, normalization, tiers, and disputes.","pillars":["Composite","Tiers","Governance"]},
  {"slug":"inventory","title":"Inventory","summary":"Real‑time stock, ABC analysis, forecasting, and audits.","pillars":["ABC","Forecast","Audit"]},
  {"slug":"carrier","title":"Carrier","summary":"Execution telemetry linking drivers, vehicles, and on‑time metrics.","pillars":["Telemetry","On‑time","Safety"]},
  {"slug":"security","title":"Security","summary":"Fail‑closed SECaaS with tenant isolation, throttling, and auditing.","pillars":["RBAC","Rate Limits","Audit"]},
  {"slug":"trust-pilot","title":"Trust Pilot","summary":"Public reviews with moderation, discovery, and insights.","pillars":["Reviews","Moderation","Insights"]},
  {"slug":"warehouse","title":"Warehouse","summary":"Dock/door scheduling, capacity, compliance & safety metrics.","pillars":["Capacity","Scheduling","Safety"]}
]
```

---

## 9) Implementation Tasks (Copilot‑friendly checklist)

1. Scaffold Next.js app and dependencies (see §2 Install).
2. Add theme tokens to `globals.css` and Tailwind config; create `GlassCard`, `NeonButton`.
3. Build `NavBar` (sticky, glass) and `Footer`.
4. Implement `/` with **Hero**, **BentoGrid**, and **MetricStat** strip (mocked data).
5. Implement `/platform` with architecture sections and a CSS grid diagram.
6. Create `/data/apps.json`, list cards on `/apps` (filter by text), link to `[slug]`.
7. Build dynamic app page template using content seeds (§7).
8. Add `/tsm`, `/agents`, `/robotics` pages with brief diagrams and bullets.
9. Add `/demos` page with 3 guided flows (static steps & callouts).
10. Add `/about` page with a basic contact form (mailto action).
11. Add framer‑motion animations for hover/enter on cards and sections.
12. Ensure responsive behavior at 360/768/1280 breakpoints.
13. Add metadata (SEO titles/descriptions); generate Open Graph image.
14. `npm run build` must pass; deploy to Vercel.

---

## 10) Accessibility & Performance

* Color contrast ≥ WCAG AA; provide focus states and `prefers-reduced-motion` fallbacks.
* Use `next/image` for optimized images; lazy load below the fold.
* Keep LCP under 2.5s on mid‑tier laptops; avoid layout shift.

---

## 11) SEO & Metadata

* Semantic headings; unique <title> and <meta description> per route.
* JSON‑LD for Organization and WebSite on `/`.

---

## 12) Deployment

* Target **Vercel**; zero config. Add `VERCEL_ANALYTICS_ID` if available.
* Provide a `README.md` with local dev steps and deploy button.

---

## 13) Acceptance Criteria

* Pages & routes match §4.
* Visuals reflect Opera Neon–inspired neon/glass aesthetic.
* Content seeds are rendered on relevant pages; `/apps/[slug]` pulls from JSON.
* Animations are tasteful, performant, and keyboard accessible.
* CI build is green; site is responsive and readable in dark mode.

---

## 14) Future Hooks (non‑blocking)

* Replace mocks with live DRF endpoints.
* Add MDX support for richer docs.
* Instrument analytics events for demos.

---

### Appendix A — Example Hero Copy

> **Intleri**
>
> *Secure, modular logistics intelligence.*
>
> Security‑as‑a‑Service • TPI Analytics • DRF API • Microservices‑ready

### Appendix B — Mini MetricStat Examples

* Post→Award: 3.2h median
* ETA Accuracy: 94.6%
* CO₂ Intensity: 0.82 kg/mi
* Risk Alerts (7d): 12

### Appendix C — Icons Mapping (lucide)

* Analytics: `chart-line` | Security: `shield` | Emissions: `leaf` | Intelligence: `radar`
* Loadboard: `briefcase` | Carrier: `truck` | Inventory: `boxes` | Procurement: `handshake`
* Rating: `star` | Trust Pilot: `message-square` | Warehouse: `warehouse`
