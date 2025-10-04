import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import appsData from "@/data/apps.json";

interface AppPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const iconMap: Record<string, string> = {
  analytics: "📊",
  loadboard: "📦",
  carrier: "🚛",
  emissions: "🌱",
  intelligence: "🧠",
  procurement: "🤝",
  rating: "⭐",
  inventory: "📋",
  security: "🛡️",
  "trust-pilot": "💬",
  warehouse: "🏭",
  broker: "💼",
};

export default async function AppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = appsData.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">{iconMap[app.slug] || "📱"}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-text">{app.title}</span>
            </h1>
            <p className="text-xl text-muted mb-6">{app.summary}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {app.pillars.map((pillar) => (
                <Badge
                  key={pillar}
                  variant="secondary"
                  className="bg-neon-1/20 text-neon-1 border-neon-1/30"
                >
                  {pillar}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard>
                <h2 className="text-2xl font-semibold text-text mb-4">
                  Executive Summary
                </h2>
                <p className="text-muted leading-relaxed">{app.description}</p>
              </GlassCard>
            </motion.div>

            {/* Core Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GlassCard>
                <h2 className="text-2xl font-semibold text-text mb-4">
                  Core Capabilities
                </h2>
                <ul className="space-y-3">
                  {app.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted">{capability}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            {/* How it Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <GlassCard>
                <h2 className="text-2xl font-semibold text-text mb-4">
                  How it Works
                </h2>
                <p className="text-muted leading-relaxed">{app.howItWorks}</p>
              </GlassCard>
            </motion.div>

            {/* Security & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <GlassCard>
                <h2 className="text-2xl font-semibold text-text mb-4">
                  Security & Compliance
                </h2>
                <p className="text-muted leading-relaxed">{app.security}</p>
              </GlassCard>
            </motion.div>

            {/* Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <GlassCard>
                <h2 className="text-2xl font-semibold text-text mb-4">
                  Roadmap
                </h2>
                <ul className="space-y-3">
                  {app.roadmap.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mt-12"
          >
            <Separator className="mb-8 bg-panel-border" />
            <h3 className="text-2xl font-semibold text-text mb-4">
              Ready to get started with {app.title}?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton variant="default" size="lg">
                Start Free Trial
              </NeonButton>
              <NeonButton variant="neon" size="lg">
                Schedule Demo
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
