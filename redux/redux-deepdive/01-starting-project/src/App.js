import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { interfaceActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true

function App() {
  const dispatch = useDispatch()
    const showCart = useSelector((state) => {
      return state.uISlice.isShown;
    });
  
  const cart = useSelector((state) => { return state.cartSlice })

  const notification = useSelector((state)=>{return state.uISlice.notification})
  
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(interfaceActions.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Sending cart data'
      }))
          const response = await fetch(
            "https://react-http-33284-default-rtdb.firebaseio.com/cart.json",
            { method: "PUT", body: JSON.stringify(cart) }
          );
      if (!response) {
        throw new Error('Could not send data to cart')
      }
      
      dispatch(interfaceActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data successfully'
      }))
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch((error) => {
      dispatch(
        interfaceActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Could not send data to cart",
        })
      );
    })
  }, [cart, dispatch])

  return (
    <>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
