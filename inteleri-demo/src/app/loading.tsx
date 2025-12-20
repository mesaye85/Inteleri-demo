import GlassCard from "@/components/GlassCard";

export default function Loading() {
    return (
        <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header Skeleton */}
            <div className="space-y-4 mb-16 animate-pulse">
                <div className="h-4 w-32 bg-white/5 rounded" />
                <div className="h-12 w-3/4 max-w-2xl bg-white/10 rounded-lg" />
                <div className="h-6 w-1/2 max-w-xl bg-white/5 rounded" />
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <GlassCard key={i} className="h-64 p-6 relative overflow-hidden">
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />

                        <div className="h-12 w-12 rounded-xl bg-white/10 mb-6" />
                        <div className="h-6 w-3/4 bg-white/10 rounded mb-4" />
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-white/5 rounded" />
                            <div className="h-4 w-5/6 bg-white/5 rounded" />
                            <div className="h-4 w-4/6 bg-white/5 rounded" />
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
