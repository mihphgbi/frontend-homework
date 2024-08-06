import {createSlice} from '@reduxjs/toolkit'
import {createInvoiceItem, getInvoiceDetails, getInvoiceList} from "../actions/invoice/invoice.action";
import {InvoiceModel} from "../../models/invoice/invoice.model";

export interface InvoiceState {
    value: number,
    status: 'loading' | 'succeeded' | 'failed' | '',
    invoiceList: Array<InvoiceModel>,
    totalPage: number,
    itemPerPage: number,
    pageSize: number,
    createSucceeded: boolean,
    invoiceDetails: object,
}

const initialState: InvoiceState = {
    value: 0,
    status: '',
    invoiceList: [],
    totalPage: 1,
    itemPerPage: 1,
    pageSize: 1,
    createSucceeded: false,
    invoiceDetails: {}
}

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        clearStatus: (state) => {
            state.status = ''
        },
    },
    extraReducers: builder => {
        builder
            .addCase(createInvoiceItem.pending, (state: any, action) => {
                state.status = 'loading'
            })
            .addCase(createInvoiceItem.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
                state.createSucceeded = !state.createSucceeded
            })
            .addCase(createInvoiceItem.rejected, (state: any, action) => {
                state.status = 'failed'
            })
            .addCase(getInvoiceList.pending, (state: any, action) => {
                state.status = 'loading'
            })
            .addCase(getInvoiceList.fulfilled, (state: any, action:any) => {
                state.status = 'succeeded'
                state.invoiceList = action.payload.invoiceList
                state.totalPage = action.payload.totalPage
                state.itemPerPage = action.payload.itemPerPage
                state.pageSize = action.payload.pageSize
            })
            .addCase(getInvoiceList.rejected, (state: any, action) => {
                state.status = 'failed'
            })
            .addCase(getInvoiceDetails.pending, (state: any, action) => {
                state.status = 'loading'
            })
            .addCase(getInvoiceDetails.fulfilled, (state: any, action:any) => {
                state.status = 'succeeded'
                state.invoiceDetails = action.payload

            })
            .addCase(getInvoiceDetails.rejected, (state: any, action) => {
                state.status = 'failed'
            })
    }
})
export const {clearStatus} = invoiceSlice.actions

export default invoiceSlice.reducer


