# Intleri Demo Site

A neon-tinged marketing demo for the Intleri logistics intelligence platform. The project pairs a polished Opera Neon-inspired interface with content that explains Intleri's security-first, predictive operations approach.

## Repository layout

| Path | Description |
| --- | --- |
| [`inteleri-demo/`](inteleri-demo) | Next.js 14 app router project that powers the site. |
| [`inteleri-demo/src/`](inteleri-demo/src) | Application routes, components, data fixtures, and utilities. |
| [`inteleri-demo/public/`](inteleri-demo/public) | Static assets such as favicons and imagery. |

> **Heads up:** There is an older `intleri-demo/` directory that only contains historical build artefacts. The production application lives in `inteleri-demo/` (with the extra `e`).

## Quick start

```bash
cd inteleri-demo
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000). Use `npm run build` followed by `npm start` for a production preview.

## Feature highlights

- **Immersive hero experience** – Animated hero section with glowing highlights, dual CTA buttons, and supporting copy grounded in Intleri doctrine.
- **Faux interactive demo frame** – Cycles through curated logistics scenarios, pauses on hover/focus, and respects `prefers-reduced-motion`.
- **Verb-led narrative sections** – “Secures / Understands / Orchestrates” strips that link to canonical platform pages.
- **Bento feature grid** – Three glassmorphism cards that reiterate the platform pillars with rich hover states.
- **Metrics with methodology** – KPI cards surface methodology tooltips so numbers remain credible and auditable.
- **Trust and compliance band** – Reinforces SECaaS positioning with links into the platform and changelog.
- **Access request form** – Animated form with optimistic submission states, validation messaging, and accessible focus handling.

## Accessibility & UX quality

Recent improvements include:

- Skip link targetting the primary content (`#main-content`) so keyboard users can bypass repeated navigation.
- Mobile navigation button updates with `aria-expanded`, `aria-controls`, and escape key handling.
- Methodology tooltips render as focusable buttons with keyboard/touch dismissal, avoiding hover-only interactions.
- KPI demo controls now specify `type="button"` to prevent unintended form submissions.
- The access form exposes error messaging via `role="alert"`, announces success with `aria-live`, and respects busy state semantics.

## Key scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reloading. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run ESLint checks over the codebase. |

## Contributing

1. Create a feature branch from `main`.
2. Make your changes with accompanying tests or accessibility checks where appropriate.
3. Submit a pull request describing the feature or fix.

Pull requests should maintain the neon-glass visual language, preserve accessibility affordances, and avoid regressing the documented UX behaviours.
