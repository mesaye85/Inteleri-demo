"use client";

import { useEffect, useState } from "react";
import { CarrierTrustScore } from "@/types/rating";
import { ratingService } from "@/services/rating";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Loader2, ShieldCheck, Truck, Activity } from "lucide-react";

interface RatingListProps {
    onRatingSelect: (rating: CarrierTrustScore) => void;
}

const tierColors: Record<string, string> = {
    trusted_partner: "text-green-400 border-green-400/50 bg-green-400/10",
    reliable: "text-blue-400 border-blue-400/50 bg-blue-400/10",
    watchlist: "text-yellow-400 border-yellow-400/50 bg-yellow-400/10",
    flagged_risk: "text-red-400 border-red-400/50 bg-red-400/10",
    unrated: "text-gray-400 border-gray-400/50 bg-gray-400/10",
};

export default function RatingList({ onRatingSelect }: RatingListProps) {
    const [ratings, setRatings] = useState<CarrierTrustScore[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const data = await ratingService.getRatings();
                setRatings(data);
            } catch (err) {
                console.error("Failed to load ratings", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRatings();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-neon-1" />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratings.map((rating) => (
                <div key={rating.id} onClick={() => onRatingSelect(rating)} className="cursor-pointer h-full">
                    <GlassCard hover className="h-full p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                <Truck className="w-6 h-6 text-white" />
                            </div>
                            <Badge variant="outline" className={tierColors[rating.tier] || tierColors.unrated}>
                                {rating.tier.replace(/_/g, ' ').toUpperCase()}
                            </Badge>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{rating.carrier.company_name}</h3>
                            <p className="text-sm text-muted-foreground">DOT: {rating.carrier.dot_number}</p>
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Activity className="w-4 h-4" />
                                    <span className="text-sm">Composite Score</span>
                                </div>
                                <div className="text-2xl font-bold text-white flex items-center gap-2">
                                    <ShieldCheck className={`w-5 h-5 ${rating.composite_score >= 80 ? 'text-green-400' : rating.composite_score >= 60 ? 'text-yellow-400' : 'text-red-400'}`} />
                                    {rating.composite_score}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            ))}
        </div>
    );
}
