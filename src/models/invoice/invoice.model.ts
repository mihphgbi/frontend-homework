import {TableColumnsType} from "antd";

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
    invoiceDate?: string;
    dueDate?: string;
    payment?: string;
    contractor?: string;
    format?: string;
    createDate?: string;
    updateDate?: string;
    bankAccount?: string;
    prepare?: string;
    documentType?: string;
    itemInvoice?: Array<ItemInvoiceModel>
}

export const columns: TableColumnsType<ItemInvoiceModel> = [
    {
        title: 'Details',
        dataIndex: 'name',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Rate',
        dataIndex: 'unit',
    }, {
        title: 'Price',
        dataIndex: 'unitPrice',
    }, {
        title: 'Amount',
        dataIndex: 'calculatedPrice',
        render: (_, record) => (
            record.unitPrice * record.quantity
        )
    }
];