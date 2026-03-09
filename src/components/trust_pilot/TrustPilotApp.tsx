"use client";

import { useState } from "react";
import { Review } from "@/types/trust_pilot";
import ReviewList from "./ReviewList";
import ReviewDetail from "./ReviewDetail";
import { AnimatePresence, motion } from "framer-motion";

export default function TrustPilotApp() {
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);

    const handleReviewSelect = (review: Review) => {
        setSelectedReview(review);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setSelectedReview(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
                {!selectedReview ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ReviewList onReviewSelect={handleReviewSelect} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ReviewDetail review={selectedReview} onBack={handleBack} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
