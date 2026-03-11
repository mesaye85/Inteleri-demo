import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta("terms");

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-6 md:p-8 text-left">
            <h1 className="type-display text-text mb-6">
              Terms of Service
            </h1>
            <p className="type-section-lead text-muted mb-6">
              Last updated: 2025. By requesting access or using Inteleri services you agree to these terms. Enterprise agreements may supersede this page.
            </p>
            <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6">
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">Acceptance</h2>
                <p>Access to and use of the Inteleri platform is subject to these Terms of Service and our Privacy Policy. If you are using the services on behalf of an organization, you represent that you have authority to bind that organization.</p>
              </section>
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">Use of the platform</h2>
                <p>You agree to use the platform only for lawful purposes and in accordance with our acceptable use policy. You are responsible for maintaining the confidentiality of access credentials and for all activity under your account.</p>
              </section>
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">Enterprise terms</h2>
                <p>Enterprise customers are governed by their master service or order form. In case of conflict between these terms and a signed agreement, the signed agreement prevails.</p>
              </section>
              <section>
                <h2 className="type-section-title text-text mt-8 mb-3">Contact</h2>
                <p>Questions about these terms: legal@inteleri.com.</p>
              </section>
            </div>
          </GlassCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}
