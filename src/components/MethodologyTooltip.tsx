'use client'
import * as React from 'react'
import { Info } from 'lucide-react'
import methodology from '@/data/methodology.json'

type Props = { 
  keyName: keyof typeof methodology
  className?: string 
}

export default function MethodologyTooltip({ keyName, className }: Props) {
  const [isVisible, setIsVisible] = React.useState(false)
  const data = methodology[keyName as keyof typeof methodology]
  
  if (!data) return null

  return (
    <span 
      className={className} 
      aria-live="polite"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <span className="inline-flex items-center gap-1 align-middle">
        <Info aria-hidden className="h-4 w-4 text-cyan-300 hover:text-cyan-200 transition-colors cursor-help" />
        <span className="sr-only">Methodology for {data.name}</span>
      </span>
      
      {isVisible && (
        <div className="absolute z-50 mt-2 w-72 rounded-2xl bg-slate-900/95 p-3 text-xs shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
          <div className="font-medium mb-1 text-white">{data.name}</div>
          <div className="opacity-90 text-white/80 mb-2">{data.definition}</div>
          <div className="opacity-70 text-white/60 text-xs">Source: {data.source}</div>
          <div className="opacity-60 text-white/50 text-xs">Updated: {data.last_updated}</div>
        </div>
      )}
    </span>
  )
}
