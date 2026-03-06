"use client";

import GlassCard from "../GlassCard";

export default function SecurityCallout() {
    return (
        <GlassCard className="border-neon-2/30 p-6 md:p-8">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neon-2 mb-4">
                    Security runs first
                </h3>
                <p className="text-lg text-text">
                    Default‑deny, least privilege, immutable audit logs, tenant‑scoped data access.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <GlassCard hover className="text-center p-4 bg-white/5 min-w-0">
                    <h4 className="text-sm font-semibold text-neon-1 mb-2">RBAC</h4>
                    <p className="text-xs text-muted min-w-0 break-words">Role-based access control</p>
                </GlassCard>
                <GlassCard hover className="text-center p-4 bg-white/5 min-w-0">
                    <h4 className="text-sm font-semibold text-neon-2 mb-2">Tenant Scoping</h4>
                    <p className="text-xs text-muted min-w-0 break-words">Multi-tenant isolation</p>
                </GlassCard>
                <GlassCard hover className="text-center p-4 bg-white/5 min-w-0">
                    <h4 className="text-sm font-semibold text-neon-3 mb-2">Validation</h4>
                    <p className="text-xs text-muted min-w-0 break-words">Input validation & sanitization</p>
                </GlassCard>
                <GlassCard hover className="text-center p-4 bg-white/5 min-w-0">
                    <h4 className="text-sm font-semibold text-neon-1 mb-2">Throttling</h4>
                    <p className="text-xs text-muted min-w-0 break-words">Rate limiting & throttling</p>
                </GlassCard>
                <GlassCard hover className="text-center p-4 bg-white/5 min-w-0">
                    <h4 className="text-sm font-semibold text-neon-2 mb-2">Anomaly Detection</h4>
                    <p className="text-xs text-muted min-w-0 break-words">ML-assisted threat detection</p>
                </GlassCard>
                <GlassCard hover className="text-center p-4 bg-white/5 min-w-0">
                    <h4 className="text-sm font-semibold text-neon-3 mb-2">Immutable Audit</h4>
                    <p className="text-xs text-muted min-w-0 break-words">Tamper-evident, detailed audit trail</p>
                </GlassCard>
            </div>
        </GlassCard>
    );
}
