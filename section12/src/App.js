import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const showCartHandler = () => setIsOpenCart(true);
  const hideCartHandler = () => setIsOpenCart(false);

  return (
    <CartProvider>
      {isOpenCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
