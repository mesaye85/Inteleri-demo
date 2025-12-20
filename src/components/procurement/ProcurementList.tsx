import React, { useState, useEffect } from 'react';

import { ShoppingCart, FileText, DollarSign, Users, Search, Plus } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';
import { procurementService } from '@/services/procurement';
import { Requisition, ProcurementStats } from '@/types/procurement';
import { format } from 'date-fns';

interface ProcurementListProps {
    onSelectRequisition: (req: Requisition) => void;
}

export const ProcurementList: React.FC<ProcurementListProps> = ({ onSelectRequisition }) => {
    const [requisitions, setRequisitions] = useState<Requisition[]>([]);
    const [stats, setStats] = useState<ProcurementStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [reqsData, statsData] = await Promise.all([
                    procurementService.getRequisitions(),
                    procurementService.getStats()
                ]);
                setRequisitions(reqsData);
                setStats(statsData);
            } catch (error) {
                console.error('Failed to fetch procurement data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Approved': return 'text-green-400 bg-green-500/10 border-green-500/20';
            case 'Pending': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
            case 'Rejected': return 'text-red-400 bg-red-500/10 border-red-500/20';
            case 'Ordered': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
            default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-cyan-400">Loading procurement data...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                            <ShoppingCart size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Active Reqs</p>
                            <p className="text-2xl font-bold text-white">{stats.activeRequisitions}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400">
                            <FileText size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Pending Approval</p>
                            <p className="text-2xl font-bold text-white">{stats.pendingApprovals}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Spend YTD</p>
                            <p className="text-2xl font-bold text-white">${(stats.totalSpendYTD / 1000).toFixed(1)}k</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Active Contracts</p>
                            <p className="text-2xl font-bold text-white">{stats.activeContracts}</p>
                        </div>
                    </GlassCard>
                </div>
            )}

            {/* Actions & Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full md:max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search requisitions..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-500/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <NeonButton>
                    <Plus size={18} className="mr-2" />
                    New Requisition
                </NeonButton>
            </div>

            {/* Requisitions List */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">Recent Requisitions</h2>
                {requisitions.map((req) => (
                    <div key={req.id} onClick={() => onSelectRequisition(req)} className="cursor-pointer">
                        <GlassCard className="p-4 hover:border-cyan-500/30 transition-colors group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xs font-mono text-gray-500">{req.id}</span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold border ${getStatusColor(req.status)}`}>
                                            {req.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{req.title}</h3>
                                    <p className="text-sm text-gray-400">
                                        Requested by <span className="text-gray-300">{req.requester}</span> • {req.department} • {format(new Date(req.date), 'MMM d, yyyy')}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-2xl font-bold text-white">${req.amount.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">{req.items.length} items</p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>
    );
};
