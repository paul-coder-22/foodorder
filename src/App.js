import React from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;