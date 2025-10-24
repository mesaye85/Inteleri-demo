# Intleri Demo Application

This folder contains the Next.js implementation of the Intleri marketing demo. It reflects the brand's neon glass aesthetic while surfacing the platform's security-first doctrine, predictive insights, and modular app story.

## Getting started

```bash
npm install
npm run dev
```

- Visit [http://localhost:3000](http://localhost:3000) to explore the site.
- Use `npm run build` and `npm start` to review a production build locally.
- Run `npm run lint` before submitting changes.

## Application structure

```
src/
├── app/                # App Router routes, metadata, and global styles
│   ├── page.tsx        # Home experience (hero, demo frame, verbs, metrics, trust band, access form)
│   ├── layout.tsx      # Root layout, fonts, and skip link wiring
│   ├── globals.css     # Theme tokens, glass utilities, skip link styling
│   └── ...             # Route groups for platform, apps, TSM, agents, robotics, demos, about
├── components/         # Reusable UI (NavBar, Hero, DemoFrame, VerbSection, MetricStat, AccessForm, etc.)
├── data/               # JSON fixtures for navigation, metrics, methodology definitions, and app content
└── lib/                # Helpers such as SEO metadata utilities
```

### Design system pillars

- **Neon glass panels** – `GlassCard` centralises blur, border, and glow styling so tiles stay consistent.
- **Animated interactions** – `framer-motion` powers hero entrance, metric reveals, and form success transitions.
- **Dynamic demo content** – `DemoFrame` cycles through curated logistics moments and pauses when hovered or focused.
- **Narrative sections** – `VerbSection` balances copy with illustrated panels for the "Secures / Understands / Orchestrates" story.
- **Credible metrics** – `MetricStat` pairs KPIs with the new `MethodologyTooltip` so users can audit the numbers.

### Accessibility & UX quality checklist

- Skip navigation link targets the `#main-content` region.
- Mobile nav toggles announce state via `aria-expanded` and close on the `Escape` key.
- Tooltips are reachable with a keyboard and can be dismissed with click-away, blur, or Escape.
- Form states announce success/errors and mark the form busy while submitting.
- Animations respect `prefers-reduced-motion` via shared hooks in `components/Motion.tsx`.

### Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Generate a production build. |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run ESLint checks. |

## Contributing guidelines

- Maintain the Opera Neon-inspired design language (dark gradients, neon accents, glass surfaces).
- Preserve accessibility affordances—focus states, semantics, and motion preferences should not regress.
- Keep components modular: new UI should live alongside existing primitives in `src/components/` with co-located stories/data if required.
- Update the documentation in this folder when behaviour or architecture changes.
