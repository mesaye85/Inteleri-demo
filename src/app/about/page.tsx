"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

// Note: Metadata should be added to a layout.tsx file in this directory for client components

const teamMembers = [
  {
    name: "Mesaye Addisu",
    role: "Founder & Security Systems Engineer",
    description:
      "Founder of Inteleri and security-focused systems engineer. Specializes in application-level security, AI orchestration risk, and security-first architecture for operational platforms. Inteleri is currently founder-built and architected end-to-end.",
    avatar: "🧠"
  }
];

const values = [
  {
    title: "Security by Architecture",
    description:
      "Security is enforced through system design, not policies layered on later. Trust boundaries, authority separation, and auditability are first-class concerns.",
    icon: "🛡️"
  },
  {
    title: "Controlled Automation",
    description:
      "Automation increases leverage and blast radius. We design systems that assume failure and degrade safely instead of trusting autonomy blindly.",
    icon: "⚙️"
  },
  {
    title: "Explicit Trust",
    description:
      "Every integration, service, and AI component has clearly defined permissions, constraints, and failure modes.",
    icon: "🔐"
  },
  {
    title: "Operational Reality",
    description:
      "We design for real-world operational complexity — not idealized workflows. Logistics is the proving ground, not the end goal.",
    icon: "📦"
  }
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-text">About </span>
              <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Inteleri</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-6">
              Inteleri is a security-native operational intelligence platform.
              We build systems where automation, AI, and third-party integrations
              are governed by explicit trust boundaries, auditability, and
              risk-aware execution — not assumptions.
            </p>
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-text mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg text-muted max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Inteleri's mission is to make advanced operational intelligence
                  possible without sacrificing security or control.
                  As AI and automation become more deeply embedded in business
                  workflows, the cost of implicit trust increases.
                </p>
                <p className="text-lg leading-relaxed">
                  We design systems that assume automation will fail — and ensure
                  those failures are contained, auditable, and recoverable.
                  Logistics and transportation are the first application domain,
                  chosen for their operational density and real-world complexity.
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
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full">
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

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Founder
            </h2>
            <div className="grid grid-cols-1 max-w-xl mx-auto gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full text-center">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {member.name}
                    </h3>
                    <p className="text-neon-1 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
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
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-neon-1 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">Email</h3>
                      <p className="text-muted">hello@inteleri.com</p>
                      <p className="text-muted text-sm">
                        Early access, technical discussions, and partnerships
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Contact Form */}
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold text-text mb-6">
                  Send us a Message
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
                      Thank you for reaching out. We’ll get back to you within 24 hours.
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
                      Send Message
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
                Interested in Security-First Automation?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Inteleri is under active development. We're engaging with
                operators, engineers, and partners who care about secure
                automation and real-world operational risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton variant="default" size="lg">
                  Request Early Access
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
