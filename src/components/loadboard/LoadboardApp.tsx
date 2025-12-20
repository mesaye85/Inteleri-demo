"use client";

import { useState } from "react";
import { Load } from "@/types/loadboard";
import LoadList from "./LoadList";
import LoadDetail from "./LoadDetail";
import BidForm from "./BidForm";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadboardApp() {
    const [selectedLoad, setSelectedLoad] = useState<Load | null>(null);
    const [isBidding, setIsBidding] = useState(false);

    const handleLoadSelect = (load: Load) => {
        setSelectedLoad(load);
        setIsBidding(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (isBidding) {
            setIsBidding(false);
        } else {
            setSelectedLoad(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBidClick = () => {
        setIsBidding(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBidSuccess = () => {
        // In a real app, we might refresh data here
        setTimeout(() => {
            setIsBidding(false);
            setSelectedLoad(null); // Go back to list or stay on detail? Let's go to list for now
        }, 2000);
    };

    return (
        <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
                {!selectedLoad ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <LoadList onLoadSelect={handleLoadSelect} />
                    </motion.div>
                ) : isBidding ? (
                    <motion.div
                        key="bid"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BidForm
                            load={selectedLoad}
                            onSuccess={handleBidSuccess}
                            onCancel={() => setIsBidding(false)}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <LoadDetail
                            load={selectedLoad}
                            onBack={handleBack}
                            onBidClick={handleBidClick}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
