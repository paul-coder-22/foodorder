import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';

const App = () => {
  const [cartShown, setCartShow] = useState(false)

  const showCardHandler = () => {
    setCartShow(true)
  }
  const hideCardHandler = () => {
    setCartShow(false)
  }

  return (
    <React.Fragment>

      {/* The modal */}
      {cartShown && <Cart onClose={hideCardHandler} />}
      <Header isOpen={showCardHandler} isClose={hideCardHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;