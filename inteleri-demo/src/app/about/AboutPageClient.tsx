"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-text">About </span>
                <span className="bg-gradient-to-r from-neon-1 via-neon-3 to-neon-1 bg-clip-text text-transparent">Inteleri</span>
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
                We're building the future of logistics intelligence with security-first, 
                composable architecture that scales from startup to enterprise.
              </p>
              <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-neon-1/60 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-text">Our Mission</h2>
                <p className="text-lg text-muted mb-6">
                  To revolutionize logistics through intelligent automation, 
                  predictive analytics, and composable architecture that puts 
                  security and transparency first.
                </p>
                <p className="text-muted">
                  We believe that the future of supply chain management lies in 
                  the seamless integration of human expertise with AI-powered 
                  insights, all built on a foundation of zero-trust security.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-neon-1 mb-2">100%</div>
                  <div className="text-sm text-muted">Security First</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-neon-2 mb-2">24/7</div>
                  <div className="text-sm text-muted">Intelligence</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-neon-3 mb-2">∞</div>
                  <div className="text-sm text-muted">Scalable</div>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-bold text-neon-1 mb-2">0</div>
                  <div className="text-sm text-muted">Vendor Lock-in</div>
                </GlassCard>
              </motion.div>
            </div>
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
              <h2 className="text-3xl font-bold mb-6 text-text">Our Values</h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                Built by operators, for operators. We understand the challenges 
                of modern logistics because we've lived them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold mb-4 text-text">Security by Design</h3>
                  <p className="text-muted">
                    Every feature is built with zero-trust principles. 
                    Security isn't an afterthought—it's the foundation.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-4 text-text">Intelligence by Default</h3>
                  <p className="text-muted">
                    Predictive insights and automated decision-making 
                    that gets smarter with every interaction.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="text-4xl mb-4">🧩</div>
                  <h3 className="text-xl font-semibold mb-4 text-text">Composable Architecture</h3>
                  <p className="text-muted">
                    Pay only for what you use. Mix and match capabilities 
                    to build the perfect solution for your needs.
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
              <h2 className="text-3xl font-bold mb-6 text-text">Get in Touch</h2>
              <p className="text-lg text-muted">
                Ready to transform your logistics operations? Let's talk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
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
                    <div className="flex items-center space-x-4 text-sm text-muted">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>contact@inteleri.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+1 (555) 123-4567</span>
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
      </main>

      <Footer />
    </div>
  )
}
