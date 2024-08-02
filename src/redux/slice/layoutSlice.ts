import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LayoutState {
    activeItemMenu: string
}

const initialState: LayoutState = {
    activeItemMenu: '',
}

export const layoutSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        activeMenu: (state, action: PayloadAction<string>) => {
            state.activeItemMenu = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {activeMenu} = layoutSlice.actions

export default layoutSlice.reducer