import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, Loader2 } from 'lucide-react';
import NeonButton from '@/components/NeonButton';
import GlassCard from '@/components/GlassCard';

interface AgentModeProps {
    onAgentAction: () => void;
    agentMessage?: string;
    className?: string;
}

export default function AgentMode({
    onAgentAction,
    agentMessage = "Analyzing data patterns and optimizing parameters...",
    className = ""
}: AgentModeProps) {
    const [isActive, setIsActive] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleToggle = () => {
        if (isActive) {
            setIsActive(false);
            setShowResult(false);
            setIsProcessing(false);
        } else {
            setIsActive(true);
            setIsProcessing(true);
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isProcessing) {
            timer = setTimeout(() => {
                setIsProcessing(false);
                setShowResult(true);
                onAgentAction();
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isProcessing, onAgentAction]);

    return (
        <div className={`relative ${className}`}>
            <NeonButton
                variant={isActive ? "neon" : "default"}
                onClick={handleToggle}
                className={isActive ? "border-neon-1 text-neon-1 shadow-[0_0_15px_rgba(99,230,255,0.3)]" : ""}
            >
                <Bot className={`mr-2 h-4 w-4 ${isActive ? "animate-pulse" : ""}`} />
                {isActive ? "Agent Active" : "Activate Agent Mode"}
            </NeonButton>

            <AnimatePresence>
                {isActive && isProcessing && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-4 z-50 w-80"
                    >
                        <GlassCard className="p-4 border-neon-1/30 bg-black/80 backdrop-blur-xl">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-neon-1/20 rounded-full animate-ping" />
                                    <div className="relative bg-neon-1/10 p-2 rounded-full border border-neon-1/50">
                                        <Loader2 className="h-5 w-5 text-neon-1 animate-spin" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neon-1 mb-1">Agent Working</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {agentMessage}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-neon-1"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3, ease: "linear" }}
                                />
                            </div>
                        </GlassCard>
                    </motion.div>
                )}

                {isActive && showResult && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full right-0 mt-4 z-50 w-80"
                    >
                        <GlassCard className="p-4 border-green-500/30 bg-black/80 backdrop-blur-xl">
                            <div className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-2 rounded-full border border-green-500/50">
                                    <Sparkles className="h-5 w-5 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-green-400 mb-1">Optimization Complete</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        Agent has updated the view with optimized parameters based on real-time analysis.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
