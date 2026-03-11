"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, ClipboardCheck, Workflow, Network } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

const controlArchitecture = [
  {
    name: "Execution boundary (governed)",
    description:
      "Automation executes inside a controlled boundary. Requests are evaluated, scoped, and either allowed, queued for review, or denied.",
    icon: Lock,
    technologies: ["Tenant-scoped execution", "Fail-closed", "Human-in-the-loop (optional)", "Deterministic controls"],
    color: "neon-1"
  },
  {
    name: "Policy & access control",
    description:
      "Policy-aware authorization (RBAC + conditions) applies to both users and automation. AI does not bypass platform controls.",
    icon: Shield,
    technologies: ["RBAC", "Policy evaluation", "Least privilege", "Scoped permissions"],
    color: "neon-2"
  },
  {
    name: "Observability & auditability",
    description:
      "Every meaningful action can be traced: who initiated it, what context was used, what was attempted, what changed, and what evidence exists.",
    icon: Eye,
    technologies: ["Audit trail", "Execution traces", "Change history", "Evidence links"],
    color: "neon-3"
  },
  {
    name: "Workflow controls",
    description:
      "Bounded AI-enabled workflows support operations without turning into open-ended autonomy. Controls include approvals, thresholds, and safe defaults.",
    icon: Workflow,
    technologies: ["Approvals", "Thresholds", "Playbooks", "Rollback-friendly execution"],
    color: "neon-1"
  },
  {
    name: "TSM-aligned governed execution",
    description:
      "Capabilities are executed as governed services. Invocations are measurable and auditable, enabling usage-aligned metering where appropriate.",
    icon: ClipboardCheck,
    technologies: ["Explicit capability scopes", "Metered invocations", "Service boundaries", "Audit-first execution"],
    color: "neon-2"
  },
  {
    name: "Interoperability (secondary)",
    description:
      "Protocols can help integrate tools, but governance comes first. Interoperability is supported without making any protocol the product.",
    icon: Network,
    technologies: ["Connector patterns", "Protocol adapters", "Versioned interfaces", "Controlled integrations"],
    color: "neon-3"
  }
];

const capabilityCategories = [
  {
    name: "Workflow assistance",
    description:
      "Guided support inside operational workflows: draft, summarize, explain, and recommend next steps with context bounded to a workspace.",
    examples: ["Dispatch copilot prompts", "Claims drafting support", "Exception triage summaries"]
  },
  {
    name: "Decision support",
    description:
      "Analysis and recommendations that inform operators. Outputs are reviewable; execution remains governed by policy and controls.",
    examples: ["Route risk advisories", "Carrier trust signals", "Operational KPI narratives"]
  },
  {
    name: "Governed automation",
    description:
      "Bounded actions that run inside explicit service boundaries—policy-checked, tenant-scoped, observable, and fail-closed by default.",
    examples: ["Create/validate entities with approvals", "Trigger playbook steps", "Controlled orchestration across services"]
  }
];

const faq = [
  {
    q: "Does Inteleri provide unconstrained autonomous agents?",
    a: "No. Inteleri focuses on governed AI-enabled workflows and bounded automation. Execution is policy-aware, tenant-scoped, and observable."
  },
  {
    q: "How do you prevent AI from bypassing controls?",
    a: "Automation uses the same identity, RBAC, and policy evaluation points as users and services. If conditions are ambiguous, execution fails closed."
  },
  {
    q: "What happens when the model is wrong or uncertain?",
    a: "Outputs are bounded and reviewable. High-impact actions can be routed to approvals, thresholds, and playbooks rather than executed automatically."
  },
  {
    q: "How is AI activity audited?",
    a: "Actions and related context can be logged with traceability: initiator, scope, inputs, outputs, and resulting state changes—supporting review and evidence."
  },
  {
    q: "Where do protocols like MCP fit?",
    a: "Protocols are interoperability tools, not the product. Governance and controls come first; adapters can be used where they help integrate systems safely."
  }
];

const keyTerms = [
  { term: "AI Control", def: "Governed AI-enabled workflows and bounded automation executed inside policy-aware platform controls." },
  { term: "Governed execution", def: "Execution that is explicit, scoped, auditable, and enforced by policy—rather than open-ended autonomy." },
  { term: "Tenant-scoped", def: "Automation and access are isolated to a tenant boundary with explicit permissioning and evidence." },
  { term: "Fail closed", def: "If authorization or conditions are uncertain, execution is denied or held for review by default." },
  { term: "Auditability", def: "The ability to trace who did what, when, why, and what changed—across users, services, and automation." },
  { term: "TSM", def: "Tokenized Service Model—governed service execution with measurable, auditable usage where metering is appropriate." }
];

