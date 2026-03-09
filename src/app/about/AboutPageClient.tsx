"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function AboutPageClient() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setFormState('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset after 3 seconds
    setTimeout(() => setFormState('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 section-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 break-words leading-tight">
                <span className="text-text">About </span>
                <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Inteleri</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-6 md:mb-8 break-words leading-relaxed">
                Inteleri is a security-native operational intelligence platform.
                We build systems where automation, AI, and third-party integrations
                are governed by explicit trust boundaries, auditability, and
                risk-aware execution — not assumptions.
              </p>
              <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text break-words leading-tight">Our Mission</h2>
              <p className="text-base md:text-lg text-muted mb-4 md:mb-6 break-words leading-relaxed">
                Inteleri&apos;s mission is to make advanced operational intelligence
                possible without sacrificing security or control.
                As AI and automation become more deeply embedded in business
                workflows, the cost of implicit trust increases.
              </p>
              <p className="text-base md:text-lg text-muted break-words leading-relaxed">
                We design systems that assume automation will fail — and ensure
                those failures are contained, auditable, and recoverable.
                Logistics and transportation are the first application domain,
                chosen for their operational density and real-world complexity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team & Values */}
        <section className="py-20 section-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text break-words leading-tight">Our Values</h2>
              <p className="text-base md:text-lg text-muted max-w-3xl mx-auto break-words leading-relaxed">
                Built by operators, for operators. We understand the challenges 
                of modern logistics because we&apos;ve lived them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛡️</div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-text break-words leading-tight">Security by Architecture</h3>
                    <p className="text-sm md:text-base text-muted break-words leading-relaxed">
                      Security is enforced through system design, not policies layered on later. Trust boundaries, authority separation, and auditability are first-class concerns.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">⚙️</div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-text break-words leading-tight">Controlled Automation</h3>
                    <p className="text-sm md:text-base text-muted break-words leading-relaxed">
                      Automation increases leverage and blast radius. We design systems that assume failure and degrade safely instead of trusting autonomy blindly.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">🔐</div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-text break-words leading-tight">Explicit Trust</h3>
                    <p className="text-sm md:text-base text-muted break-words leading-relaxed">
                      Every integration, service, and AI component has clearly defined permissions, constraints, and failure modes.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">📦</div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-text break-words leading-tight">Operational Reality</h3>
                    <p className="text-sm md:text-base text-muted break-words leading-relaxed">
                      We design for real-world operational complexity — not idealized workflows. Logistics is the proving ground, not the end goal.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text break-words leading-tight">Founder</h2>
            </motion.div>
            <div className="grid grid-cols-1 max-w-xl mx-auto gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full text-center p-6 md:p-8">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-text break-words leading-tight">
                    Mesaye Addisu
                  </h3>
                  <p className="text-neon-1 font-medium mb-3 text-base md:text-lg">
                    Founder & Security Systems Engineer
                  </p>
                  <p className="text-muted text-sm md:text-base leading-relaxed break-words">
                    Founder of Inteleri and security-focused systems engineer. Specializes in application-level security, AI orchestration risk, and security-first architecture for operational platforms. Inteleri is currently founder-built and architected end-to-end.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text break-words leading-tight">Get in Touch</h2>
              <p className="text-base md:text-lg text-muted break-words leading-relaxed">
                Ready to transform your logistics operations? Let&apos;s talk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-text placeholder:text-muted"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-text placeholder:text-muted"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-neon-1/50"
                      placeholder="Tell us about your logistics challenges..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <div>
                          <span className="break-all">hello@inteleri.com</span>
                          <p className="text-xs mt-1">Early access, technical discussions, and partnerships</p>
                        </div>
                      </div>
                    </div>
                    
                    <NeonButton
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="px-8 py-3"
                    >
                      {formState === 'submitting' && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      {formState === 'success' && <CheckCircle className="w-4 h-4 mr-2" />}
                      {formState === 'error' && <AlertCircle className="w-4 h-4 mr-2" />}
                      {formState === 'submitting' ? 'Sending...' : 
                       formState === 'success' ? 'Message Sent!' :
                       formState === 'error' ? 'Try Again' : 'Send Message'}
                    </NeonButton>
                  </div>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 section-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassCard className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text break-words leading-tight">
                  Interested in Security-First Automation?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-muted mb-8 max-w-2xl mx-auto break-words leading-relaxed">
                  Inteleri is under active development. We&apos;re engaging with
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
