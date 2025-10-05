"use client";

import { motion } from "framer-motion";
import { Coins, Shield, Database, Eye, Zap, TrendingUp } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

// metadata must be defined in a server component (layout or non-client page)

const tsmFeatures = [
  {
    title: "Token Registry",
    description: "Centralized registry of all service tokens with metadata, permissions, and lifecycle management.",
    icon: Database,
    color: "neon-1"
  },
  {
    title: "Execution Boundary",
    description: "Secure execution environment with sandboxing, resource limits, and isolation guarantees.",
    icon: Shield,
    color: "neon-2"
  },
  {
    title: "Audit Layer",
    description: "Comprehensive logging and monitoring of all token operations with immutable audit trails.",
    icon: Eye,
    color: "neon-3"
  },
  {
    title: "Performance Metrics",
    description: "Real-time monitoring of token usage, performance, and resource consumption.",
    icon: TrendingUp,
    color: "neon-1"
  }
];

const tokenFlowSteps = [
  {
    step: 1,
    title: "Token Creation",
    description: "Services register and create tokens with defined capabilities and permissions",
    icon: Coins
  },
  {
    step: 2,
    title: "Registry Storage",
    description: "Tokens stored in immutable registry with cryptographic signatures",
    icon: Database
  },
  {
    step: 3,
    title: "Execution Request",
    description: "Client requests service execution with token validation",
    icon: Zap
  },
  {
    step: 4,
    title: "Audit Logging",
    description: "All operations logged with timestamps, outcomes, and performance metrics",
    icon: Eye
  }
];

export default function TSMPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🪙</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-text">Tokenized Service </span>
              <span className="neon-text">Model (TSM)</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Revolutionary service architecture that tokenizes capabilities, ensuring secure execution, 
              auditability, and granular control over logistics operations.
            </p>
          </motion.div>

          {/* Definition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">
                What is TSM?
              </h2>
              <div className="prose prose-lg text-muted max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  The Tokenized Service Model (TSM) is a paradigm shift from traditional usage-based SaaS 
                  to capability-based service delivery. Instead of paying for access, organizations purchase 
                  tokens that represent specific service capabilities with defined execution boundaries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-4">Traditional SaaS</h3>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Pay for access, not value</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Limited customization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Vendor lock-in</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Unpredictable costs</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-4">Tokenized Service Model</h3>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                        <span>Pay for actual capability usage</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                        <span>Granular control and customization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                        <span>Vendor-agnostic execution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                        <span>Predictable, transparent pricing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Token Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-8 text-center">
                Token Execution Flow
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tokenFlowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 bg-neon-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-neon-1" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-2 rounded-full flex items-center justify-center text-sm font-bold text-bg">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-text mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                      {index < tokenFlowSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-neon-1 to-neon-2 transform translate-x-4" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* TSM Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              TSM Core Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tsmFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 text-${feature.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-text mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-text mb-6">
                Benefits of TSM
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-neon-1 mb-4">
                    Cost Efficiency
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Pay only for what you use</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>Predictable budgeting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                      <span>No vendor lock-in penalties</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-2 mb-4">
                    Security & Control
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Granular permission control</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Immutable audit trails</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                      <span>Execution boundary enforcement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-3 mb-4">
                    Flexibility
                  </h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                      <span>Mix and match capabilities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                      <span>Custom service composition</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                      <span>Vendor-agnostic execution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-text mb-4">
              Ready to experience the future of service delivery?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton variant="default" size="lg">
                Start with TSM
              </NeonButton>
              <NeonButton variant="neon" size="lg">
                Learn More
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
