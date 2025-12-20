import React, { useState, useEffect } from 'react';

import { Leaf, Globe, Zap } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { emissionsService } from '@/services/emissions';
import { EmissionRecord, CarbonTarget, EmissionsStats } from '@/types/emissions';

export default function EmissionsDashboard() {
    const [emissions, setEmissions] = useState<EmissionRecord[]>([]);
    const [targets, setTargets] = useState<CarbonTarget[]>([]);
    const [stats, setStats] = useState<EmissionsStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [emissionsData, targetsData, statsData] = await Promise.all([
                    emissionsService.getRecentEmissions(),
                    emissionsService.getTargets(),
                    emissionsService.getStats()
                ]);
                setEmissions(emissionsData);
                setTargets(targetsData);
                setStats(statsData);
            } catch (error) {
                console.error('Failed to fetch emissions data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="p-8 text-center text-cyan-400">Loading emissions data...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                            <Globe size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Emissions YTD</p>
                            <p className="text-2xl font-bold text-white">{stats.totalEmissionsYTD.toLocaleString()} kg</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Carbon Intensity</p>
                            <p className="text-2xl font-bold text-white">{stats.carbonIntensity} kg/mi</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-teal-500/20 text-teal-400">
                            <Leaf size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Carbon Offsets</p>
                            <p className="text-2xl font-bold text-white">{stats.offsetAmount.toLocaleString()} kg</p>
                        </div>
                    </GlassCard>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Emissions Breakdown */}
                <GlassCard className="p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Emissions by Scope</h2>
                    <div className="space-y-4">
                        {emissions.map((record) => (
                            <div key={record.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white">{record.type}</span>
                                        <span className="text-sm text-gray-400">{record.location}</span>
                                    </div>
                                    <h3 className="font-semibold text-white">{record.source}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-white">{record.amount.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">kg CO2e</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Targets */}
                <GlassCard className="p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Sustainability Targets</h2>
                    <div className="space-y-6">
                        {targets.map((target) => (
                            <div key={target.year} className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="font-semibold text-white">{target.year} Target</h3>
                                        <p className="text-xs text-gray-400">Goal: {target.target.toLocaleString()} kg</p>
                                    </div>
                                    <span className="text-sm font-bold text-green-400">{target.status}</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-green-400 to-teal-400"
                                        style={{ width: `${Math.min(100, (target.actual / target.target) * 100)}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>0%</span>
                                    <span>{Math.round((target.actual / target.target) * 100)}% Complete</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
