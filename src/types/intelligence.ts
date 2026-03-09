export interface RiskScore {
    id: string;
    category: string;
    score: number; // 0-100
    trend: 'increasing' | 'decreasing' | 'stable';
    factors: string[];
}

export interface LocationBrief {
    id: string;
    location: string;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
    weatherAlerts: string[];
    politicalStability: string;
    infrastructureStatus: string;
}

export interface ThreatAlert {
    id: string;
    type: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    description: string;
    affectedRoutes: string[];
    timestamp: string;
}

export interface IntelligenceStats {
    globalRiskIndex: number;
    activeThreats: number;
    monitoredRoutes: number;
}
