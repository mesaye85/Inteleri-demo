"use client";

import { useState } from "react";
import { Broker } from "@/types/broker";
import BrokerList from "./BrokerList";
import BrokerDetail from "./BrokerDetail";
import { AnimatePresence, motion } from "framer-motion";

export default function BrokerApp() {
    const [selectedBroker, setSelectedBroker] = useState<Broker | null>(null);

    const handleBrokerSelect = (broker: Broker) => {
        setSelectedBroker(broker);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setSelectedBroker(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
                {!selectedBroker ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BrokerList onBrokerSelect={handleBrokerSelect} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BrokerDetail broker={selectedBroker} onBack={handleBack} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
