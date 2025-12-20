export type SupplierStatus = 'Active' | 'Probation' | 'Inactive' | 'Suspended';
export type RequisitionStatus = 'Pending' | 'Approved' | 'Rejected' | 'Ordered';
export type ContractStatus = 'Active' | 'Expired' | 'Terminated';

export interface Supplier {
    id: string;
    name: string;
    category: string;
    contactName: string;
    email: string;
    phone: string;
    status: SupplierStatus;
    performanceScore: number;
    spendYTD: number;
}

export interface RequisitionItem {
    description: string;
    quantity: number;
    unitPrice: number;
}

export interface Requisition {
    id: string;
    title: string;
    requester: string;
    department: string;
    date: string;
    amount: number;
    status: RequisitionStatus;
    supplierId: string;
    items: RequisitionItem[];
}

export interface Contract {
    id: string;
    title: string;
    supplierId: string;
    startDate: string;
    endDate: string;
    value: number;
    status: ContractStatus;
    terms: string;
}

export interface ProcurementStats {
    activeRequisitions: number;
    pendingApprovals: number;
    totalSpendYTD: number;
    activeContracts: number;
}
