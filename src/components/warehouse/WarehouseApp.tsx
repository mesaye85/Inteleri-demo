import React, { useState } from 'react';
import WarehouseList from './WarehouseList';
import AgentMode from '@/components/shared/AgentMode';
import { motion } from 'framer-motion';

export default function WarehouseApp() {
    const [agentOptimization, setAgentOptimization] = useState(false);

    const handleAgentAction = () => {
        setAgentOptimization(true);
        // In a real app, this would trigger a re-fetch or state update with optimized data
    };

    return (
        <div className="max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 z-10">
                <AgentMode
                    onAgentAction={handleAgentAction}
                    agentMessage="Optimizing dock schedules and balancing labor capacity..."
                />
            </div>

            <motion.div
                animate={agentOptimization ? { opacity: [0.5, 1], scale: [0.98, 1] } : {}}
                transition={{ duration: 0.5 }}
            >
                <WarehouseList />
            </motion.div>
        </div>
    );
}
