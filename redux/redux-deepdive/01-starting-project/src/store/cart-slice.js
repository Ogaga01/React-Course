import { createSlice } from "@reduxjs/toolkit";
import { interfaceActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => {
        return item.id === id;
      });
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== id;
        });
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

 export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      interfaceActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-33284-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response) {
        throw new Error("Could not send data to cart");
      }
    };

    try {
      await sendRequest();

      dispatch(
        interfaceActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      sendCartData().catch((error) => {
        dispatch(
          interfaceActions.showNotification({
            status: "Error",
            title: "Error",
            message: "Could not send data to cart",
          })
        );
      });
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
