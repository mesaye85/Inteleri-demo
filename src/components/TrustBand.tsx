import React from 'react'
import { Shield, FileText, GitCommit } from 'lucide-react'
import { cn } from '@/lib/utils'

const trustItems = [
  {
    icon: Shield,
    title: 'Platform Essentials',
    description: 'RBAC, Audit, Observability',
    href: '/platform#security',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    icon: FileText,
    title: 'Compliance by Design',
    description: 'SOC 2 controls mapped · GDPR aligned · NIST/ISO mappings available',
    href: '/platform#compliance',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: GitCommit,
    title: 'Open Development',
    description: 'Public changelog · Open docs · Community feedback',
    href: '/about#changelog',
    gradient: 'from-green-500/20 to-teal-500/20'
  }
]

export const TrustBand = React.memo(function TrustBand({ className }: { className?: string }) {
  return (
    <section className={cn('py-16 md:py-20 section-background', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 break-words leading-tight">
            Built by operators for operators
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto break-words leading-relaxed">
            Security-first platform with transparent development and compliance-first design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.title}
                href={item.href}
                className={cn(
                  'group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6',
                  'border border-white/10 backdrop-blur-sm',
                  'hover:bg-white/[0.06] transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
                )}
              >
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                  item.gradient
                )} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] border border-white/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white break-words leading-tight">{item.title}</h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-white/80 leading-relaxed break-words">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="break-words">Learn more</span>
                    <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default TrustBand