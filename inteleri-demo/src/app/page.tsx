import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import MetricStat from "@/components/MetricStat";
import metricsData from "@/data/metrics.json";
import { pageMeta } from "@/lib/seo";

// Import components directly
import { DemoFrame } from "@/components/DemoFrame";
import { VerbSection } from "@/components/VerbSection";
import { TrustBand } from "@/components/TrustBand";
import { AccessForm } from "@/components/AccessForm";

export const metadata = pageMeta('home');

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="relative z-10">
        <main
          id="main-content"
          role="main"
          tabIndex={-1}
          className="focus:outline-none"
        >
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
            lead="Security runs first and fails closed—if in doubt, we block and log. Role-based access (RBAC), tenant isolation, and tamper-evident audit logs across apps and agents."
            ctaHref="/platform#security"
            ctaLabel="View Security Model"
          />

          <VerbSection
            title="Understands your operations"
            lead="A real-time data layer turns your operations into predictive KPIs and alerts. Event streaming and Total Performance Intelligence (TPI) drive anomaly detection and smarter decisions."
            ctaHref="/apps/analytics"
            ctaLabel="Explore Analytics"
            reverse
          />

          <VerbSection
            title="Orchestrates your flow"
            lead="TSM (Tokenized Service Model): pay for what you use. Runbooks and autonomous agents coordinate complex workflows with safety envelopes (guardrails that keep automated actions within safe limits) and real-time observability."
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
                  description="Faster load-to-award (Loadboard)"
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
                  methodologyKey="risk_alerts_7d"
                />
              </div>
            </div>
          </section>

          {/* Trust Band */}
          <TrustBand />

          {/* Access Form */}
          <section id="request-access" className="py-20 section-background scroll-mt-24">
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
        </main>

        <Footer />
      </div>
    </div>
  );
}