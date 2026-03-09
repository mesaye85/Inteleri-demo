import { DockAppointment, WarehouseStats, SafetyIncident } from '@/types/warehouse';

const MOCK_APPOINTMENTS: DockAppointment[] = [
    {
        id: 'APT-1001',
        dockNumber: 'D-01',
        carrier: 'Swift Transport',
        type: 'Inbound',
        scheduledTime: '2023-12-05T08:00:00',
        status: 'Arrived',
        vehicleId: 'TRK-8821',
        driverName: 'John Smith'
    },
    {
        id: 'APT-1002',
        dockNumber: 'D-02',
        carrier: 'FedEx Freight',
        type: 'Outbound',
        scheduledTime: '2023-12-05T09:30:00',
        status: 'Scheduled',
        vehicleId: 'FDX-992',
        driverName: 'Sarah Connor'
    },
    {
        id: 'APT-1003',
        dockNumber: 'D-03',
        carrier: 'JB Hunt',
        type: 'Inbound',
        scheduledTime: '2023-12-05T10:00:00',
        status: 'Delayed',
        vehicleId: 'JBH-112',
        driverName: 'Mike Ross'
    },
    {
        id: 'APT-1004',
        dockNumber: 'D-04',
        carrier: 'XPO Logistics',
        type: 'Outbound',
        scheduledTime: '2023-12-05T08:15:00',
        status: 'Loading',
        vehicleId: 'XPO-554',
        driverName: 'David Kim'
    },
    {
        id: 'APT-1005',
        dockNumber: 'D-05',
        carrier: 'Old Dominion',
        type: 'Inbound',
        scheduledTime: '2023-12-05T07:00:00',
        status: 'Completed',
        vehicleId: 'OD-221',
        driverName: 'Lisa Chen'
    }
];

const MOCK_INCIDENTS: SafetyIncident[] = [
    {
        id: 'INC-2023-001',
        date: '2023-11-28',
        type: 'Slip and Fall',
        severity: 'Low',
        status: 'Resolved',
        location: 'Aisle 4',
        description: 'Employee slipped on wet floor near loading dock.'
    },
    {
        id: 'INC-2023-002',
        date: '2023-12-01',
        type: 'Equipment Malfunction',
        severity: 'Medium',
        status: 'Investigating',
        location: 'Dock 2',
        description: 'Forklift hydraulic failure during loading operation.'
    }
];

export const warehouseService = {
    getAppointments: async (): Promise<DockAppointment[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_APPOINTMENTS), 600));
    },

    getStats: async (): Promise<WarehouseStats> => {
        return new Promise((resolve) => setTimeout(() => resolve({
            dockUtilization: 75,
            appointmentsToday: 24,
            pendingArrivals: 8,
            avgTurnaroundTime: 45
        }), 500));
    },

    getSafetyIncidents: async (): Promise<SafetyIncident[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_INCIDENTS), 700));
    }
};
