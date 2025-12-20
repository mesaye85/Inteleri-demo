import React from 'react';
import { ArrowLeft, User, CheckCircle, XCircle } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';
import { Requisition } from '@/types/procurement';
import { format } from 'date-fns';

interface ProcurementDetailProps {
    requisition: Requisition;
    onBack: () => void;
}

export const ProcurementDetail: React.FC<ProcurementDetailProps> = ({ requisition, onBack }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Approved': return 'text-green-400';
            case 'Pending': return 'text-yellow-400';
            case 'Rejected': return 'text-red-400';
            case 'Ordered': return 'text-cyan-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="space-y-6">
            <NeonButton variant="ghost" onClick={onBack}>
                <ArrowLeft size={16} className="mr-2" />
                Back to Requisitions
            </NeonButton>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-bold text-white">{requisition.title}</h1>
                                </div>
                                <p className="text-gray-400 font-mono">{requisition.id}</p>
                            </div>
                            <div className={`text-xl font-bold px-4 py-2 rounded-lg border bg-white/5 ${getStatusColor(requisition.status)} border-current opacity-80`}>
                                {requisition.status}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-white/10">
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Total Amount</p>
                                <p className="text-2xl font-bold text-white">${requisition.amount.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Department</p>
                                <p className="text-lg font-medium text-cyan-400">{requisition.department}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Date</p>
                                <p className="text-lg font-medium text-white">{format(new Date(requisition.date), 'MMM d, yyyy')}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Supplier</p>
                                <p className="text-lg font-medium text-purple-400">{requisition.supplierId || 'TBD'}</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-white mb-4">Line Items</h3>
                            <div className="overflow-hidden rounded-lg border border-white/10">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-gray-400">
                                        <tr>
                                            <th className="p-3 font-medium">Description</th>
                                            <th className="p-3 font-medium text-right">Qty</th>
                                            <th className="p-3 font-medium text-right">Unit Price</th>
                                            <th className="p-3 font-medium text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {requisition.items.map((item, index) => (
                                            <tr key={index} className="hover:bg-white/5 transition-colors">
                                                <td className="p-3 text-white">{item.description}</td>
                                                <td className="p-3 text-right text-gray-300">{item.quantity}</td>
                                                <td className="p-3 text-right text-gray-300">${item.unitPrice.toLocaleString()}</td>
                                                <td className="p-3 text-right font-medium text-white">${(item.quantity * item.unitPrice).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Sidebar / Actions */}
                <div className="space-y-6">
                    <GlassCard className="p-6">
                        <h3 className="text-lg font-bold text-white mb-4">Actions</h3>
                        <div className="space-y-3">
                            {requisition.status === 'Pending' && (
                                <>
                                    <NeonButton className="w-full justify-center bg-green-500/20 hover:bg-green-500/30 text-green-400 border-green-500/50">
                                        <CheckCircle size={18} className="mr-2" />
                                        Approve Request
                                    </NeonButton>
                                    <NeonButton className="w-full justify-center bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/50">
                                        <XCircle size={18} className="mr-2" />
                                        Reject Request
                                    </NeonButton>
                                </>
                            )}
                            <NeonButton className="w-full justify-center" variant="ghost">
                                Download PDF
                            </NeonButton>
                            <NeonButton className="w-full justify-center" variant="ghost">
                                View Audit Log
                            </NeonButton>
                        </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <User size={20} className="text-cyan-400" />
                            Requester Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                    {requisition.requester.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-medium">{requisition.requester}</p>
                                    <p className="text-xs text-gray-400">{requisition.department}</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-sm text-gray-400 mb-1">Budget Status</p>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-white">Used: $45k</span>
                                    <span className="text-gray-500">Limit: $100k</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[45%]"></div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};
