export type ABCClass = 'A' | 'B' | 'C';
export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface InventoryItem {
    id: string;
    sku: string;
    name: string;
    description: string;
    quantity: number;
    unit: string;
    location: string;
    category: string;
    abcClass: ABCClass;
    reorderPoint: number;
    lastCountDate: string;
    status: StockStatus;
    value: number;
}

export interface InventoryTransaction {
    id: string;
    itemId: string;
    type: 'Inbound' | 'Outbound' | 'Adjustment';
    quantity: number;
    date: string;
    reference: string;
    performedBy: string;
}

export interface InventoryStats {
    totalItems: number;
    totalValue: number;
    lowStockCount: number;
    accuracy: number;
}
