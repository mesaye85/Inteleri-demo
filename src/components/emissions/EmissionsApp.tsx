import React, { useState } from 'react';
import EmissionsDashboard from './EmissionsDashboard';
import AgentMode from '@/components/shared/AgentMode';
import { motion } from 'framer-motion';

export default function EmissionsApp() {
    const [agentOptimization, setAgentOptimization] = useState(false);

    const handleAgentAction = () => {
        setAgentOptimization(true);
    };

    return (
        <div className="max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 z-10">
                <AgentMode
                    onAgentAction={handleAgentAction}
                    agentMessage="Calculating optimal route adjustments for carbon reduction..."
                />
            </div>

            <motion.div
                animate={agentOptimization ? { opacity: [0.5, 1], scale: [0.98, 1] } : {}}
                transition={{ duration: 0.5 }}
            >
                <EmissionsDashboard />
            </motion.div>
        </div>
    );
}
