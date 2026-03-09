export type AppointmentType = 'Inbound' | 'Outbound';
export type AppointmentStatus = 'Scheduled' | 'Arrived' | 'Loading' | 'Delayed' | 'Completed' | 'Cancelled';
export type IncidentSeverity = 'Low' | 'Medium' | 'High' | 'Critical';
export type IncidentStatus = 'New' | 'Investigating' | 'Resolved';

export interface DockAppointment {
    id: string;
    dockNumber: string;
    carrier: string;
    type: AppointmentType;
    scheduledTime: string;
    status: AppointmentStatus;
    vehicleId: string;
    driverName: string;
}

export interface WarehouseStats {
    dockUtilization: number;
    appointmentsToday: number;
    pendingArrivals: number;
    avgTurnaroundTime: number;
}

export interface SafetyIncident {
    id: string;
    date: string;
    type: string;
    severity: IncidentSeverity;
    status: IncidentStatus;
    location: string;
    description: string;
}
