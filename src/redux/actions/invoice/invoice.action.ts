import {createAsyncThunk} from "@reduxjs/toolkit";
import {openErrorAlert, openSuccessAlert} from "../../slice/layoutSlice";
import {mockApiCall} from "../../../mock-data/response-api";
import {invoiceDetails, invoiceList} from "../../../mock-data/invoice";
import {DetailsInvoiceDataModel} from "../../../models/invoice/invoice.model";

export const createInvoiceItem = createAsyncThunk('invoice/createInvoice',
    async (values: any, {dispatch, rejectWithValue}) => {
        try {
            console.log("=====", values)
            const response: any = await mockApiCall(values, 202, 'OK');
            await dispatch(openSuccessAlert({isOpenAlert: true, msgAlert: 'Sent successfully!'}))
            return response.data
        } catch (error: any) {
            await dispatch(openErrorAlert({isOpenAlert: true, msgAlert: 'Failed to send!'}));
            return rejectWithValue(error.message || 'Failed to create invoice');
        }
    }
)

export const getInvoiceList = createAsyncThunk('invoice/getInvoiceList',
    async (param: any, {dispatch, rejectWithValue}) => {
        const {userId, pageSize, itemPerPage} = param
        try {
            const data = {
                invoiceList: invoiceList,
                pageSize: pageSize,
                totalPage: Math.ceil(invoiceList.length / itemPerPage),
                itemPerPage: itemPerPage,
            }
            const response: any = await mockApiCall(data, 200, 'OK');
            return response.data.values
        } catch (error: any) {
            await dispatch(openSuccessAlert({isOpenAlert: true, msgAlert: 'Failed to send!'}));
            return rejectWithValue(error.message || 'Failed to get invoice');
        }
    }
);

export const getInvoiceDetails = createAsyncThunk('invoice/getInvoiceDetails',
    async (param: any, {dispatch, rejectWithValue}) => {
        try {
            const {userId, invoicesID, itemPerPage, pageSize} = param
            const data: DetailsInvoiceDataModel = {
                userId: userId,
                invoicesID: invoicesID,
                invoiceDetails: {
                    detailsData: invoiceDetails,
                    pageSize: pageSize,
                    itemPerPage: itemPerPage,
                    totalPage: 10
                },
            }
            const response: any = await mockApiCall(data, 200, 'OK');
            return response.data.values
        } catch (error: any) {
            await dispatch(openSuccessAlert({isOpenAlert: true, msgAlert: 'Failed to send!'}));
            return rejectWithValue(error.message || 'Failed to get invoice');
        }
    }
)