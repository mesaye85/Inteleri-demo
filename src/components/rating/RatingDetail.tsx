"use client";

import { CarrierTrustScore } from "@/types/rating";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShieldCheck, Truck, Activity, BarChart3 } from "lucide-react";

interface RatingDetailProps {
    rating: CarrierTrustScore;
    onBack: () => void;
}

const tierColors: Record<string, string> = {
    trusted_partner: "text-green-400 border-green-400/50 bg-green-400/10",
    reliable: "text-blue-400 border-blue-400/50 bg-blue-400/10",
    watchlist: "text-yellow-400 border-yellow-400/50 bg-yellow-400/10",
    flagged_risk: "text-red-400 border-red-400/50 bg-red-400/10",
    unrated: "text-gray-400 border-gray-400/50 bg-gray-400/10",
};

export default function RatingDetail({ rating, onBack }: RatingDetailProps) {
    return (
        <div className="space-y-6">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Ratings
            </button>

            <GlassCard className="p-8">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Truck className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">{rating.carrier.company_name}</h1>
                            <div className="flex items-center gap-3">
                                <Badge variant="outline" className={tierColors[rating.tier] || tierColors.unrated}>
                                    {rating.tier.replace(/_/g, ' ').toUpperCase()}
                                </Badge>
                                <span className="text-sm text-muted-foreground">MC: {rating.carrier.mc_number}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="text-sm text-muted-foreground">Composite Score</div>
                        <div className="text-5xl font-bold text-white flex items-center gap-3">
                            <ShieldCheck className={`w-10 h-10 ${rating.composite_score >= 80 ? 'text-green-400' : rating.composite_score >= 60 ? 'text-yellow-400' : 'text-red-400'}`} />
                            {rating.composite_score}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-neon-1" />
                            Score Breakdown
                        </h3>
                        <div className="space-y-4">
                            {Object.entries(rating.category_breakdowns).map(([category, score]) => (
                                <div key={category} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground capitalize">{category}</span>
                                        <span className="text-white font-medium">{score}</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-neon-1 to-neon-2 rounded-full"
                                            style={{ width: `${score}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-neon-1" />
                            Carrier Profile
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-xs text-muted-foreground mb-1">Fleet Size</div>
                                <div className="text-lg font-semibold text-white">{rating.carrier.fleet_size} Trucks</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-xs text-muted-foreground mb-1">Region</div>
                                <div className="text-lg font-semibold text-white">{rating.carrier.operating_region}</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-xs text-muted-foreground mb-1">Status</div>
                                <div className="text-lg font-semibold text-white capitalize">
                                    {rating.carrier.is_active ? 'Active' : 'Inactive'}
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-xs text-muted-foreground mb-1">DOT Number</div>
                                <div className="text-lg font-semibold text-white">{rating.carrier.dot_number}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
