import { Supplier, Requisition, Contract, ProcurementStats } from '@/types/procurement';

const MOCK_SUPPLIERS: Supplier[] = [
    {
        id: 'S-001',
        name: 'Global Logistics Solutions',
        category: 'Logistics',
        contactName: 'Alice Johnson',
        email: 'alice@globallogistics.com',
        phone: '(555) 123-4567',
        status: 'Active',
        performanceScore: 92,
        spendYTD: 150000
    },
    {
        id: 'S-002',
        name: 'TechParts Inc.',
        category: 'Hardware',
        contactName: 'Bob Smith',
        email: 'bob@techparts.com',
        phone: '(555) 987-6543',
        status: 'Active',
        performanceScore: 88,
        spendYTD: 75000
    },
    {
        id: 'S-003',
        name: 'Office Supplies Co.',
        category: 'Office',
        contactName: 'Charlie Brown',
        email: 'charlie@officesupplies.com',
        phone: '(555) 555-5555',
        status: 'Probation',
        performanceScore: 75,
        spendYTD: 12000
    },
    {
        id: 'S-004',
        name: 'Fuel Services Ltd.',
        category: 'Fuel',
        contactName: 'Diana Prince',
        email: 'diana@fuelservices.com',
        phone: '(555) 111-2222',
        status: 'Active',
        performanceScore: 95,
        spendYTD: 320000
    }
];

const MOCK_REQUISITIONS: Requisition[] = [
    {
        id: 'REQ-2023-001',
        title: 'Q4 Office Supplies',
        requester: 'John Doe',
        department: 'Operations',
        date: '2023-11-28',
        amount: 1500,
        status: 'Pending',
        supplierId: 'S-003',
        items: [
            { description: 'Printer Paper', quantity: 50, unitPrice: 10 },
            { description: 'Toner Cartridges', quantity: 5, unitPrice: 200 }
        ]
    },
    {
        id: 'REQ-2023-002',
        title: 'New Laptops for Dev Team',
        requester: 'Jane Smith',
        department: 'IT',
        date: '2023-11-25',
        amount: 12000,
        status: 'Approved',
        supplierId: 'S-002',
        items: [
            { description: 'MacBook Pro 16"', quantity: 4, unitPrice: 3000 }
        ]
    },
    {
        id: 'REQ-2023-003',
        title: 'Fleet Fuel Card Top-up',
        requester: 'Mike Johnson',
        department: 'Logistics',
        date: '2023-11-20',
        amount: 50000,
        status: 'Ordered',
        supplierId: 'S-004',
        items: [
            { description: 'Diesel Fuel Credit', quantity: 1, unitPrice: 50000 }
        ]
    }
];

const MOCK_CONTRACTS: Contract[] = [
    {
        id: 'CTR-2023-101',
        title: 'Annual Fuel Supply Agreement',
        supplierId: 'S-004',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        value: 500000,
        status: 'Active',
        terms: 'Net 30'
    },
    {
        id: 'CTR-2023-102',
        title: 'IT Hardware Procurement',
        supplierId: 'S-002',
        startDate: '2023-06-01',
        endDate: '2024-05-31',
        value: 100000,
        status: 'Active',
        terms: 'Net 45'
    }
];

export const procurementService = {
    getSuppliers: async (): Promise<Supplier[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_SUPPLIERS), 600));
    },

    getRequisitions: async (): Promise<Requisition[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_REQUISITIONS), 700));
    },

    getContracts: async (): Promise<Contract[]> => {
        return new Promise((resolve) => setTimeout(() => resolve(MOCK_CONTRACTS), 500));
    },

    getStats: async (): Promise<ProcurementStats> => {
        return new Promise((resolve) => setTimeout(() => resolve({
            activeRequisitions: MOCK_REQUISITIONS.length,
            pendingApprovals: MOCK_REQUISITIONS.filter(r => r.status === 'Pending').length,
            totalSpendYTD: MOCK_SUPPLIERS.reduce((acc, s) => acc + s.spendYTD, 0),
            activeContracts: MOCK_CONTRACTS.filter(c => c.status === 'Active').length
        }), 800));
    }
};
