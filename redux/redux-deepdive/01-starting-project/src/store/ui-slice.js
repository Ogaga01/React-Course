import { createSlice } from "@reduxjs/toolkit"

const interfaceInitState = {
    isShown: false,
    notification: null
}

const interfaceSlice = createSlice({
    name: 'UISlice',
    initialState: interfaceInitState,
    reducers: {
        toggleCart(state) {
            state.isShown = !state.isShown
        },
        showNotification(state, action) {
            state.notification = {status: action.payload.status, title: action.payload.title, message: action.payload.message}
        }
    }
})

export const interfaceActions = interfaceSlice.actions

export default interfaceSlice.reducer