import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InvoiceState {
    value: number
}

const initialState: InvoiceState = {
    value: 0,
}

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = invoiceSlice.actions

export default invoiceSlice.reducer