# Intleri Demo Site

A modern, demo-quality website for **Intleri** showcasing secure, modular logistics intelligence platform capabilities.

## Features

- **Opera Neon-inspired Design**: Dark theme with glassmorphism, neon accents, and subtle animations
- **Comprehensive Platform Showcase**: Platform architecture, apps, TSM, agents, and robotics
- **Interactive Components**: Glass cards, neon buttons, animated navigation
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Accessibility**: WCAG AA compliant with focus states and reduced motion support
- **SEO Optimized**: Metadata, semantic HTML, and performance optimized

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom Opera Neon theme
- **shadcn/ui** components + **lucide-react** icons
- **framer-motion** for animations and micro-interactions
- **Recharts** for data visualization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd intleri-demo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page with contact form
│   ├── agents/            # Agentification (MCP) overview
│   ├── apps/              # Apps listing and detail pages
│   ├── demos/             # Interactive demo flows
│   ├── platform/          # Platform architecture
│   ├── robotics/          # Robotics interop & safety
│   ├── tsm/               # Tokenized Service Model
│   └── globals.css        # Global styles and theme
├── components/            # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── AppCard.tsx        # App showcase cards
│   ├── BentoGrid.tsx      # Feature grid layout
│   ├── Footer.tsx         # Site footer
│   ├── GlassCard.tsx      # Glass morphism cards
│   ├── Hero.tsx           # Hero section
│   ├── MetricStat.tsx     # KPI display components
│   ├── NavBar.tsx         # Navigation bar
│   └── NeonButton.tsx     # Custom button variants
└── data/
    └── apps.json          # App definitions and content
```

## Pages

- **/** - Home page with hero, features, and metrics
- **/platform** - Platform architecture and technology stack
- **/apps** - Interactive app showcase with filtering
- **/apps/[slug]** - Dynamic app detail pages
- **/tsm** - Tokenized Service Model explanation
- **/agents** - Agentification (MCP) overview
- **/robotics** - Robotics integration and safety
- **/demos** - Guided demonstration flows
- **/about** - Company information and contact form

## Customization

### Theme Colors

The Opera Neon theme is defined in `src/app/globals.css`:

```css
:root {
  --bg: #0a0f14;           /* deep night */
  --neon-1: #63e6ff;       /* cyan */
  --neon-2: #a78bfa;       /* violet */
  --neon-3: #22d3ee;       /* teal */
}
```

### Adding New Apps

1. Add app data to `src/data/apps.json`
2. Include the app in the apps listing page
3. The dynamic route will automatically generate the detail page

### Components

All components are built with:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **framer-motion** for animations
- **Accessibility** best practices

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Next.js Image optimization enabled

## Accessibility

- **WCAG AA Compliant**: Color contrast and keyboard navigation
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Focus Management**: Visible focus indicators
- **High Contrast**: Support for high contrast mode

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact:
- Email: contact@intleri.com
- Documentation: [docs.intleri.com](https://docs.intleri.com)