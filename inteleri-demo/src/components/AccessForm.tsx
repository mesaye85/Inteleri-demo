'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export const AccessForm = React.memo(function AccessForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    modules: '',
    accessCode: ''
  })
  const [error, setError] = useState('')

  const validateForm = () => {
    const errors: string[] = []

    if (!formData.name.trim()) {
      errors.push('Full name is required')
    }

    if (!formData.email.trim()) {
      errors.push('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address')
    }

    if (!formData.company.trim()) {
      errors.push('Company name is required')
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setError('')

    const validationErrors = validateForm()
    if (validationErrors.length > 0) {
      setFormState('error')
      setError(validationErrors.join('. '))
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // For demo purposes, always succeed
      setFormState('success')
    } catch {
      setFormState('error')
      setError('Something went wrong. Please try again.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 border border-green-500/30">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Access Request Submitted</h3>
        <p className="text-white/80 mb-6">
            We&apos;ll review your request and get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setFormState('idle')
            setFormData({ name: '', email: '', company: '', modules: '', accessCode: '' })
          }}
          className="text-cyan-300 hover:text-cyan-200 transition-colors"
        >
          Submit another request
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
              placeholder="your.email@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="modules" className="block text-sm font-medium text-white mb-2">
            Modules of Interest
          </label>
          <textarea
            id="modules"
            name="modules"
            value={formData.modules}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent resize-none"
            placeholder="Analytics, Loadboard, Emissions, Intelligence, TSM, Agents..."
          />
        </div>

        <div>
          <label htmlFor="accessCode" className="block text-sm font-medium text-white mb-2">
            Access Code (Optional)
          </label>
          <input
            type="text"
            id="accessCode"
            name="accessCode"
            value={formData.accessCode}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
            placeholder="If you have an access code"
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
          >
            <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
            <span className="text-red-300 text-sm">{error}</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={formState === 'submitting'}
          className={cn(
            'w-full px-6 py-4 rounded-xl font-medium transition-all duration-200',
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-white',
            'hover:from-cyan-400 hover:to-blue-400',
            'focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'flex items-center justify-center gap-2'
          )}
        >
          {formState === 'submitting' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting Request...
            </>
          ) : (
            'Request Access'
          )}
        </button>
      </form>
    </motion.div>
  )
})