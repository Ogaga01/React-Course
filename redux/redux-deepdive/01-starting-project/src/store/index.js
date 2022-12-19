import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from './ui-slice'

const store = configureStore({
  reducer: { uISlice: interfaceReducer },
});

export default store