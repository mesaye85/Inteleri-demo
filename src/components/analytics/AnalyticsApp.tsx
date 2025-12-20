import React, { useState } from 'react';
import AnalyticsDashboard from './AnalyticsDashboard';
import AgentMode from '@/components/shared/AgentMode';
import { motion } from 'framer-motion';

export default function AnalyticsApp() {
    const [agentOptimization, setAgentOptimization] = useState(false);

    const handleAgentAction = () => {
        setAgentOptimization(true);
    };

    return (
        <div className="max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 z-10">
                <AgentMode
                    onAgentAction={handleAgentAction}
                    agentMessage="Correlating cross-domain metrics and identifying hidden patterns..."
                />
            </div>

            <motion.div
                animate={agentOptimization ? { opacity: [0.5, 1], scale: [0.98, 1] } : {}}
                transition={{ duration: 0.5 }}
            >
                <AnalyticsDashboard />
            </motion.div>
        </div>
    );
}
