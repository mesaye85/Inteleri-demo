import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { InventoryList } from './InventoryList';
import { InventoryDetail } from './InventoryDetail';
import { InventoryItem } from '@/types/inventory';

export default function InventoryApp() {
    const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

    return (
        <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
                {selectedItem ? (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <InventoryDetail
                            item={selectedItem}
                            onBack={() => setSelectedItem(null)}
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
                        <InventoryList onSelectItem={setSelectedItem} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
