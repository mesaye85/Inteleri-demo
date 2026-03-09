import { RiskScore, LocationBrief, ThreatAlert, IntelligenceStats } from '@/types/intelligence';

const MOCK_RISKS: RiskScore[] = [
    { id: 'r1', category: 'Geopolitical', score: 65, trend: 'increasing', factors: ['Regional instability', 'Trade tariffs'] },
    { id: 'r2', category: 'Weather', score: 42, trend: 'stable', factors: ['Seasonal storms', 'Flooding risks'] },
    { id: 'r3', category: 'Cybersecurity', score: 78, trend: 'increasing', factors: ['Ransomware targeting logistics', 'Phishing campaigns'] },
    { id: 'r4', category: 'Supply Chain', score: 35, trend: 'decreasing', factors: ['Port congestion', 'Labor strikes'] },
];

const MOCK_ALERTS: ThreatAlert[] = [
    { id: 't1', type: 'Civil Unrest', severity: 'High', description: 'Protests blocking major highway near Port of LA', affectedRoutes: ['R-101', 'R-405'], timestamp: '2023-12-05T10:00:00' },
    { id: 't2', type: 'Severe Weather', severity: 'Medium', description: 'Blizzard warning for Midwest region', affectedRoutes: ['I-80', 'I-90'], timestamp: '2023-12-05T09:30:00' },
];

const MOCK_BRIEFS: LocationBrief[] = [
    { id: 'l1', location: 'Shanghai, CN', riskLevel: 'Medium', weatherAlerts: ['Typhoon warning'], politicalStability: 'Stable', infrastructureStatus: 'Normal' },
    { id: 'l2', location: 'Rotterdam, NL', riskLevel: 'Low', weatherAlerts: [], politicalStability: 'Stable', infrastructureStatus: 'Congested' },
];

export const intelligenceService = {
    getRiskScores: async (): Promise<RiskScore[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_RISKS), 600));
    },

    getThreatAlerts: async (): Promise<ThreatAlert[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_ALERTS), 500));
    },

    getLocationBriefs: async (): Promise<LocationBrief[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_BRIEFS), 700));
    },

    getStats: async (): Promise<IntelligenceStats> => {
        return new Promise((resolve) => setTimeout(() => resolve({
            globalRiskIndex: 55,
            activeThreats: 12,
            monitoredRoutes: 1450
        }), 800));
    }
};
