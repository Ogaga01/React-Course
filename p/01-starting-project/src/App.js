import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [closeCart, setCloseCart] = useState(false)

  const showCartHandler = () => {
    setCloseCart(true)
  }

  const hideCartHandler = () => {
    setCloseCart(false)
  }

  return (
    <CartProvider>
      {closeCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
