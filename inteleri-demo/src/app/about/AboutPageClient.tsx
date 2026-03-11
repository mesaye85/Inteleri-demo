"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

const values = [
  {
    title: "Security runs first",
    description: "Security is not an add-on. Identity, policy, and tenant boundaries are part of the platform’s execution model—and the system fails closed by default.",
    icon: "🛡️"
  },
  {
    title: "Workspaces over dashboards",
    description: "Operations live in workspace context: routes, control surfaces, and services aligned to real domains (carrier, broker, shipper, risk, admin).",
    icon: "🧭"
  },
  {
    title: "Governed execution",
    description: "Automation is bounded. Actions are policy-aware, observable, and reviewable, with auditability as a first-class requirement.",
    icon: "✅"
  },
  {
    title: "Modular boundaries",
    description: "A modular app platform with clear service boundaries—so capabilities can be activated deliberately and operated safely.",
    icon: "🧱"
  }
];

export default function AboutPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="type-display mb-6">
              <span className="text-text">About </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Inteleri</span>
            </h1>
            <p className="type-section-lead text-muted mx-auto mb-6">
              Inteleri is being built as a security-native, workspace-centric platform for logistics operations—designed for governed execution, auditability, and operational coherence.
            </p>
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
          </motion.div>

          {/* Why Inteleri exists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="type-section-title text-text mb-6">
                Why Inteleri exists
              </h2>
              <div className="prose prose-invert prose-base text-muted max-w-none text-left">
                <p className="text-lg leading-relaxed mb-6">
                  Logistics operations are full of decisions that carry real risk: who can access what, what can be executed, what must be reviewed, and what evidence exists after the fact.
                  Too many systems optimize for convenience and dashboards while leaving security, auditability, and control as afterthoughts.
                </p>
                <p className="text-lg leading-relaxed">
                  Inteleri is built to make operational work governable: workspace context, clear boundaries, policy-aware execution, and visibility into how outcomes were produced.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="type-section-title text-text mb-6">
                Mission
              </h2>
              <div className="prose prose-invert prose-base text-muted max-w-none text-left">
                <p className="text-lg leading-relaxed mb-6">
                  Build a security-native, workspace-based logistics intelligence platform that supports operational decisions and governed execution—without compromising control, auditability, or tenant boundaries.
                </p>
                <p className="text-lg leading-relaxed">
                  We focus on operational visibility, decision support, and bounded automation that remains policy-aware and reviewable.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Platform principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full p-6 md:p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-semibold text-text mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="text-3xl font-bold text-text mb-6">
                Founder
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 items-start">
                <div className="text-center lg:text-left">
                  <div className="text-6xl mb-4">👤</div>
                  <h3 className="text-2xl font-semibold text-text mb-1">Mesaye Addisu</h3>
                  <p className="text-neon-1 font-medium">Founder, Inteleri</p>
                </div>
                <div className="prose prose-invert prose-base text-muted max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    Inteleri is founder-led and systems-driven. The platform is being built with a security-first posture and an execution model designed for enterprise operations: tenant-scoped access, policy-aware controls, and auditability for how work is performed.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The focus is not on flashy “AI autonomy,” but on operational control: modular boundaries, governed automation, and observability that supports real teams running real workflows.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* What Inteleri is building */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mb-16"
          >
            <GlassCard className="p-8 text-left">
              <h2 className="text-3xl font-bold text-text mb-6">
                What Inteleri is building
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-text mb-3">A workspace operating model</h3>
                  <p className="leading-relaxed">
                    Workspaces align interfaces, routes, and services to operational domains—so teams don’t fight a generic UI to do domain-specific work.
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-text mb-3">Security-native execution</h3>
                  <p className="leading-relaxed">
                    Security runs first. Access is policy-aware, tenant-scoped, and fail-closed—so execution remains bounded even when systems are complex.
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-text mb-3">Operational intelligence</h3>
                  <p className="leading-relaxed">
                    Event-driven visibility and decision support for exceptions, risk, and performance—grounded in evidence and observability.
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-text mb-3">Governed automation (TSM-aligned)</h3>
                  <p className="leading-relaxed">
                    Automation executes inside clear boundaries with measurable, auditable service invocation—designed for oversight, not unconstrained “agents.”
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Changelog / Open Development */}
          <motion.div
            id="changelog"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16 scroll-mt-24"
          >
            <GlassCard className="p-6 md:p-8 text-left">
              <h2 className="text-3xl font-bold text-text mb-6">
                Product updates
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                We share product updates and platform notes as the system evolves. For enterprise reviews, we provide architecture overviews and controls documentation on request.
              </p>
              <ul className="space-y-2 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-neon-1 mt-1">•</span>
                  <span>Product releases and workflow updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-1 mt-1">•</span>
                  <span>Security posture notes and controls summaries (on request)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-1 mt-1">•</span>
                  <span>Integration and API notes (as applicable)</span>
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold text-text mb-6">
                  Contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-neon-1 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">Email</h3>
                      <p className="text-muted">
                        Use the demo request flow or the official contact email channel.
                      </p>
                      <p className="text-muted">
                        If you don’t have an official contact path yet, treat this as a placeholder for later replacement.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Contact Form */}
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold text-text mb-6">
                  Request a conversation
                </h2>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted">
                      Thank you for reaching out. We’ll follow up as soon as we can.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/15 text-text placeholder:text-muted"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/15 text-text placeholder:text-muted"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/5 border-white/15 text-text placeholder:text-muted"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 bg-white/5 border border-white/15 rounded-md text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-neon-1"
                      />
                    </div>
                    <NeonButton
                      type="submit"
                      variant="default"
                      className="w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send request
                    </NeonButton>
                  </form>
                )}
              </GlassCard>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-text mb-4">
                Explore Inteleri
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                If you want to see how a workspace-centric, security-native platform supports governed workflows, we can walk through realistic scenarios and controls.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton variant="default" size="lg">
                  Request a demo
                </NeonButton>
                <NeonButton variant="neon" size="lg">
                  Explore the platform
                </NeonButton>
                <NeonButton variant="ghost" size="lg">
                  Contact Inteleri
                </NeonButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
