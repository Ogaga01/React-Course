import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <div>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
