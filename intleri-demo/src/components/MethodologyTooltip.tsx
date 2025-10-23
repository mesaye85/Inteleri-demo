"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";
import methodology from "@/data/methodology.json";
import { cn } from "@/lib/utils";

type Props = {
  keyName: keyof typeof methodology;
  className?: string;
};

export default function MethodologyTooltip({ keyName, className }: Props) {
  const data = methodology[keyName];
  if (!data) return null;

  return (
    <Tooltip.Provider delayDuration={150} skipDelayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger
          type="button"
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-colors",
            "hover:text-neon-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            className
          )}
          aria-label={`Methodology for ${data.name}`}
        >
          <Info className="h-4 w-4" aria-hidden="true" />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            align="start"
            className="z-50 max-w-xs rounded-2xl border border-white/10 bg-slate-950/95 p-4 text-xs text-white shadow-xl backdrop-blur-sm"
          >
            <div className="font-medium text-white mb-1">{data.name}</div>
            <p className="text-white/80 leading-relaxed">{data.definition}</p>
            <p className="mt-3 text-white/70">Source: {data.source}</p>
            <p className="text-white/60">Updated: {data.last_updated}</p>
            <Tooltip.Arrow className="fill-white/10" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
