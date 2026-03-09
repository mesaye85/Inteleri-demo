"use client";

import { useEffect, useState } from "react";
import { Review } from "@/types/trust_pilot";
import { trustPilotService } from "@/services/trust_pilot";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Loader2, Star, ThumbsUp, MessageSquare } from "lucide-react";
import { format } from "date-fns";

interface ReviewListProps {
    onReviewSelect: (review: Review) => void;
}

export default function ReviewList({ onReviewSelect }: ReviewListProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await trustPilotService.getReviews();
                setReviews(data);
            } catch (err) {
                console.error("Failed to load reviews", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
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
            {reviews.map((review) => (
                <div key={review.id} onClick={() => onReviewSelect(review)} className="cursor-pointer h-full">
                    <GlassCard hover className="h-full p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.overall_rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {review.is_verified_purchase && (
                                <Badge variant="outline" className="text-green-400 border-green-400/50 bg-green-400/10 text-[10px]">
                                    Verified
                                </Badge>
                            )}
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{review.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-3">{review.content}</p>
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/10 space-y-3">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{review.reviewer_name}</span>
                                <span>{format(new Date(review.created_at), "MMM d, yyyy")}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <ThumbsUp className="w-3 h-3" />
                                    {review.helpful_votes}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="w-3 h-3" />
                                    For: {review.entity.name}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            ))}
        </div>
    );
}
