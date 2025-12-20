# Architecture Notes — Intleri Demo

This document catalogues the structure, data flows, and UX contracts for the Next.js marketing demo. It serves as a living reference for contributors making structural or behavioural updates.

## Tech stack

- **Framework:** Next.js 14 (App Router) with React 18 and TypeScript.
- **Styling:** Tailwind CSS with custom CSS variables for the neon-glass system.
- **Animations:** `framer-motion` for entrance and feedback animations.
- **Component primitives:** `shadcn/ui` building blocks and `lucide-react` iconography.

## Routing overview (`src/app`)

| Route | Purpose |
| --- | --- |
| `/` | Marketing landing experience with hero, demo frame, pillars, metrics, trust band, and access form. |
| `/platform` | Platform architecture overview. |
| `/apps` | Application catalog with dynamic detail routes. |
| `/tsm` | Tokenized Service Model explanation. |
| `/agents` | Agentification (MCP) positioning. |
| `/robotics` | Robotics interoperability and safety stance. |
| `/demos` | Guided demo scenarios. |
| `/about` | Company background and contact touchpoints. |

Each route exports metadata via `pageMeta` from `src/lib/seo.ts` and shares global theme tokens defined in `globals.css`.

## Component architecture (`src/components`)

- **Layout & navigation**
  - `NavBar` (client) and `NavBarServer` (server-friendly variant) provide the floating navigation bar with CTA support.
  - `Footer` and `FooterServer` deliver consistent messaging across routes.
- **Homepage modules**
  - `Hero`, `DemoFrame`, `VerbSection`, `BentoGrid`, `MetricStat`, `TrustBand`, and `AccessForm` orchestrate the home narrative.
  - `MethodologyTooltip` enriches KPI cards with supporting context drawn from `src/data/methodology.json`.
- **Shared utilities**
  - `GlassCard` encapsulates blur/border/glow styling.
  - `Motion.tsx` exposes motion preference helpers used by interactive components.

## Data sources (`src/data`)

| File | Description |
| --- | --- |
| `nav.json` | Primary navigation links and CTA label. |
| `metrics.json` | KPI values for the home metrics strip. |
| `methodology.json` | Descriptions, sources, and updated timestamps for each KPI. |
| `apps.json` | App catalogue content for the `/apps` route. |

These JSON fixtures are imported directly into components; no external API calls occur in the demo build.

## UX contracts & behaviours

- **Skip link:** `layout.tsx` renders a skip link to `#main-content`. When adding new layouts, ensure the target remains present.
- **Mobile navigation:** Toggle button exposes `aria-expanded`, `aria-controls`, and closes on Escape. Additional nav experiences should mirror this behaviour.
- **Demo frame:** Respects reduced motion, pauses on hover/focus, and exposes manual controls. Slide interval defaults to 7 seconds with a 3-second floor.
- **Tooltips:** Methodology tooltip must be dismissible via Escape, blur, or clicking outside and should announce via `aria-describedby`.
- **Access form:** Uses optimistic success messaging, `aria-busy`, and `role="alert"` for errors. Keep validation logic synchronous and side-effect free unless hooking into an API.

## Development workflow

1. Install dependencies and run `npm run dev` for local iteration.
2. Use `npm run lint` to catch TypeScript and accessibility lint issues.
3. When adding components, co-locate tests or stories if applicable and update this document plus `UI.md` with any new UX patterns.

Maintaining these conventions ensures the demo remains consistent, accessible, and easy to extend.
