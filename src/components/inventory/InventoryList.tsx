import React, { useState, useEffect } from 'react';

import { Package, AlertTriangle, CheckCircle, Search, Activity } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';
import { inventoryService } from '@/services/inventory';
import { InventoryItem, InventoryStats } from '@/types/inventory';

interface InventoryListProps {
    onSelectItem: (item: InventoryItem) => void;
}

export const InventoryList: React.FC<InventoryListProps> = ({ onSelectItem }) => {
    const [items, setItems] = useState<InventoryItem[]>([]);
    const [stats, setStats] = useState<InventoryStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('All');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [itemsData, statsData] = await Promise.all([
                    inventoryService.getInventoryItems(),
                    inventoryService.getStats()
                ]);
                setItems(itemsData);
                setStats(statsData);
            } catch (error) {
                console.error('Failed to fetch inventory data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.sku.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'All' || item.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'In Stock': return 'text-green-400';
            case 'Low Stock': return 'text-yellow-400';
            case 'Out of Stock': return 'text-red-400';
            default: return 'text-gray-400';
        }
    };

    const getABCColor = (abc: string) => {
        switch (abc) {
            case 'A': return 'bg-red-500/20 text-red-400 border-red-500/30';
            case 'B': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'C': return 'bg-green-500/20 text-green-400 border-green-500/30';
            default: return 'bg-gray-500/20 text-gray-400';
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-cyan-400">Loading inventory data...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                            <Package size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Items</p>
                            <p className="text-2xl font-bold text-white">{stats.totalItems}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                            <Activity size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Value</p>
                            <p className="text-2xl font-bold text-white">${stats.totalValue.toLocaleString()}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400">
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Low/Out Stock</p>
                            <p className="text-2xl font-bold text-white">{stats.lowStockCount}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Accuracy</p>
                            <p className="text-2xl font-bold text-white">{stats.accuracy}%</p>
                        </div>
                    </GlassCard>
                </div>
            )}

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full md:max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Name or SKU..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-500/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {['All', 'In Stock', 'Low Stock', 'Out of Stock'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${filterStatus === status
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Inventory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                    <GlassCard key={item.id} className="p-5 hover:border-cyan-500/30 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold border ${getABCColor(item.abcClass)}`}>
                                Class {item.abcClass}
                            </span>
                        </div>

                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-xs text-cyan-400 font-mono mb-1">{item.sku}</p>
                                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{item.name}</h3>
                            </div>
                        </div>

                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.description}</p>

                        <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                            <div>
                                <p className="text-gray-500 text-xs">Quantity</p>
                                <p className="text-white font-medium">{item.quantity} {item.unit}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">Value</p>
                                <p className="text-white font-medium">${item.value.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">Location</p>
                                <p className="text-white font-medium">{item.location}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">Status</p>
                                <p className={`font-medium ${getStatusColor(item.status)}`}>{item.status}</p>
                            </div>
                        </div>

                        <NeonButton
                            variant="neon"
                            className="w-full"
                            onClick={() => onSelectItem(item)}
                        >
                            View Details
                        </NeonButton>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};
