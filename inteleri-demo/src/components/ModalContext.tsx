"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { AccessForm } from "./AccessForm";
import GlassCard from "./GlassCard";

type ModalType = "access" | null;

interface ModalContextType {
    openModal: (type: ModalType) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = useCallback((type: ModalType) => {
        setActiveModal(type);
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }, []);

    const closeModal = useCallback(() => {
        setActiveModal(null);
        document.body.style.overflow = "";
    }, []);

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <AnimatePresence>
                {activeModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="w-full max-w-2xl pointer-events-auto"
                            >
                                <GlassCard className="relative overflow-hidden max-h-[90vh] overflow-y-auto">
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 p-2 text-muted hover:text-text transition-colors z-10 bg-white/5 rounded-full"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <div className="p-2">
                                        <div className="mb-6 text-center">
                                            <h2 className="text-2xl font-bold mb-2">Request Access</h2>
                                            <p className="text-muted">Enter your details to join the Inteleri pilot program.</p>
                                        </div>
                                        {activeModal === "access" && <AccessForm />}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
