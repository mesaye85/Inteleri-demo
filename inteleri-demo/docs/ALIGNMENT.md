# Inteleri-demo alignment with product

This document describes how the **Inteleri-demo** (demo/marketing site) aligns with the product frontend (**Inteleri-next**) and backend (**Inteleri** DRF). It is the single source of truth for product-surface mapping and scope.

**Scope (current):** Demo is static only. There is **no API connection**, no auth, and no live data. All content is driven by JSON in `src/data/`.

---

## What the demo represents

- A **marketing/demo site** for the Inteleri “Zero-Trust Logistics Intelligence” platform.
- **App catalog** and product-area pages (Platform, TSM, Agents, Robotics, etc.) for awareness and lead capture.
- **Request Access** is a mock submit (no backend); any future waitlist/onboarding would use the product API contract (`POST /api/v1/...`) and next’s API client patterns when connection is added.

---

## Mapping: demo apps vs product

### Demo app catalog (slugs and labels)

Content is in `src/data/apps.json`. Slugs are used in routes `/apps/[slug]`.

| Demo slug       | Demo label              | Inteleri-next                    | DRF backend                         | Notes                                                                 |
|-----------------|-------------------------|-----------------------------------|-------------------------------------|-----------------------------------------------------------------------|
| analytics       | Analytics & TPI         | Cross-cutting; load-analytics etc.| No single analytics app in gateway  | Reframed as cross-cutting TPI across workspace domains.               |
| loadboard       | Loadboard               | Workspace domain                  | `loadboard/` mounted                | Aligned.                                                              |
| carrier         | Carrier Operations      | Space key `carrier`               | TESTING-only in gateway             | Aligned; production exposure may differ.                              |
| emissions       | Emissions & Sustainability | Not a space                    | Rating category; legacy emissions   | Reframed under rating/carrier; no standalone emissions app promised.  |
| intelligence    | Intelligence            | Domain                            | `intelligence/` mounted             | Aligned.                                                              |
| rating          | Rating                  | Domain (trust/rating)             | `rating/` mounted (carrier trust)   | Aligned.                                                              |
| inventory       | Warehouse & Inventory   | Part of warehouse                 | Warehouse/inventory in docs         | Reframed as part of Warehouse domain.                                 |
| security        | Admin & Security        | Space `admin` (admin-security)    | `security/` mounted                 | Aligned with Admin & Security workspace.                              |
| trust-pilot     | Trust Pilot             | —                                 | `trust-pilot/` mounted              | Slug and label aligned with backend.                                  |
| warehouse       | Warehouse               | Domain                            | `warehouse/` mounted                | Aligned.                                                              |
| broker          | Broker                  | Space key `broker`                | `broker/` mounted                   | Aligned.                                                              |

### Removed / reframed

- **Procurement:** Decommissioned in the product; use **OES** (Operational Event Stream) instead. Removed from app catalog. Demo frame slide “Procurement (RFQ)” was replaced with **OES** (“Event stream processed”).

### Not in demo catalog (in product)

Product has additional surfaces not represented as demo “apps”:  
admin (as space), driver, shipper, risk, platform-ops, billing, mobile, OES, integrations, TSM, robotics.  
TSM and Robotics are covered as **top-level demo pages** (/tsm, /robotics), not in `apps.json`.

---

## Demo frame slides

`src/data/demo.json` and `DemoFrame` default items:

1. **Loadboard** – Post → Bid → Award  
2. **OES** – Event stream processed (replaces former Procurement RFQ slide)  
3. **Emissions** – Period report ready  
4. **Intelligence** – Location risk brief  
5. **TSM** – Runbook compiled  

---

## Metrics and methodology

- **Metrics** (`src/data/metrics.json`): Post→Award (h), ETA Accuracy (%), CO₂ Intensity, Risk Alerts (7d).  
- **Methodology** (`src/data/methodology.json`): Definitions and sources aligned with product domains (Loadboard, Carrier, Emissions & Rating, Intelligence).  
- When/if the demo is wired to live data, the same metric keys and labels can be reused against the product API.

---

## Terminology

- **Trust Pilot** / slug **trust-pilot**: Matches DRF and next (no “trust” slug).  
- **Admin & Security**: Matches next’s admin space and DRF `security/`.  
- **Carrier Operations**: Matches next space label.  
- **OES**: Operational Event Stream; replaces procurement in narrative and demo frame.

---

## Stack alignment

- Demo uses **Next 15.5** and **React 19**; product frontend (Inteleri-next) uses Next 16. Upgrading the demo to Next 16 is optional and recommended when the build environment supports it (e.g. some setups encounter Turbopack/distDir path issues with Next 16).
- Styling (Tailwind 4, CVA, clsx, tailwind-merge), Recharts, and Radix usage are aligned where applicable. No API client or auth in demo.

---

## Out of scope (this phase)

- No API connection; no `NEXT_PUBLIC_API_BASE_URL` in demo.  
- No auth or “demo login.”  
- No shared component library or monorepo.  
- No live data or real Request Access submission.

When adding connection or auth later, follow Inteleri-next’s API client and auth contract (e.g. JWT, refresh cookie, envelope responses).
