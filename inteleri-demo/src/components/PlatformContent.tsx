"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import NeonButton from "./NeonButton";
import ArchitectureDiagram from "./platform/ArchitectureDiagram";
import ValuePillars from "./platform/ValuePillars";
import SecurityCallout from "./platform/SecurityCallout";
import workspacesData from "@/data/workspaces.json";

export default function PlatformContent() {
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
          <h1 className="type-display mb-6">
            <span className="text-text">Security by Design. </span>
            <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Operational visibility you can govern.</span>
          </h1>
          <p className="type-section-lead text-muted mx-auto mb-6">
            Inteleri is a workspace-centric, security-native platform for logistics operations. Each workspace—Carrier Operations, Broker Desk, Shipper Control Tower, Risk &amp; Intelligence, Admin &amp; Security—provides domain-specific routes, service boundaries, and control surfaces for how work is executed.
            <br />
            <br />
            Security runs first and fails closed. Tenant-scoped execution and policy-aware access (RBAC) keep actions bounded. An event and intelligence layer provides operational awareness, auditability, and the signals needed for decision support, anomaly detection, and governed automation.
          </p>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <ArchitectureDiagram />
        </motion.div>

        {/* Workspaces / Who it's for */}
        <motion.div
          id="workspaces"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-16"
        >
          <h2 className="type-section-title text-text mb-6">Workspaces</h2>
          <p className="type-section-lead text-muted mb-8">
            The platform is organized by workspace. Each workspace delivers domain-specific routes, services, and control surfaces.
          </p>
          <div className="space-y-6">
            {workspacesData.map((ws) => (
              <div
                key={ws.id}
                id={ws.anchor}
                className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="type-card-title text-text mb-2">{ws.label}</h3>
                <p className="type-card-body mb-4">{ws.description}</p>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {ws.keyServices.map((s) => (
                    <li
                      key={s}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <ValuePillars />
        </motion.div>

        {/* Security Callout */}
        <motion.div
          id="security"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 scroll-mt-24"
        >
          <SecurityCallout />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <GlassCard className="bg-white/[0.04] border-white/[0.1] p-6 md:p-8 text-left">
            <h2 className="text-3xl font-bold text-text mb-6">
              Modular architecture with clear boundaries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-text mb-4">
                  What we keep explicit
                </h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Clear app boundaries and workspace routes</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Service execution that is governed, measurable, and auditable</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Policy enforcement before business logic (fail-closed)</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-1 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Tenant scoping and least-privilege access across data and actions</span>
                  </li>
                </ul>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-text mb-4">
                  What enterprises tend to ask about
                </h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Identity, RBAC, and policy evaluation points</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Tenant isolation and data residency options</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Observability: logs, traces, metrics, and change/audit history</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-2 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Controlled rollouts, feature flags, and operational guardrails</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Security Section */}
        <motion.div
          id="compliance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16 scroll-mt-24"
        >
          <GlassCard className="bg-white/[0.04] border-white/[0.1] p-6 md:p-8 text-left">
            <h2 className="text-3xl font-bold text-text mb-6">
              Security & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-text mb-4">
                  Security posture (runs first)
                </h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Authentication, RBAC, and policy-aware authorization</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Rate limits, throttles, and abuse controls</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Input validation, sanitization, and safe defaults</span>
                  </li>
                  <li className="flex items-start space-x-2 min-w-0">
                    <div className="w-2 h-2 bg-neon-3 rounded-full mt-2 flex-shrink-0" />
                    <span className="min-w-0 break-words">Behavioral anomaly detection and tamper-evident audit trails</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">
                  Standards alignment (claim-safe)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-neon-1 mb-1">SOC 2</div>
                    <div className="text-sm text-muted">Aligned</div>
                  </GlassCard>
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-neon-2 mb-1">GDPR</div>
                    <div className="text-sm text-muted">Aligned</div>
                  </GlassCard>
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-neon-3 mb-1">NIST</div>
                    <div className="text-sm text-muted">Informed</div>
                  </GlassCard>
                  <GlassCard hover={false} className="text-center p-4 bg-white/5">
                    <div className="text-2xl font-bold text-text mb-1">ISO</div>
                    <div className="text-sm text-muted">Mappings</div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Procurement & Enterprise */}
        <motion.div
          id="procurement"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mb-16 scroll-mt-24"
        >
          <GlassCard className="bg-white/[0.04] border-white/[0.1] p-6 md:p-8 text-left">
            <h2 className="text-3xl font-bold text-text mb-8">
              Deployment &amp; commercial model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-text mb-3">Deployment</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Cloud-hosted with region options. Dedicated and air-gapped deployment available for enterprise. Data residency and isolation aligned to your requirements.
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-text mb-3">Implementation</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Typical time to value: pilot in weeks, full rollout in quarters. We provide onboarding, integration support, and change management guidance.
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-text mb-3">Commercial model</h3>
                <p className="text-muted text-sm leading-relaxed">
                  TSM (Tokenized Service Model): governed service execution with usage-aligned metering. Capabilities are explicit, permissions are enforced, and every invocation is measurable and auditable. Enterprise agreements can include SLAs and support tiers.
                </p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-text mb-4">Frequently asked</h3>
            <dl className="space-y-4 text-muted">
              <div>
                <dt className="font-medium text-text mb-1">How do I get security and compliance documentation?</dt>
                <dd className="text-sm pl-0">Request a demo or contact us for a security packet (architecture overview, controls summary), DPA options, and standards mappings (SOC 2-aligned, GDPR-aligned, NIST-informed).</dd>
              </div>
              <div>
                <dt className="font-medium text-text mb-1">Can we run Inteleri in our own environment?</dt>
                <dd className="text-sm pl-0">Yes. Enterprise deployment options include dedicated cloud and air-gapped; discuss with your account team.</dd>
              </div>
              <div>
                <dt className="font-medium text-text mb-1">What does TSM change in practice?</dt>
                <dd className="text-sm pl-0">Capabilities become governed services with explicit scopes. You can meter usage, trace execution, and audit who invoked what—without buying broad, unused bundles.</dd>
              </div>
            </dl>
          </GlassCard>
        </motion.div>

        {/* Key terms */}
        <motion.div
          id="terms"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <GlassCard className="bg-white/[0.04] border-white/[0.1] p-6 md:p-8 text-left">
            <h2 className="text-2xl font-bold text-text mb-6">
              Key terms
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-muted">
              <div><dt className="font-semibold text-text">Workspace</dt><dd>A tenant-scoped operating surface: routes, services, and controls aligned to a domain (Carrier, Broker, Shipper, Risk, Admin).</dd></div>
              <div><dt className="font-semibold text-text">Tenant-scoped</dt><dd>Execution and data access are isolated to a tenant boundary, with explicit controls and audit.</dd></div>
              <div><dt className="font-semibold text-text">TSM</dt><dd>Tokenized Service Model—governed service execution with measurable, auditable usage.</dd></div>
              <div><dt className="font-semibold text-text">OES</dt><dd>Operational event stream—events from your systems that drive visibility, detection, and workflows.</dd></div>
              <div><dt className="font-semibold text-text">RBAC</dt><dd>Role-based access control—permissions tied to user roles.</dd></div>
              <div><dt className="font-semibold text-text">Fail closed</dt><dd>If something goes wrong, access is denied by default and the event is logged.</dd></div>
              <div><dt className="font-semibold text-text">Policy-aware</dt><dd>Actions are allowed only when identity, role, and policy conditions are satisfied.</dd></div>
              <div className="md:col-span-2"><dt className="font-semibold text-text">Event &amp; intelligence layer</dt><dd>Ingests operational events, correlates signals, and supports operational awareness, anomaly detection, and governed automation.</dd></div>
            </dl>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-text mb-4">
            Ready for a governed platform briefing?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="default" size="lg">
              Request a security packet
            </NeonButton>
            <NeonButton variant="neon" size="lg">
              Schedule an architecture briefing
            </NeonButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
