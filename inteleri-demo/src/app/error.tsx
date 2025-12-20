"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <GlassCard className="max-w-md w-full p-8 text-center border-neon-1/30 shadow-[0_0_50px_-12px_rgba(99,230,255,0.2)]">
                <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                        <AlertCircle className="w-10 h-10 text-red-400" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-2">System Malfunction</h2>
                <p className="text-muted mb-8">
                    We encountered an unexpected error while processing your request.
                </p>

                <div className="flex flex-col gap-3">
                    <NeonButton onClick={reset} className="w-full justify-center">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Re-calibrate
                    </NeonButton>

                    <Link href="/" className="w-full">
                        <NeonButton variant="ghost" className="w-full justify-center">
                            <Home className="mr-2 h-4 w-4" />
                            Return to Control Surface
                        </NeonButton>
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-8 p-4 bg-black/40 rounded text-left overflow-auto max-h-40 border border-white/5">
                        <p className="text-xs font-mono text-red-300">{error.message}</p>
                        <p className="text-xs font-mono text-muted/50 mt-1">{error.digest}</p>
                    </div>
                )}
            </GlassCard>
        </div>
    );
}
