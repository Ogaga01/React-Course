import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [closeCart, setCloseCart] = useState(false)

  const showCartHandler = () => {
    setCloseCart(true)
  }

  const hideCartHandler = () => {
    setCloseCart(false)
  }

  return (
    <div>
      {closeCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
