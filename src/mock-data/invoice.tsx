import {InvoiceModel, ItemInvoiceModel} from "../models/invoice/invoice.model";

export const CONTRACTOR_LIST = [
    {value: 'test1', label: 'Test1'},
    {value: 'test2', label: 'Test2'},
    {value: 'test3', label: 'Test3'}
];

export const PREPARE_OPTION = [
    {value: 'enabled', label: 'Enabled'},
    {value: 'disabled', label: 'Disabled'},
];

export const BANK_ACCOUNT_OPTION = [
    {value: 'account1', label: 'Account1'},
    {value: 'account2', label: 'Account2'},
    {value: 'account3', label: 'Account3'},
    {value: 'account4', label: 'Account4'},
];

export const PAYMENT_METHOD_LIST = [
    {value: 'payment1', label: 'Payment1'},
    {value: 'payment2', label: 'Payment2'},
    {value: 'payment3', label: 'Payment3'},
    {value: 'payment4', label: 'Payment4'},
    {value: 'payment5', label: 'Payment5'},
    {value: 'payment6', label: 'Payment6'},
];

export const FORMAT_LIST = [
    {value: 'format1', label: 'Format1'},
    {value: 'format2', label: 'Format2'},
    {value: 'format3', label: 'Format3'},
    {value: 'format4', label: 'Format4'},
];

export const DOCUMENT_TYPE_LIST = [
    {value: 'type1', label: 'Type1'},
    {value: 'type2', label: 'Type2'},
    {value: 'type3', label: 'Type3'},
    {value: 'type4', label: 'Type4'},
]

export const invoiceList: InvoiceModel[] = [
    {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    }, {
        id: '000001',
        name: 'test invoice 000001',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'paid',
        vat: true
    },
    {
        id: '000002',
        name: 'test invoice 000002',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'unpaid',
        vat: true
    },
    {
        id: '000003',
        name: 'test invoice 000003',
        invoiceDate: new Date(),
        dueDate: new Date(),
        payment: 'payment1',
        contractor: 'test1',
        bankAccount: 'account2',
        documentType: 'type1',
        status: 'expired',
        vat: false
    },
]

export const invoiceItemList : ItemInvoiceModel[] = [
    {   id: 'item 000003',
        name: 'invoice item 0003',
        quantity: 10,
        unit: 'pieces',
        unitPrice: 3000,
        calculatedPrice: 30000,
        createdDate: new Date(),
        updatedDate: new Date(),
    },
    {   id: 'item 000003',
        name: 'invoice item 0003',
        quantity: 10,
        unit: 'pieces',
        unitPrice: 3000,
        calculatedPrice: 30000,
        createdDate: new Date(),
        updatedDate: new Date(),
    },
    {   id: 'item 000003',
        name: 'invoice item 0003',
        quantity: 10,
        unit: 'pieces',
        unitPrice: 3000,
        calculatedPrice: 30000,
        createdDate: new Date(),
        updatedDate: new Date(),
    },
]

export const invoiceDetails: InvoiceModel = {
    id: '000003',
    name: 'test invoice 000003',
    payment: 'payment1',
    contractor: 'test1',
    bankAccount: 'account2',
    documentType: 'type1',
    status: 'expired',
    vat: false,
    dueDate: new Date(),
    invoiceDate: new Date(),
    createdDate: new Date(),
    updatedDate: new Date(),
    format: 'format',
    prepared: 'prepared',
    itemInvoice: invoiceItemList
}