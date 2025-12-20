"use client";

import { Review } from "@/types/trust_pilot";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, ThumbsUp, Calendar, User, Building2 } from "lucide-react";
import { format } from "date-fns";

interface ReviewDetailProps {
    review: Review;
    onBack: () => void;
}

export default function ReviewDetail({ review, onBack }: ReviewDetailProps) {
    return (
        <div className="space-y-6">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Reviews
            </button>

            <GlassCard className="p-8">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-6 h-6 ${i < review.overall_rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-white">{review.overall_rating}.0</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">{review.title}</h1>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {review.reviewer_name}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {format(new Date(review.created_at), "MMMM d, yyyy")}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        {review.is_verified_purchase && (
                            <Badge variant="outline" className="text-green-400 border-green-400/50 bg-green-400/10 px-3 py-1">
                                Verified Purchase
                            </Badge>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            Review for: <span className="text-white font-medium">{review.entity.name}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-lg text-gray-300 leading-relaxed">
                            {review.content}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-white/10">
                            <ThumbsUp className="w-4 h-4" />
                            {review.helpful_votes} people found this helpful
                        </div>
                    </div>

                    <div className="space-y-6">
                        <GlassCard className="p-6 bg-white/5">
                            <h3 className="text-lg font-semibold text-white mb-4">Category Ratings</h3>
                            <div className="space-y-4">
                                {Object.entries(review.category_ratings).map(([category, rating]) => (
                                    <div key={category} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground capitalize">{category}</span>
                                            <span className="text-white font-medium">{rating}/5</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1.5 flex-1 rounded-full ${i < rating ? 'bg-neon-1' : 'bg-white/10'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
