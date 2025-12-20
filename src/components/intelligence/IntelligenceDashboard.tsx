import React, { useState, useEffect } from 'react';

import { Shield, AlertOctagon, Map, Radio } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { intelligenceService } from '@/services/intelligence';
import { RiskScore, ThreatAlert, IntelligenceStats } from '@/types/intelligence';
import { format } from 'date-fns';

export default function IntelligenceDashboard() {
    const [risks, setRisks] = useState<RiskScore[]>([]);
    const [alerts, setAlerts] = useState<ThreatAlert[]>([]);
    const [stats, setStats] = useState<IntelligenceStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [risksData, alertsData, statsData] = await Promise.all([
                    intelligenceService.getRiskScores(),
                    intelligenceService.getThreatAlerts(),
                    intelligenceService.getStats()
                ]);
                setRisks(risksData);
                setAlerts(alertsData);
                setStats(statsData);
            } catch (error) {
                console.error('Failed to fetch intelligence data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getRiskColor = (score: number) => {
        if (score >= 75) return 'text-red-500';
        if (score >= 50) return 'text-orange-400';
        if (score >= 25) return 'text-yellow-400';
        return 'text-green-400';
    };

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'Critical': return 'text-red-500 border-red-500/50 bg-red-500/10';
            case 'High': return 'text-orange-400 border-orange-500/50 bg-orange-500/10';
            case 'Medium': return 'text-yellow-400 border-yellow-500/50 bg-yellow-500/10';
            default: return 'text-blue-400 border-blue-500/50 bg-blue-500/10';
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-cyan-400">Loading intelligence data...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-red-500/20 text-red-400">
                            <Shield size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Global Risk Index</p>
                            <p className="text-2xl font-bold text-white">{stats.globalRiskIndex}/100</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-orange-500/20 text-orange-400">
                            <AlertOctagon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Active Threats</p>
                            <p className="text-2xl font-bold text-white">{stats.activeThreats}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                            <Map size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Monitored Routes</p>
                            <p className="text-2xl font-bold text-white">{stats.monitoredRoutes}</p>
                        </div>
                    </GlassCard>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Risk Assessment */}
                <GlassCard className="p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Risk Assessment</h2>
                    <div className="space-y-4">
                        {risks.map((risk) => (
                            <div key={risk.id} className="p-4 rounded-lg bg-white/5 border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-white">{risk.category}</h3>
                                    <span className={`text-lg font-bold ${getRiskColor(risk.score)}`}>{risk.score}</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                                    <div
                                        className={`h-full ${risk.score >= 75 ? 'bg-red-500' : risk.score >= 50 ? 'bg-orange-400' : 'bg-green-400'}`}
                                        style={{ width: `${risk.score}%` }}
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {risk.factors.map((factor, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 rounded bg-black/40 text-gray-400 border border-white/5">
                                            {factor}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Live Threats */}
                <GlassCard className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Radio className="text-red-500 animate-pulse" size={20} />
                            Live Threats
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {alerts.map((alert) => (
                            <div key={alert.id} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-white">{alert.type}</h3>
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${getSeverityColor(alert.severity)}`}>
                                        {alert.severity}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-300 mb-3">{alert.description}</p>
                                <div className="text-xs text-gray-500 mb-2">
                                    <span className="font-semibold text-gray-400">Affected:</span> {alert.affectedRoutes.join(', ')}
                                </div>
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                    <span>{format(new Date(alert.timestamp), 'MMM d, h:mm a')}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