export default function AgentsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-text">AI Control</span>
              <br />
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">
                Governed automation for mission-critical operations
              </span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              Inteleri does not ship loose autonomous agents. We provide governed AI-enabled workflows and bounded automation inside a security-native, tenant-aware, observable platform—so execution remains policy-checked, reviewable, and fail-closed by default.
            </p>
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
          </motion.div>

          {/* What AI Control means */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">
                What AI Control means in Inteleri
              </h2>
              <p className="text-lg leading-relaxed text-muted mb-6">
                AI Control is a governance model for AI-enabled work. It ensures assistance and automation operate inside the same platform controls as everything else: identity, RBAC, policy conditions, tenant boundaries, and audit. AI can propose, summarize, and assist—but execution remains bounded.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-neon-1 mb-4">Governed, not open-ended</h3>
                  <p className="text-muted">
                    Automation is scoped to explicit workflows and service boundaries. No “free roaming” agents operating outside policy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-2 mb-4">Policy-aware execution</h3>
                  <p className="text-muted">
                    Actions are allowed only when identity, role, and policy conditions are satisfied—otherwise the system fails closed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neon-3 mb-4">Observable and reviewable</h3>
                  <p className="text-muted">
                    Outputs and actions can be traced with execution context and evidence so operators can review, approve, and learn.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* AI control architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              AI control architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {controlArchitecture.map((component, index) => {
                const Icon = component.icon;
                return (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="h-full">
                      <div className="text-center mb-4">
                        <div className={`w-16 h-16 bg-${component.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <Icon className={`w-8 h-8 text-${component.color}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-text mb-2">
                          {component.name}
                        </h3>
                        <p className="text-muted mb-4">
                          {component.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {component.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/10 text-text px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Where AI Control applies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">
                Where AI Control applies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-neon-1 mb-3">Workspaces</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Carrier Operations: dispatch support, safety signals, exception summaries</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Broker Desk: matching assistance, claims triage, controlled workflow steps</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Shipper Control Tower: visibility narratives, compliance evidence, exception handling</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Risk & Intelligence: correlation support, assessments, playbooks</span></li>
                  </ul>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-neon-2 mb-3">Controls</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Policy-aware access and tenant scoping</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Fail-closed safeguards for ambiguous conditions</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Approvals and thresholds for high-impact changes</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Observability and audit trails for review and evidence</span></li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Why this model matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="text-3xl font-bold text-text mb-6">
                Why this model matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-neon-1 mb-3">Enterprise control</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>AI assistance stays inside RBAC and policy constraints</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Tenant boundaries are respected for data and actions</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Fail-closed behavior reduces blast radius of uncertainty</span></li>
                  </ul>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-neon-2 mb-3">Operational seriousness</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Actions remain observable and reviewable</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Automation is aligned to workflows and evidence, not novelty</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Measured execution supports governance and TSM-aligned metering</span></li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Protocols and interoperability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="text-3xl font-bold text-text mb-6">
                Protocols and interoperability
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Inteleri treats protocols as interoperability mechanisms—not the headline. If a protocol helps integrate tools or connectors safely, we can support it inside platform governance. The priority is still policy, tenant boundaries, observability, and audit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-neon-1 mb-3">What’s primary</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Governed execution and policy-aware authorization</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Tenant-scoped access to data and actions</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" /><span>Auditability and operational visibility</span></li>
                  </ul>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-neon-2 mb-3">What’s secondary</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Protocol adapters (where appropriate)</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Versioned interfaces for connector compatibility</span></li>
                    <li className="flex items-start space-x-2"><div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" /><span>Interoperability with existing enterprise tooling</span></li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* AI capability categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              AI capability categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilityCategories.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <h3 className="text-xl font-semibold text-text mb-4">
                      {type.name}
                    </h3>
                    <p className="text-muted mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neon-1 mb-2">Examples</h4>
                      {type.examples.map((example) => (
                        <div key={example} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neon-1 rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted">{example}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="text-3xl font-bold text-text mb-6">FAQ</h2>
              <dl className="space-y-5 text-muted">
                {faq.map((item) => (
                  <div key={item.q}>
                    <dt className="font-semibold text-text mb-1">{item.q}</dt>
                    <dd className="text-sm leading-relaxed">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </motion.div>

          {/* Key terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="text-3xl font-bold text-text mb-6">Key terms</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-muted">
                {keyTerms.map((t) => (
                  <div key={t.term}>
                    <dt className="font-semibold text-text">{t.term}</dt>
                    <dd className="text-sm leading-relaxed">{t.def}</dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-text mb-4">
              Ready for an AI Control briefing?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton variant="default" size="lg">
                Request a governance walkthrough
              </NeonButton>
              <NeonButton variant="neon" size="lg">
                See bounded workflow demos
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
