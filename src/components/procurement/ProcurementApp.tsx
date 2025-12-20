import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProcurementList } from './ProcurementList';
import { ProcurementDetail } from './ProcurementDetail';
import { Requisition } from '@/types/procurement';

export default function ProcurementApp() {
    const [selectedReq, setSelectedReq] = useState<Requisition | null>(null);

    return (
        <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
                {selectedReq ? (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ProcurementDetail
                            requisition={selectedReq}
                            onBack={() => setSelectedReq(null)}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ProcurementList onSelectRequisition={setSelectedReq} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
