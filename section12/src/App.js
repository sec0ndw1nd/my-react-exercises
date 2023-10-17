import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const showCartHandler = () => setIsOpenCart(true);
  const hideCartHandler = () => setIsOpenCart(false);

  return (
    <>
      {isOpenCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
