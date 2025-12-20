# UI Reference

This document summarises the current visual system, page flows, and interaction details for the Intleri demo. It replaces the earlier instruction-oriented brief with an up-to-date description of what ships in the UI.

## Visual language

- **Palette:** Deep night background (`#0a0f14`) with cyan/violet/teal neon accents. Soft glass panels use translucent white layers and gradient borders.
- **Typography:** Inter is the primary body and headline font, paired with Roboto Mono for telemetry moments. Headings favour tight tracking and large scale.
- **Motion:** Motion is purposeful. Hero and metric modules animate in with `framer-motion`. Hover/focus states rely on subtle scaling and glow shadows. Animations pause or disable when `prefers-reduced-motion` is active.
- **Utility classes:** `.glass`, `.gradient-border`, `.page-background`, and `.section-background` provide consistent neon-glass treatments across components.

## Homepage architecture

1. **Hero surface** – Full-height panel with chip, dual CTA buttons, supporting highlights, and an illustrative analytics card stack.
2. **Demo frame** – Faux interactive slab cycling through logistics flows (`DemoFrame` component). Auto-advances every 7 seconds, pauses on hover/focus, and exposes manual previous/next controls.
3. **Verb-led strips** – Three `VerbSection` instances that communicate "Secures", "Understands", and "Orchestrates" with corresponding CTAs.
4. **Bento grid** – Three-glass card grid reiterating platform pillars with gradient accents and bullet lists.
5. **Metric strip** – Four `MetricStat` tiles paired with `MethodologyTooltip`, reinforcing data provenance.
6. **Trust band** – Links to platform essentials, compliance stance, and public changelog.
7. **Access form** – Waitlist form with optimistic success state, loading indicator, and ARIA-compliant error messaging.

## Component quick facts

| Component | Location | Notes |
| --- | --- | --- |
| `NavBar` | `src/components/NavBar.tsx` | Fixed navigation with glass background, mobile menu toggle, and CTA. Escape closes the mobile menu. |
| `Hero` | `src/components/Hero.tsx` | Motion-enhanced hero with highlights and neon cards. |
| `DemoFrame` | `src/components/DemoFrame.tsx` | Carousel showcasing logistics scenarios; respects reduced motion and exposes manual controls. |
| `VerbSection` | `src/components/VerbSection.tsx` | Two-column story blocks with optional imagery. |
| `BentoGrid` | `src/components/BentoGrid.tsx` | Grid of feature tiles linking into canonical product areas. |
| `MetricStat` | `src/components/MetricStat.tsx` | KPI tile with trend indicators and optional methodology tooltip. |
| `MethodologyTooltip` | `src/components/MethodologyTooltip.tsx` | Focusable tooltip describing KPI methodology, dismissible via click-away, blur, or Escape. |
| `TrustBand` | `src/components/TrustBand.tsx` | Compliance/credibility links with neon gradients. |
| `AccessForm` | `src/components/AccessForm.tsx` | Request access form with animated states and accessible messaging. |

## Accessibility considerations

- **Skip navigation:** `layout.tsx` injects a skip link targeting `#main-content` and styled in `globals.css`.
- **Keyboard navigation:** Mobile nav toggle, carousel controls, and tooltip triggers expose clear focus states and semantics.
- **Announcements:** Form success/error states and busy indicators use `aria-live`, `role="alert"`, and `aria-busy`.
- **Tooltips:** Implemented as buttons with escape/click-away dismissal so they are usable on touch and keyboard-only setups.
- **Reduced motion:** Hooks in `components/Motion.tsx` allow components like `DemoFrame` to respond to system motion preferences.

## Content governance

- Pillar copy focuses on Security, Predictive Operations, and TSM/Agents orchestration.
- Metrics reference data defined in `src/data/metrics.json` and their descriptions live in `src/data/methodology.json`.
- CTAs link to the canonical pages defined under `src/app/` (e.g. `/platform`, `/apps/analytics`, `/tsm`).

Keep this document in sync when visual direction, motion behaviour, or component responsibilities change.
