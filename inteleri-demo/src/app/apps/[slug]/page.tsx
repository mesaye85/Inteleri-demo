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
import workspacesData from "@/data/workspaces.json";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useModal } from "@/components/ModalContext";

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
  rating: "⭐",
  inventory: "📋",
  security: "🛡️",
  "trust-pilot": "💬",
  warehouse: "🏭",
  broker: "💼",
  shipper: "🏗️",
};

export default function AppPage({ params }: AppPageProps) {
  // Use React.use() to unwrap the params Promise in Next.js 15
  const { slug } = use(params);
  const { openModal } = useModal();
  const app = appsData.find((a) => a.slug === slug) as (typeof appsData)[number] & { workspace?: string } | undefined;
  const workspace = app?.workspace
    ? workspacesData.find((w) => w.id === app.workspace)
    : null;

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

  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">{iconMap[app.slug!] || "📱"}</div>
            <h1 className="type-display mb-4">
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">{app.title}</span>
            </h1>
            <p className="type-section-lead text-muted mb-6">{app.summary}</p>
            <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent mb-6" />
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
            {workspace && (
              <p className="text-sm text-muted mt-4">
                Part of{" "}
                <Link
                  href={`/platform#${workspace.anchor}`}
                  className="text-neon-1 hover:underline"
                >
                  {workspace.label}
                </Link>{" "}
                workspace
              </p>
            )}
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-6 md:p-8 text-left">
                <h2 className="type-section-title text-text mb-4">
                  Executive Summary
                </h2>
                <p className="type-section-lead text-muted max-w-none">{app.description}</p>
              </GlassCard>
            </motion.div>

            {/* Core Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GlassCard className="p-6 md:p-8 text-left">
                <h2 className="type-section-title text-text mb-4">
                  Core Capabilities
                </h2>
                <ul className="space-y-3">
                  {app.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start space-x-3 min-w-0">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span className="type-card-body min-w-0 break-words">{capability}</span>
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
              <GlassCard className="p-6 md:p-8 text-left">
                <h2 className="type-section-title text-text mb-4">
                  How it Works
                </h2>
                <p className="type-section-lead text-muted max-w-none">{app.howItWorks}</p>
              </GlassCard>
            </motion.div>

            {/* Security & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <GlassCard className="p-6 md:p-8 text-left">
                <h2 className="type-section-title text-text mb-4">
                  Security & Compliance
                </h2>
                <p className="type-section-lead text-muted max-w-none">{app.security}</p>
              </GlassCard>
            </motion.div>

            {/* Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <GlassCard className="p-6 md:p-8 text-left">
                <h2 className="type-section-title text-text mb-4">
                  Roadmap
                </h2>
                <ul className="space-y-3">
                  {app.roadmap.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 min-w-0">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span className="type-card-body min-w-0 break-words">{item}</span>
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
              <NeonButton variant="default" size="lg" onClick={() => openModal("access")}>
                Start Free Trial
              </NeonButton>
              <NeonButton variant="neon" size="lg" onClick={() => openModal("access")}>
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
