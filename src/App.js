import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cartprovider from './store/Cartprovider';

const App = () => {
  const [cartShown, setCartShow] = useState(false)

  const showCardHandler = () => {
    setCartShow(true)
  }
  const hideCardHandler = () => {
    setCartShow(false)
  }

  return (
    <Cartprovider>
      {/* The modal */}
      {cartShown && <Cart onClose={hideCardHandler} />}
      <Header isOpen={showCardHandler} />
      <main>
        <Meals />
      </main>
    </Cartprovider>
  )
};

export default App;