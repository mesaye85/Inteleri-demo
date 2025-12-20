export interface EmissionRecord {
    id: string;
    source: string;
    type: 'Scope 1' | 'Scope 2' | 'Scope 3';
    amount: number; // in kg CO2e
    date: string;
    location: string;
}

export interface CarbonTarget {
    year: number;
    target: number;
    actual: number;
    status: 'On Track' | 'At Risk' | 'Behind';
}

export interface VehicleEmission {
    vehicleId: string;
    model: string;
    efficiency: number; // miles per gallon or kWh/100mi
    totalEmissions: number;
    distanceTraveled: number;
}

export interface EmissionsStats {
    totalEmissionsYTD: number;
    carbonIntensity: number; // kg CO2e per mile/unit
    offsetAmount: number;
}
