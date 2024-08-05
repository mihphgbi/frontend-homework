import {createAsyncThunk} from "@reduxjs/toolkit";
import {openErrorAlert, openSuccessAlert} from "../../slice/layoutSlice";
import {mockApiCall} from "../../../mock-data/response-api";
import {invoiceList} from "../../../mock-data/invoice";

export const createInvoiceItem = createAsyncThunk('invoice/createInvoice',
    async (values: any, {dispatch, rejectWithValue}) => {
        try {
            const response: any = await mockApiCall(values, 202, 'OK');
            await dispatch(openSuccessAlert({isOpenAlert: true, msgAlert: 'Sent successfully!'}))
            return response.data
        } catch (error: any) {
            await dispatch(openErrorAlert({isOpenAlert: true, msgAlert: 'Failed to send!'}));
            return rejectWithValue(error.message || 'Failed to create invoice');
        }
    }
)

export const updateInvoiceItem = createAsyncThunk('invoice/updateInvoice',
    async (values: any, {dispatch, rejectWithValue}) => {
        try {
            const {id, data} = values;
            const response: any = await mockApiCall(data, 202, 'OK');
            await dispatch(openSuccessAlert({isOpenAlert: true, msgAlert: 'Sent successfully!'}))
            return response.data
        } catch (error: any) {
            await dispatch(openErrorAlert({isOpenAlert: true, msgAlert: 'Failed to send!'}));
            return rejectWithValue(error.message || 'Failed to update invoice');
        }
    }
)

export const getInvoiceList = createAsyncThunk('invoice/getInvoiceList',
    async (userId: any, {dispatch, rejectWithValue}) => {
        try {
            const data = {
                invoiceList: invoiceList,
                pageSize: 1,
                totalPage: 1,
                itemPerPage: 10,
            }
            const response: any = await mockApiCall(data, 200, 'OK');
            return response.data.values
        } catch (error: any) {
            await dispatch(openSuccessAlert({isOpenAlert: true, msgAlert: 'Failed to send!'}));
            return rejectWithValue(error.message || 'Failed to get invoice');
        }
    }
)