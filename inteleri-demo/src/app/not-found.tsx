"use client";

import Link from "next/link";
import { Search, Home } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neon-1 to-transparent opacity-20 select-none">
                    404
                </h1>

                <GlassCard className="backdrop-blur-xl -mt-12 relative z-10 p-8 border-white/10">
                    <div className="flex justify-center mb-6">
                        <div className="h-16 w-16 rounded-full bg-neon-2/10 flex items-center justify-center border border-neon-2/20 animate-pulse">
                            <Search className="w-8 h-8 text-neon-2" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-3">Signal Lost</h2>
                    <p className="text-muted mb-8">
                        The coordinates you are looking for do not exist in this sector.
                        It might have been moved or archived.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/">
                            <NeonButton className="w-full sm:w-auto">
                                <Home className="mr-2 h-4 w-4" />
                                Return Home
                            </NeonButton>
                        </Link>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
