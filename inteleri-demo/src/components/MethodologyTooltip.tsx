'use client'

import * as React from 'react'
import { Info } from 'lucide-react'
import methodology from '@/data/methodology.json'
import { cn } from '@/lib/utils'

type Props = {
  keyName: keyof typeof methodology
  className?: string
}

export default function MethodologyTooltip({ keyName, className }: Props) {
  const data = methodology[keyName]
  const [isVisible, setIsVisible] = React.useState(false)
  const tooltipId = React.useId()
  const containerRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    if (!isVisible) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false)
      }
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handlePointerDown)
    window.addEventListener('touchstart', handlePointerDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('touchstart', handlePointerDown)
    }
  }, [isVisible])

  if (!data) return null

  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)
  const toggle = () => setIsVisible((prev) => !prev)

  return (
    <span
      ref={containerRef}
      className={cn('relative inline-flex', className)}
      aria-live="polite"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full p-1 text-muted hover:text-neon-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-1"
        aria-label={`Show methodology for ${data.name}`}
        aria-describedby={isVisible ? tooltipId : undefined}
        aria-expanded={isVisible}
        onFocus={show}
        onBlur={(event) => {
          if (!containerRef.current?.contains(event.relatedTarget as Node)) {
            hide()
          }
        }}
        onClick={toggle}
      >
        <Info aria-hidden className="h-4 w-4" />
        <span className="sr-only">Toggle methodology tooltip</span>
      </button>

      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute left-1/2 top-[calc(100%+0.5rem)] w-72 -translate-x-1/2 rounded-2xl bg-slate-950/95 p-4 text-xs text-white shadow-xl ring-1 ring-white/10 backdrop-blur-sm"
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <div className="font-medium mb-1 text-white">{data.name}</div>
          <div className="opacity-90 text-white/80 mb-2">{data.definition}</div>
          <div className="opacity-70 text-white/70 text-xs">Source: {data.source}</div>
          <div className="opacity-60 text-white/60 text-xs">Updated: {data.last_updated}</div>
        </div>
      )}
    </span>
  )
}
