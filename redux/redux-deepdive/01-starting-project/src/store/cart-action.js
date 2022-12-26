import { cartActions } from "./cart-slice";
import { interfaceActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
              "https://react-http-33284-default-rtdb.firebaseio.com/cart.json"
            );

            if (!response) {
        throw new Error("Could not get cart data");
      }
            const data = response.json()
            console.log(data)
            return data
        }
        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart(cartData))
        } catch (error) {
            dispatch(
              interfaceActions.showNotification({
                status: "Error",
                title: "Error",
                message: "Could not fetch data to cart",
              })
            );
        }
    }
}

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
