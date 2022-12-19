import { createSlice } from "@reduxjs/toolkit"

const interfaceInitState = {
    isShown: false
}

const interfaceSlice = createSlice({
    name: 'UISlice',
    initialState: interfaceInitState,
    reducers: {
        toggleCart(state) {
            state.isShown = !state.isShown
        },
        
    }
})

export const interfaceActions = interfaceSlice.actions

export default interfaceSlice.reducer