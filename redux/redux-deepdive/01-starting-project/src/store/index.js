import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from './ui-slice'
import cartReducer from './cart-slice'

const store = configureStore({
  reducer: { uISlice: interfaceReducer, cartSlice: cartReducer },
});

export default store