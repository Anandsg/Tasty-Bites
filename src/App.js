import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvier from "./store/CartProvider";

function App(props) {
  const [CartShow, setCartShow] = useState(false);

  const ShowCartHanlder = () => {
    setCartShow(true);
  }

  const HideCartHandler = () => {
    setCartShow(false)
  }

  return (
    <CartProvier>
      {/* onClose is passed to the Cart component since that component is handling cancel button */}
      {CartShow && <Cart onClose={HideCartHandler} />}
      {/* onShowCart passed as a prop to the header component */}
      <Header onShowCart={ShowCartHanlder} />
      <main>
        <Meals />
      </main>
    </CartProvier>
  );
}

export default App;
