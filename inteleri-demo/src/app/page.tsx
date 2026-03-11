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
import { PersonaBand } from "@/components/PersonaBand";
import { ProofStrip } from "@/components/ProofStrip";

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

          {/* Trust first for enterprise buyers */}
          <TrustBand />

          {/* Interactive Demo Frame */}
          <section id="demo" className="py-16 md:py-20 section-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DemoFrame className="mx-auto max-w-6xl" />
            </div>
          </section>

          {/* Verb Sections - value proof */}
          <VerbSection
            title="Secures every request"
            lead="Every request is evaluated through policy, tenant boundaries, and role-based access before execution. Inteleri is designed to fail closed, preserve auditability, and reduce operational risk across apps, users, and automated workflows."
            ctaHref="/platform#security"
            ctaLabel="View Security Model"
          />

          <VerbSection
            title="Understands operational context"
            lead="Inteleri turns logistics activity into usable operational intelligence. Events, workflow state, risk signals, and service outputs are brought into one governed environment so teams can act with context instead of chasing disconnected tools."
            ctaHref="/platform#risk"
            ctaLabel="Explore Risk & Intelligence"
            reverse
          />

          <VerbSection
            title="Governs execution"
            lead="The Tokenized Service Model (TSM) meters platform execution at the service level, making automation measurable, governable, and easier to align with real operational value."
            ctaHref="/tsm"
            ctaLabel="Learn about TSM"
          />

          {/* Metrics Dashboard Strip */}
          <section className="py-16 md:py-20 section-background">
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

          <ProofStrip />

          <PersonaBand />

          <BentoGrid />

          {/* Access Form - primary CTA */}
          <section id="request-access" className="py-16 md:py-20 section-background scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Request access
                </h2>
                <p className="type-section-lead text-white/80 mx-auto">
                  See how Inteleri brings security-native architecture, operational intelligence, and governed execution into a single logistics control surface.
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