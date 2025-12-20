import { PerformanceMetric, Anomaly, Forecast, AnalyticsStats } from '@/types/analytics';

const MOCK_METRICS: PerformanceMetric[] = [
    { id: 'm1', name: 'On-Time Delivery', value: 94.5, unit: '%', trend: 'up', change: 1.2, domain: 'Logistics' },
    { id: 'm2', name: 'Fleet Utilization', value: 82.3, unit: '%', trend: 'stable', change: 0.1, domain: 'Operations' },
    { id: 'm3', name: 'Fuel Efficiency', value: 7.2, unit: 'mpg', trend: 'down', change: -0.3, domain: 'Sustainability' },
    { id: 'm4', name: 'Cost per Mile', value: 1.85, unit: '$', trend: 'down', change: -0.05, domain: 'Finance' },
    { id: 'm5', name: 'Customer Satisfaction', value: 4.8, unit: '/5', trend: 'up', change: 0.2, domain: 'Sales' },
];

const MOCK_ANOMALIES: Anomaly[] = [
    { id: 'a1', metric: 'Fuel Consumption', detectedAt: '2023-12-05T08:30:00', severity: 'High', description: 'Sudden spike in fuel usage for Route 66', status: 'New' },
    { id: 'a2', metric: 'Delivery Delay', detectedAt: '2023-12-05T09:15:00', severity: 'Medium', description: 'Weather impact on Northeast corridor', status: 'Investigating' },
];

const MOCK_FORECAST: Forecast[] = Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
    value: 1000 + Math.random() * 200,
    confidenceLower: 900 + Math.random() * 100,
    confidenceUpper: 1200 + Math.random() * 100,
}));

export const analyticsService = {
    getMetrics: async (): Promise<PerformanceMetric[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_METRICS), 600));
    },

    getAnomalies: async (): Promise<Anomaly[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_ANOMALIES), 700));
    },

    getForecast: async (): Promise<Forecast[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_FORECAST), 500));
    },

    getStats: async (): Promise<AnalyticsStats> => {
        return new Promise((resolve) => setTimeout(() => resolve({
            overallHealth: 92,
            activeAnomalies: 2,
            predictionsAccuracy: 88.5
        }), 800));
    }
};
