"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Truck, Leaf, Radar } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

const colorClasses: Record<string, { bg: string; text: string }> = {
  "neon-1": { bg: "bg-neon-1/20", text: "text-neon-1" },
  "neon-2": { bg: "bg-neon-2/20", text: "text-neon-2" },
  "neon-3": { bg: "bg-neon-3/20", text: "text-neon-3" },
};

// metadata must be defined in a server component (layout or non-client page)

const demoFlows = [
  {
    id: "load-bidding",
    title: "Load Posting & Bidding",
    description: "A guided workflow demonstration from posting a load through award and execution visibility.",
    icon: Truck,
    color: "neon-1",
    steps: [
      {
        step: 1,
        title: "Post Load",
        description: "Create a load with requirements, locations, and timing—captured as structured terms that can be reviewed and audited.",
        details: ["Origin & destination", "Equipment and handling needs", "Timing and constraints", "Service requirements"]
      },
      {
        step: 2,
        title: "Receive Bids",
        description: "Collect bids with comparable terms and supporting context—so decisions are explainable, not opaque.",
        details: ["Structured bid terms", "Capacity and availability notes", "Pricing and service assumptions", "Trust and risk signals (where available)"]
      },
      {
        step: 3,
        title: "Award Load",
        description: "Select a carrier using governed decision support. Final award remains a controlled action with policy and role checks.",
        details: ["Policy-aware access (RBAC)", "Comparable bid review", "Exceptions and approvals (optional)", "Recorded decision context"]
      },
      {
        step: 4,
        title: "Track Execution",
        description: "Monitor execution status and exceptions with an audit trail of changes and updates.",
        details: ["Status updates and milestones", "Event-driven exceptions", "Operator notes and actions", "Proof of delivery and evidence"]
      }
    ]
  },
  {
    id: "emissions-reporting",
    title: "Emissions Tracking & Reporting",
    description: "A grounded reporting workflow: collect activity data, calculate, review, and export.",
    icon: Leaf,
    color: "neon-2",
    steps: [
      {
        step: 1,
        title: "Data Collection",
        description: "Collect shipment and trip activity data from your operational systems and integrations.",
        details: ["Trip activity inputs", "Distance and lanes", "Fuel and equipment attributes (as available)", "Data lineage for review"]
      },
      {
        step: 2,
        title: "Calculate Emissions",
        description: "Run calculation using documented factors and assumptions, with transparent outputs.",
        details: ["Trip-level calculations", "Emission factors and assumptions", "Adjustments and overrides (controlled)", "Reproducible results"]
      },
      {
        step: 3,
        title: "Target Tracking",
        description: "Track targets and variance with operational context, not vanity metrics.",
        details: ["Targets and baselines", "Progress views by lane/customer", "Variance and drivers", "Review workflow and notes"]
      },
      {
        step: 4,
        title: "Generate Reports",
        description: "Generate and export reports with supporting evidence and auditability.",
        details: ["Export formats", "Controls and evidence links", "Period rollups", "Stakeholder-ready summaries"]
      }
    ]
  },
  {
    id: "intelligence-assessment",
    title: "Intelligence Risk Assessment",
    description: "A scenario-based demonstration of operational awareness, assessment, and governed response.",
    icon: Radar,
    color: "neon-3",
    steps: [
      {
        step: 1,
        title: "Location Analysis",
        description: "Review a location or lane in operational context: what’s happening, what changed, and why it matters.",
        details: ["Operational context", "Event and alert inputs", "Relevant constraints", "Evidence references"]
      },
      {
        step: 2,
        title: "Risk Scoring",
        description: "Apply configurable thresholds and scoring to support consistent triage—without overstating certainty.",
        details: ["Scoring and thresholds", "Confidence indicators", "Human review points", "Policy-aware access to sensitive views"]
      },
      {
        step: 3,
        title: "Generate Briefs",
        description: "Produce a brief that summarizes signals, assumptions, and recommended next steps for review.",
        details: ["Structured summary", "Key drivers and signals", "Playbook-aligned actions", "Audit trail of edits/approvals"]
      },
      {
        step: 4,
        title: "Monitor & Alert",
        description: "Monitor events and alerts, escalating through governed workflows rather than open-ended automation.",
        details: ["Event-driven monitoring", "Alert routing", "Escalation playbooks", "Measured, auditable actions"]
      }
    ]
  }
];

