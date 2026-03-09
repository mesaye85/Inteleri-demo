import { EmissionRecord, CarbonTarget, VehicleEmission, EmissionsStats } from '@/types/emissions';

const MOCK_EMISSIONS: EmissionRecord[] = [
    { id: 'e1', source: 'Fleet Operations', type: 'Scope 1', amount: 4500, date: '2023-12-01', location: 'North America' },
    { id: 'e2', source: 'Warehouse Energy', type: 'Scope 2', amount: 1200, date: '2023-12-01', location: 'Chicago Hub' },
    { id: 'e3', source: 'Third-Party Logistics', type: 'Scope 3', amount: 8500, date: '2023-12-01', location: 'Global' },
];

const MOCK_TARGETS: CarbonTarget[] = [
    { year: 2023, target: 50000, actual: 48000, status: 'On Track' },
    { year: 2024, target: 45000, actual: 0, status: 'On Track' },
    { year: 2025, target: 40000, actual: 0, status: 'On Track' },
];

const MOCK_VEHICLES: VehicleEmission[] = [
    { vehicleId: 'V-101', model: 'Freightliner eCascadia', efficiency: 2.1, totalEmissions: 0, distanceTraveled: 1200 },
    { vehicleId: 'V-102', model: 'Volvo VNR Electric', efficiency: 2.0, totalEmissions: 0, distanceTraveled: 950 },
    { vehicleId: 'V-201', model: 'Diesel Heavy Duty', efficiency: 6.5, totalEmissions: 2400, distanceTraveled: 1500 },
];

export const emissionsService = {
    getRecentEmissions: async (): Promise<EmissionRecord[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_EMISSIONS), 600));
    },

    getTargets: async (): Promise<CarbonTarget[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_TARGETS), 500));
    },

    getVehicleEmissions: async (): Promise<VehicleEmission[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_VEHICLES), 700));
    },

    getStats: async (): Promise<EmissionsStats> => {
        return new Promise((resolve) => setTimeout(() => resolve({
            totalEmissionsYTD: 14200,
            carbonIntensity: 0.85,
            offsetAmount: 2500
        }), 800));
    }
};
