export interface PerformanceMetric {
    id: string;
    name: string;
    value: number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
    change: number;
    domain: string;
}

export interface Anomaly {
    id: string;
    metric: string;
    detectedAt: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    description: string;
    status: 'New' | 'Investigating' | 'Resolved';
}

export interface Forecast {
    date: string;
    value: number;
    confidenceLower: number;
    confidenceUpper: number;
}

export interface AnalyticsStats {
    overallHealth: number;
    activeAnomalies: number;
    predictionsAccuracy: number;
}
