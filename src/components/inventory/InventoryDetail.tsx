import React, { useState, useEffect } from 'react';

import { ArrowLeft, Package, MapPin, Tag, BarChart2, Clock, AlertCircle } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';
import { inventoryService } from '@/services/inventory';
import { InventoryItem, InventoryTransaction } from '@/types/inventory';
import { format } from 'date-fns';

interface InventoryDetailProps {
    item: InventoryItem;
    onBack: () => void;
}

export const InventoryDetail: React.FC<InventoryDetailProps> = ({ item, onBack }) => {
    const [transactions, setTransactions] = useState<InventoryTransaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await inventoryService.getTransactions(item.id);
                setTransactions(data);
            } catch (error) {
                console.error('Failed to fetch transactions', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [item.id]);

    const getTransactionColor = (type: string) => {
        switch (type) {
            case 'Inbound': return 'text-green-400';
            case 'Outbound': return 'text-red-400';
            case 'Adjustment': return 'text-yellow-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="space-y-6">
            <NeonButton variant="neon" onClick={onBack} className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Inventory
            </NeonButton>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-bold text-white">{item.name}</h1>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white`}>
                                        {item.sku}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-lg">{item.description}</p>
                            </div>
                            <div className="text-right">
                                <div className={`text-xl font-bold mb-1 ${item.status === 'In Stock' ? 'text-green-400' :
                                    item.status === 'Low Stock' ? 'text-yellow-400' : 'text-red-400'
                                    }`}>
                                    {item.status}
                                </div>
                                <div className="text-sm text-gray-500">Last Count: {format(new Date(item.lastCountDate), 'MMM d, yyyy')}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-white/10">
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Quantity</p>
                                <p className="text-2xl font-bold text-white">{item.quantity} <span className="text-sm font-normal text-gray-400">{item.unit}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Total Value</p>
                                <p className="text-2xl font-bold text-cyan-400">${item.value.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Reorder Point</p>
                                <p className="text-2xl font-bold text-yellow-400">{item.reorderPoint}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">ABC Class</p>
                                <p className="text-2xl font-bold text-purple-400">{item.abcClass}</p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="text-cyan-500" size={20} />
                                <span>Location: <span className="text-white font-medium">{item.location}</span></span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Tag className="text-cyan-500" size={20} />
                                <span>Category: <span className="text-white font-medium">{item.category}</span></span>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Transaction History */}
                    <GlassCard className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Clock size={20} className="text-cyan-400" />
                            Recent Transactions
                        </h3>
                        {loading ? (
                            <div className="text-center py-4 text-gray-400">Loading history...</div>
                        ) : (
                            <div className="space-y-4">
                                {transactions.map((tx) => (
                                    <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-full bg-white/5 ${getTransactionColor(tx.type)}`}>
                                                {tx.type === 'Inbound' ? <Package size={18} /> :
                                                    tx.type === 'Outbound' ? <Package size={18} className="transform rotate-180" /> :
                                                        <AlertCircle size={18} />}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{tx.type} - {tx.reference}</p>
                                                <p className="text-xs text-gray-500">{format(new Date(tx.date), 'MMM d, yyyy HH:mm')} • by {tx.performedBy}</p>
                                            </div>
                                        </div>
                                        <div className={`font-bold ${getTransactionColor(tx.type)}`}>
                                            {tx.type === 'Inbound' ? '+' : '-'}{tx.quantity}
                                        </div>
                                    </div>
                                ))}
                                {transactions.length === 0 && (
                                    <p className="text-gray-500 text-center py-4">No recent transactions found.</p>
                                )}
                            </div>
                        )}
                    </GlassCard>
                </div>

                {/* Sidebar / Actions */}
                <div className="space-y-6">
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <NeonButton className="w-full justify-center" variant="default">
                                Adjust Stock
                            </NeonButton>
                            <NeonButton className="w-full justify-center" variant="neon">
                                Move Location
                            </NeonButton>
                            <NeonButton className="w-full justify-center" variant="neon">
                                Print Label
                            </NeonButton>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <BarChart2 size={20} className="text-purple-400" />
                            Forecast
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-400">Predicted Demand (30d)</span>
                                    <span className="text-white font-medium">45 units</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[70%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-400">Stock Cover</span>
                                    <span className="text-white font-medium">28 days</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 w-[40%]"></div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};
