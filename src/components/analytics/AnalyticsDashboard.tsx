import React, { useState, useEffect } from 'react';

import { Activity, AlertTriangle, TrendingUp, TrendingDown, Minus, BarChart2 } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { analyticsService } from '@/services/analytics';
import { PerformanceMetric, Anomaly, AnalyticsStats } from '@/types/analytics';
import { format } from 'date-fns';

export default function AnalyticsDashboard() {
    const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
    const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
    const [stats, setStats] = useState<AnalyticsStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [metricsData, anomaliesData, statsData] = await Promise.all([
                    analyticsService.getMetrics(),
                    analyticsService.getAnomalies(),
                    analyticsService.getStats()
                ]);
                setMetrics(metricsData);
                setAnomalies(anomaliesData);
                setStats(statsData);
            } catch (error) {
                console.error('Failed to fetch analytics data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case 'up': return <TrendingUp size={16} className="text-green-400" />;
            case 'down': return <TrendingDown size={16} className="text-red-400" />;
            default: return <Minus size={16} className="text-gray-400" />;
        }
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
        return <div className="p-8 text-center text-cyan-400">Loading analytics data...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                            <Activity size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">System Health</p>
                            <p className="text-2xl font-bold text-white">{stats.overallHealth}%</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-red-500/20 text-red-400">
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Active Anomalies</p>
                            <p className="text-2xl font-bold text-white">{stats.activeAnomalies}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                            <BarChart2 size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Prediction Accuracy</p>
                            <p className="text-2xl font-bold text-white">{stats.predictionsAccuracy}%</p>
                        </div>
                    </GlassCard>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Key Metrics */}
                <GlassCard className="p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Key Performance Indicators</h2>
                    <div className="space-y-4">
                        {metrics.map((metric) => (
                            <div key={metric.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                <div>
                                    <p className="text-sm text-gray-400">{metric.domain}</p>
                                    <h3 className="font-semibold text-white">{metric.name}</h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <span className="text-xl font-bold text-white">{metric.value}{metric.unit}</span>
                                        {getTrendIcon(metric.trend)}
                                    </div>
                                    <p className={`text-xs ${metric.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {metric.change > 0 ? '+' : ''}{metric.change}%
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Anomalies */}
                <GlassCard className="p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Detected Anomalies</h2>
                    <div className="space-y-4">
                        {anomalies.map((anomaly) => (
                            <div key={anomaly.id} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-white">{anomaly.metric}</h3>
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${getSeverityColor(anomaly.severity)}`}>
                                        {anomaly.severity}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-300 mb-3">{anomaly.description}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                    <span>{format(new Date(anomaly.detectedAt), 'MMM d, h:mm a')}</span>
                                    <span className="text-cyan-400">{anomaly.status}</span>
                                </div>
                            </div>
                        ))}
                        {anomalies.length === 0 && (
                            <p className="text-center text-gray-500 py-8">No active anomalies detected.</p>
                        )}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