export default function DemosPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="type-display mb-6">
              <span className="text-text">Guided </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Demos</span>
            </h1>
            <p className="type-section-lead text-muted mx-auto mb-6">
              Scenario-based product walkthroughs that show workspace-centric workflows, operational visibility, and governed execution—without hype.
            </p>
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
          </motion.div>

          {/* What the demos are meant to show */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="type-section-title text-text mb-4">
                What these demos are meant to show
              </h2>
              <p className="type-section-lead text-muted mb-6">
                These are guided demonstrations of how Inteleri behaves in real operational scenarios—how work moves through a workspace, how decisions are supported, and how execution stays governed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-text mb-3">Workflow visibility</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Clear steps, states, and evidence—so teams can see what happened and why</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Operational context inside the right workspace surface</span></li>
                  </ul>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-text mb-3">Governed platform behavior</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Policy-aware access and role checks (RBAC)</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Decision support and bounded automation that remains observable and auditable</span></li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Demo Flows */}
          <div className="space-y-16">
            {demoFlows.map((demo, demoIndex) => {
              const Icon = demo.icon;
              const colors = colorClasses[demo.color] ?? colorClasses["neon-1"];
              return (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: demoIndex * 0.2 }}
                  className="mb-16"
                >
                  <GlassCard className="p-8">
                    {/* Demo Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="type-section-title text-text mb-2">
                          {demo.title}
                        </h2>
                        <p className="type-section-lead text-muted mb-4">
                          {demo.description}
                        </p>
                        <NeonButton variant="neon" size="sm">
                          Request a walkthrough
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </NeonButton>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {demo.steps.map((step, stepIndex) => (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
                          className="relative"
                        >
                          {/* Connection Line */}
                          {stepIndex < demo.steps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-neon-1 to-neon-2 transform translate-x-4 z-0" />
                          )}
                          
                          <div className="relative z-10">
                            <div className="text-center mb-4">
                              <div className="relative inline-block">
                                <div className={`w-16 h-16 bg-${demo.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                  <span className="text-2xl font-bold text-text">{step.step}</span>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-1 rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4 text-bg" />
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold text-text mb-2">
                                {step.title}
                              </h3>
                              <p className="text-muted text-sm mb-4">
                                {step.description}
                              </p>
                            </div>
                            
                            {/* Step Details */}
                            <div className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <motion.div
                                  key={detailIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                                  className="flex items-center space-x-2"
                                >
                                  <div className="w-2 h-2 bg-neon-1 rounded-full flex-shrink-0" />
                                  <span className="text-xs text-muted">{detail}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Demo Actions */}
                    <div className="mt-8 pt-6 border-t border-panel-border">
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <NeonButton variant="default">
                          <Clock className="w-4 h-4 mr-2" />
                          Request a demo
                        </NeonButton>
                        <NeonButton variant="neon">
                          Explore the platform
                        </NeonButton>
                        <NeonButton variant="ghost">
                          Request a walkthrough
                        </NeonButton>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <GlassCard>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text mb-4">
                  Ready for a guided walkthrough?
                </h2>
                <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                  See the platform in realistic scenarios—workspaces, controls, and operational visibility—guided by your team’s priorities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NeonButton variant="default" size="lg">
                    Request a demo
                  </NeonButton>
                  <NeonButton variant="neon" size="lg">
                    Explore Platform
                  </NeonButton>
                  <NeonButton variant="ghost" size="lg">
                    Request a walkthrough
                  </NeonButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
