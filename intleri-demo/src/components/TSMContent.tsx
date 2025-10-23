"use client";

import { motion } from "framer-motion";
import { Coins, Shield, Database, Eye, Zap, TrendingUp } from "lucide-react";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";

const tsmFeatures = [
  {
    title: "Token Registry",
    description: "Centralized registry of all service tokens with metadata, permissions, and lifecycle management.",
    icon: Database,
    color: "neon-1"
  },
  {
    title: "Execution Boundary",
    description: "Clear boundaries between services with token-based access control and audit trails.",
    icon: Shield,
    color: "neon-2"
  },
  {
    title: "Value Tracking",
    description: "Real-time tracking of token usage, costs, and value delivery across all services.",
    icon: TrendingUp,
    color: "neon-3"
  },
  {
    title: "Audit Trail",
    description: "Complete audit trail of all token transactions, executions, and value exchanges.",
    icon: Eye,
    color: "neon-1"
  },
  {
    title: "Performance Metrics",
    description: "Detailed performance metrics for each service token including latency, throughput, and success rates.",
    icon: Zap,
    color: "neon-2"
  },
  {
    title: "Cost Optimization",
    description: "Intelligent cost optimization based on usage patterns and value delivery metrics.",
    icon: Coins,
    color: "neon-3"
  }
];

const tokenTypes = [
  {
    name: "Service Tokens",
    description: "Access tokens for individual services with specific permissions and expiration times.",
    example: "analytics.read, loadboard.write, emissions.report"
  },
  {
    name: "Capability Tokens",
    description: "Tokens that represent specific capabilities or features that can be activated on demand.",
    example: "predictive.analytics, risk.assessment, route.optimization"
  },
  {
    name: "Value Tokens",
    description: "Tokens that represent quantifiable value delivered, used for billing and optimization.",
    example: "cost.savings, time.reduction, efficiency.gain"
  }
];

export default function TSMContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text">Tokenized Service Model</span>
            <br />
            <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">
              Pay for Value, Not Shelf‑Ware
            </span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
            TSM revolutionizes how you consume and pay for logistics services. Instead of paying for software licenses, 
            you pay only for the value delivered through tokenized capabilities and measurable outcomes.
          </p>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
        </motion.div>

        {/* TSM Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            TSM Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-${feature.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 text-${feature.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-text mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Token Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Token Types & Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tokenTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {type.name}
                  </h3>
                  <p className="text-muted mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-neon-1 font-mono">
                      {type.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <GlassCard className="border-neon-1/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text mb-4">
                Why TSM Matters
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Traditional software licensing creates waste and misaligned incentives. 
                TSM ensures you only pay for value delivered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neon-1 mb-4">
                  Traditional Model Problems
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Pay for shelf-ware and unused features</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>No correlation between cost and value</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Vendor lock-in and switching costs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Difficulty measuring ROI</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neon-2 mb-4">
                  TSM Benefits
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Pay only for value delivered</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Clear ROI measurement and tracking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Vendor-agnostic capability access</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Automatic cost optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Implementation Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <GlassCard>
            <h2 className="text-3xl font-bold text-text mb-6">
              TSM in Action
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-text mb-3">Scenario: Route Optimization</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-neon-1/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-1 font-bold">1</span>
                    </div>
                    <p className="text-muted">Request comes in for route optimization</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-neon-2/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-2 font-bold">2</span>
                    </div>
                    <p className="text-muted">System checks for optimization tokens</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-neon-3/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-3 font-bold">3</span>
                    </div>
                    <p className="text-muted">Optimization service executes and delivers value</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 font-bold">4</span>
                    </div>
                    <p className="text-muted">Value tokens are generated based on time/fuel savings</p>
                  </div>
                </div>
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
            Ready to experience TSM?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="default" size="lg">
              Learn more about TSM
            </NeonButton>
            <NeonButton variant="neon" size="lg">
              Try TSM demo
            </NeonButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
