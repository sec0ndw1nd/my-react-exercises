import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import baseUrl from '../../api/config/config';

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitDone, setIsSubmitDone] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderHandler = async (formData) => {
    console.log(formData);
    setIsSubmitting(true);

    // fetching
    await fetch(`${baseUrl}/orders.json`, {
      method: 'POST',
      body: JSON.stringify({
        user: formData,
        orderedItems: cartCtx.items,
      }),
    });

    // done
    setIsSubmitting(false);
    setIsSubmitDone(true);
    cartCtx.clearItem();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={() => setIsOrdering(true)}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering ? (
        <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
      ) : (
        modalActions
      )}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const isSubmitDoneModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !isSubmitDone && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {isSubmitDone && isSubmitDoneModalContent}
    </Modal>
  );
};

export default Cart;
