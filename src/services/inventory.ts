import { InventoryItem, InventoryTransaction, InventoryStats } from '@/types/inventory';

const MOCK_INVENTORY: InventoryItem[] = [
    {
        id: '1',
        sku: 'INV-001',
        name: 'High-Performance Brake Pads',
        description: 'Ceramic brake pads for heavy-duty trucks',
        quantity: 150,
        unit: 'sets',
        location: 'A-12-04',
        category: 'Parts',
        abcClass: 'A',
        reorderPoint: 50,
        lastCountDate: '2023-11-15',
        status: 'In Stock',
        value: 12500
    },
    {
        id: '2',
        sku: 'INV-002',
        name: 'Oil Filter Type X',
        description: 'Standard oil filter for fleet vehicles',
        quantity: 25,
        unit: 'units',
        location: 'B-05-02',
        category: 'Consumables',
        abcClass: 'B',
        reorderPoint: 30,
        lastCountDate: '2023-11-20',
        status: 'Low Stock',
        value: 375
    },
    {
        id: '3',
        sku: 'INV-003',
        name: 'Transmission Fluid (55 gal)',
        description: 'Bulk transmission fluid drum',
        quantity: 5,
        unit: 'drums',
        location: 'C-01-01',
        category: 'Fluids',
        abcClass: 'C',
        reorderPoint: 2,
        lastCountDate: '2023-10-01',
        status: 'In Stock',
        value: 2500
    },
    {
        id: '4',
        sku: 'INV-004',
        name: 'Alternator 24V',
        description: 'Heavy duty alternator',
        quantity: 0,
        unit: 'units',
        location: 'A-15-03',
        category: 'Parts',
        abcClass: 'A',
        reorderPoint: 5,
        lastCountDate: '2023-11-25',
        status: 'Out of Stock',
        value: 0
    },
    {
        id: '5',
        sku: 'INV-005',
        name: 'Tire 295/75R22.5',
        description: 'All-position radial truck tire',
        quantity: 42,
        unit: 'units',
        location: 'W-02-01',
        category: 'Tires',
        abcClass: 'A',
        reorderPoint: 20,
        lastCountDate: '2023-11-10',
        status: 'In Stock',
        value: 18900
    }
];

const MOCK_TRANSACTIONS: InventoryTransaction[] = [
    {
        id: 'TX-001',
        itemId: '1',
        type: 'Inbound',
        quantity: 50,
        date: '2023-11-01T10:00:00Z',
        reference: 'PO-1001',
        performedBy: 'John Doe'
    },
    {
        id: 'TX-002',
        itemId: '1',
        type: 'Outbound',
        quantity: 10,
        date: '2023-11-05T14:30:00Z',
        reference: 'WO-5002',
        performedBy: 'Jane Smith'
    },
    {
        id: 'TX-003',
        itemId: '2',
        type: 'Outbound',
        quantity: 5,
        date: '2023-11-22T09:15:00Z',
        reference: 'WO-5023',
        performedBy: 'Mike Johnson'
    }
];

export const inventoryService = {
    getInventoryItems: async (): Promise<InventoryItem[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_INVENTORY), 800);
        });
    },

    getInventoryItem: async (id: string): Promise<InventoryItem | undefined> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_INVENTORY.find(i => i.id === id)), 500);
        });
    },

    getTransactions: async (itemId: string): Promise<InventoryTransaction[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_TRANSACTIONS.filter(t => t.itemId === itemId)), 600);
        });
    },

    getStats: async (): Promise<InventoryStats> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({
                totalItems: MOCK_INVENTORY.length,
                totalValue: MOCK_INVENTORY.reduce((acc, item) => acc + item.value, 0),
                lowStockCount: MOCK_INVENTORY.filter(i => i.status === 'Low Stock' || i.status === 'Out of Stock').length,
                accuracy: 98.5
            }), 600);
        });
    }
};
