import React, { useState, useEffect } from 'react';

import { Truck, Clock, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';
import { warehouseService } from '@/services/warehouse';
import { DockAppointment, WarehouseStats } from '@/types/warehouse';
import { format } from 'date-fns';

export default function WarehouseList() {
    const [appointments, setAppointments] = useState<DockAppointment[]>([]);
    const [stats, setStats] = useState<WarehouseStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [aptData, statsData] = await Promise.all([
                    warehouseService.getAppointments(),
                    warehouseService.getStats()
                ]);
                setAppointments(aptData);
                setStats(statsData);
            } catch (error) {
                console.error('Failed to fetch warehouse data', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Arrived': return 'text-green-400 border-green-500/30 bg-green-500/10';
            case 'Loading': return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
            case 'Delayed': return 'text-red-400 border-red-500/30 bg-red-500/10';
            case 'Completed': return 'text-gray-400 border-gray-500/30 bg-gray-500/10';
            default: return 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10';
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-cyan-400">Loading warehouse data...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                            <Truck size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Dock Utilization</p>
                            <p className="text-2xl font-bold text-white">{stats.dockUtilization}%</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Appointments</p>
                            <p className="text-2xl font-bold text-white">{stats.appointmentsToday}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400">
                            <Clock size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Pending Arrival</p>
                            <p className="text-2xl font-bold text-white">{stats.pendingArrivals}</p>
                        </div>
                    </GlassCard>
                    <GlassCard className="p-4 flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Avg Turnaround</p>
                            <p className="text-2xl font-bold text-white">{stats.avgTurnaroundTime}m</p>
                        </div>
                    </GlassCard>
                </div>
            )}

            {/* Dock Schedule */}
            <GlassCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Dock Schedule</h2>
                    <NeonButton variant="ghost" size="sm">View Full Schedule <ArrowRight size={16} className="ml-2" /></NeonButton>
                </div>

                <div className="space-y-3">
                    {appointments.map((apt) => (
                        <div key={apt.id} className="flex flex-col md:flex-row items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center border border-white/10 font-mono text-lg font-bold text-cyan-400">
                                    {apt.dockNumber}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{apt.carrier}</h3>
                                    <p className="text-sm text-gray-400 flex items-center gap-2">
                                        <span className={apt.type === 'Inbound' ? 'text-green-400' : 'text-purple-400'}>{apt.type}</span>
                                        <span>•</span>
                                        <span>{format(new Date(apt.scheduledTime), 'h:mm a')}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-right mr-4 hidden md:block">
                                    <p className="text-sm text-white">{apt.vehicleId}</p>
                                    <p className="text-xs text-gray-500">{apt.driverName}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(apt.status)}`}>
                                    {apt.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}
