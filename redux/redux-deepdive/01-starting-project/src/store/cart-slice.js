import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
          state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
      removeFromCart(state, action) {
          const id = action.payload
          const existingItem = state.items.find((item) => { return item.id === id })
          if (existingItem.quantity === 1) {
              state.items.filter((item)=>{return item.id !== id})
          } else {
              existingItem.quantity--
              existingItem.totalPrice = existingItem.totalPrice - existingItem.price
          }
    },
  },
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer
