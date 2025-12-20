"use client";

import { useState } from "react";
import { CarrierTrustScore } from "@/types/rating";
import RatingList from "./RatingList";
import RatingDetail from "./RatingDetail";
import { AnimatePresence, motion } from "framer-motion";

export default function RatingApp() {
    const [selectedRating, setSelectedRating] = useState<CarrierTrustScore | null>(null);

    const handleRatingSelect = (rating: CarrierTrustScore) => {
        setSelectedRating(rating);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setSelectedRating(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
                {!selectedRating ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <RatingList onRatingSelect={handleRatingSelect} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <RatingDetail rating={selectedRating} onBack={handleBack} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
