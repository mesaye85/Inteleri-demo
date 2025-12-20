"use client";

import { useState } from "react";
import { Carrier } from "@/types/carrier";
import CarrierList from "./CarrierList";
import CarrierDetail from "./CarrierDetail";
import { AnimatePresence, motion } from "framer-motion";

export default function CarrierApp() {
    const [selectedCarrier, setSelectedCarrier] = useState<Carrier | null>(null);

    const handleCarrierSelect = (carrier: Carrier) => {
        setSelectedCarrier(carrier);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setSelectedCarrier(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
                {!selectedCarrier ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CarrierList onCarrierSelect={handleCarrierSelect} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CarrierDetail carrier={selectedCarrier} onBack={handleBack} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
