import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import MetricStat from "@/components/MetricStat";
import metricsData from "@/data/metrics.json";
import { pageMeta } from "@/lib/seo";

// Lazy load heavy components with loading states
const DemoFrame = dynamic(() => import("@/components/DemoFrame").then(mod => ({ default: mod.DemoFrame })), {
  ssr: false,
  loading: () => <div className="h-96 bg-slate-900/40 rounded-3xl animate-pulse mx-auto max-w-6xl" />
});

const VerbSection = dynamic(() => import("@/components/VerbSection").then(mod => ({ default: mod.VerbSection })), {
  ssr: false,
  loading: () => <div className="h-64 bg-slate-900/20 rounded-2xl animate-pulse" />
});

const TrustBand = dynamic(() => import("@/components/TrustBand").then(mod => ({ default: mod.TrustBand })), {
  ssr: false,
  loading: () => <div className="h-48 bg-slate-900/20 rounded-2xl animate-pulse" />
});

const AccessForm = dynamic(() => import("@/components/AccessForm").then(mod => ({ default: mod.AccessForm })), {
  ssr: false,
  loading: () => <div className="h-96 bg-slate-900/20 rounded-2xl animate-pulse max-w-2xl mx-auto" />
});

export const metadata = pageMeta('home');

export default function Home() {
  return (
    <div className="min-h-screen page-background">
      <div className="absolute inset-0 page-grid opacity-40" />
      <div className="absolute inset-0 page-noise" aria-hidden="true" />
      
      <div className="relative z-10">
        <NavBar />
        
        <Hero />
        
        {/* Interactive Demo Frame */}
        <section id="demo" className="py-20 section-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DemoFrame className="mx-auto max-w-6xl" />
          </div>
        </section>

        {/* Verb Sections */}
        <VerbSection
          title="Secures every request"
          lead="Security runs first and fails closed. RBAC, tenant isolation, input validation, rate limits, anomaly detection, and forensics‑grade logs across apps and agents."
          ctaHref="/platform#security"
          ctaLabel="View Security Model"
        />

        <VerbSection
          title="Understands your operations"
          lead="An event‑driven Signal Fabric streams and correlates telemetry for predictive KPIs, TPI scoring, and anomaly detection."
          ctaHref="/apps/analytics"
          ctaLabel="Explore Analytics"
          reverse
        />

        <VerbSection
          title="Orchestrates your flow"
          lead="TSM runbooks and autonomous agents coordinate complex workflows with safety envelopes and real-time observability."
          ctaHref="/tsm"
          ctaLabel="Learn about TSM"
        />

        <BentoGrid />
        
        {/* Metrics Dashboard Strip */}
        <section className="py-20 section-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricStat
                title="Post→Award"
                value={`${metricsData.post_to_award_hours}h`}
                trend="down"
                trendValue={`${metricsData.post_to_award_delta_pct}%`}
                description="Accelerated procurement cycles"
                methodologyKey="post_to_award_hours"
              />
              <MetricStat
                title="ETA Accuracy"
                value={`${metricsData.eta_accuracy_pct}%`}
                trend="up"
                trendValue={`+${metricsData.eta_accuracy_delta_pct}%`}
                description="More reliable delivery promises"
                methodologyKey="eta_accuracy_pct"
              />
              <MetricStat
                title="CO₂ Intensity"
                value={`${metricsData.co2_intensity_kg_per_mi}`}
                trend="down"
                trendValue={`${metricsData.co2_delta_pct}%`}
                description="Track and hit sustainability targets"
                methodologyKey="co2_intensity_kg_per_mi"
              />
              <MetricStat
                title="Risk Alerts"
                value={`${metricsData.risk_alerts_7d}`}
                trend="neutral"
                description="last 7 days"
              />
            </div>
          </div>
        </section>

        {/* Trust Band */}
        <TrustBand />

        {/* Access Form */}
        <section className="py-20 section-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Request Access
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join the waitlist to be among the first to experience the future of logistics intelligence.
              </p>
            </div>
            <AccessForm />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}