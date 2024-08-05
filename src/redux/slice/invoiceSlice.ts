import {createSlice} from '@reduxjs/toolkit'
import {createInvoiceItem, getInvoiceList} from "../actions/invoice/invoice.action";
import {InvoiceModel} from "../../models/invoice/invoice.model";

export interface InvoiceState {
    value: number,
    status: 'loading' | 'succeeded' | 'failed' | '',
    invoiceList: Array<InvoiceModel>,
    totalPage: number,
    itemPerPage: number,
    pageSize: number
}

const initialState: InvoiceState = {
    value: 0,
    status: '',
    invoiceList: [],
    totalPage: 1,
    itemPerPage: 1,
    pageSize: 1
}

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },
    },
    extraReducers: builder => {
        builder
            .addCase(createInvoiceItem.pending, (state: any, action) => {
                state.status = 'loading'
            })
            .addCase(createInvoiceItem.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
            })
            .addCase(createInvoiceItem.rejected, (state: any, action) => {
                state.status = 'failed'
            })
            .addCase(getInvoiceList.pending, (state: any, action) => {
                state.status = 'loading'
            })
            .addCase(getInvoiceList.fulfilled, (state: any, action) => {
                state.status = 'succeeded'
                state.invoiceList = action.payload.invoiceList
                state.totalPage = action.payload.totalPage
                state.itemPerPage = action.payload.itemPerPage
                state.pageSize = action.payload.pageSize
            })
            .addCase(getInvoiceList.rejected, (state: any, action) => {
                state.status = 'failed'
            })
    }
})

export default invoiceSlice.reducer


