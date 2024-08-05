export interface ItemInvoiceModel {
    id: string | number;
    name: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    calculatedPrice?: number;
    createdDate?: string;
    updatedDate?: string;
}

export interface InvoiceModel {
    id: string | number;
    name: string;
    contractor?: string;
    payment?: string;
    format?: string;
    bankAccount?: string;
    prepared?: string;
    documentType?: string;
    vat?: boolean;
    status?: 'paid' | 'unpaid' | 'expired'
    invoiceDate?: Date;
    dueDate?: Date;
    createdDate?: Date;
    updatedDate?: Date;
    itemInvoice?: Array<ItemInvoiceModel>
}

export const initInvoiceData: InvoiceModel = {
    id: '',
    name: '',
    payment: '',
    contractor: '',
    format: '',
    bankAccount: '',
    prepared: '',
    documentType: '',
    vat: false,
    status: 'unpaid',
    dueDate: new Date(),
    createdDate: new Date(),
    updatedDate: new Date(),
    invoiceDate: new Date(),
}

