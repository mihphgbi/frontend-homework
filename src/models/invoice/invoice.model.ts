import React from "react";

export interface ItemInvoiceModel {
    key: React.Key;
    name: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    calculatedPrice?: number;
    createdDate?: string;
    updatedDate?: string;
}

export interface InvoiceModel {
    id: string,
    name: string,
    invoiceDate: string,
    dueDate: string,
    payment: string,
    contractor: string,
    format: string,
    createDate: string,
    updateDate: string,
    itemInvoice?: Array<ItemInvoiceModel>
}