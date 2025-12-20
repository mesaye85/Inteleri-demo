"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import appsData from "@/data/apps.json";
import LoadboardApp from "@/components/loadboard/LoadboardApp";
import BrokerApp from "@/components/broker/BrokerApp";
import CarrierApp from "@/components/carrier/CarrierApp";
import RatingApp from "@/components/rating/RatingApp";
import TrustPilotApp from "@/components/trust_pilot/TrustPilotApp";
import InventoryApp from "@/components/inventory/InventoryApp";
import ProcurementApp from "@/components/procurement/ProcurementApp";
import WarehouseApp from "@/components/warehouse/WarehouseApp";
import AnalyticsApp from "@/components/analytics/AnalyticsApp";
import EmissionsApp from "@/components/emissions/EmissionsApp";
import IntelligenceApp from "@/components/intelligence/IntelligenceApp";

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

export default function AppPage({ params }: AppPageProps) {
  // Use React.use() to unwrap the params Promise in Next.js 15
  const { slug } = use(params);
  const app = appsData.find((a) => a.slug === slug);

  if (!app) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold mb-4">App not found</h1>
            <p className="text-muted mb-6">We couldn&apos;t find that app. Please check the URL.</p>
            <Link href="/apps" className="text-neon-1 underline">Back to apps</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Special rendering for Loadboard app
  if (slug === 'loadboard') {
    return (
      <div className="min-h-screen">
        <NavBar />

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>

              <LoadboardApp />
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Special rendering for Broker app
  if (slug === 'broker') {
    return (
      <div className="min-h-screen">
        <NavBar />

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>

              <BrokerApp />
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Special rendering for Carrier app
  if (slug === 'carrier') {
    return (
      <div className="min-h-screen">
        <NavBar />

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>

              <CarrierApp />
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Special rendering for Rating app
  if (slug === 'rating') {
    return (
      <div className="min-h-screen">
        <NavBar />

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>

              <RatingApp />
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Special rendering for Trust Pilot app
  if (slug === 'trust-pilot') {
    return (
      <div className="min-h-screen">
        <NavBar />

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>

              <TrustPilotApp />
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Special rendering for Inventory app
  if (slug === 'inventory') {
    return (
      <div className="min-h-screen">
        <NavBar />

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>

              <InventoryApp />
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Special rendering for Procurement app
  if (slug === 'procurement') {
    return (
      <div className="min-h-screen">
        <NavBar />

        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>

              <ProcurementApp />
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Special rendering for Warehouse app
  if (slug === 'warehouse') {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>
              <WarehouseApp />
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Special rendering for Analytics app
  if (slug === 'analytics') {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>
              <AnalyticsApp />
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Special rendering for Emissions app
  if (slug === 'emissions') {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>
              <EmissionsApp />
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Special rendering for Intelligence app
  if (slug === 'intelligence') {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{iconMap[app.slug] || "📱"}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold break-words leading-tight">
                    <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
                  </h1>
                  <p className="text-muted text-lg">{app.summary}</p>
                </div>
              </div>
              <IntelligenceApp />
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words leading-tight">
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted mb-6 break-words leading-relaxed">{app.summary}</p>
            <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent mb-6" />
            <div className="flex flex-wrap justify-center gap-2">
              {app.pillars.map((pillar) => (
                <Badge
                  key={pillar}
                  variant="secondary"
                  className="bg-neon-1/20 text-neon-1 border-neon-1/30 text-xs md:text-sm break-words"
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
              <GlassCard className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-text mb-4 break-words leading-tight">
                  Executive Summary
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed break-words">{app.description}</p>
              </GlassCard>
            </motion.div>

            {/* Core Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GlassCard className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-text mb-4 break-words leading-tight">
                  Core Capabilities
                </h2>
                <ul className="space-y-3">
                  {app.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base text-muted break-words leading-relaxed">{capability}</span>
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
              <GlassCard className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-text mb-4 break-words leading-tight">
                  How it Works
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed break-words">{app.howItWorks}</p>
              </GlassCard>
            </motion.div>

            {/* Security & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <GlassCard className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-text mb-4 break-words leading-tight">
                  Security & Compliance
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed break-words">{app.security}</p>
              </GlassCard>
            </motion.div>

            {/* Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <GlassCard className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-text mb-4 break-words leading-tight">
                  Roadmap
                </h2>
                <ul className="space-y-3">
                  {app.roadmap.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base text-muted break-words leading-relaxed">{item}</span>
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
            <h3 className="text-xl md:text-2xl font-semibold text-text mb-4 break-words leading-tight">
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
