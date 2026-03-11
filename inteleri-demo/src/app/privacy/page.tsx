import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta("privacy");

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-6 md:p-8 text-left">
            <h1 className="type-display text-text mb-6">
              Privacy Policy
            </h1>
            <p className="type-section-lead text-muted mb-6">
              Last updated: 2025. Inteleri (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy and handling your data in compliance with applicable laws, including GDPR and CCPA.
            </p>
            <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6">
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">Information we collect</h2>
                <p>We collect information you provide when requesting access, scheduling a demo, or contacting us (name, work email, company, and any message content). We also collect usage and technical data necessary to operate and secure our platform.</p>
              </section>
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">How we use it</h2>
                <p>We use your information to respond to your requests, provide the Inteleri platform and support, improve our services, and comply with legal obligations. We do not sell your personal data.</p>
              </section>
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">Enterprise commitments</h2>
                <p>For enterprise customers we provide data processing agreements (DPA), subprocessor lists, and security documentation. Contact your account team or security@inteleri.com for requests.</p>
              </section>
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">Contact</h2>
                <p>For privacy-related questions or to exercise your rights: privacy@inteleri.com.</p>
              </section>
            </div>
          </GlassCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}
