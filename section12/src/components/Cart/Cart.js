import styled from 'styled-components';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const StyledCart = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;

  & .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  & .actions {
    text-align: right;
  }
`;

const CartButton = styled.button`
  font: inherit;
  cursor: pointer;
  color: ${(props) => (props.$alt ? '#8a2b06' : 'white')};
  background-color: ${(props) => (props.$alt ? 'transparent' : '#8a2b06')};
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

function Cart({ onHideCart }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (item) => {
    if (item.amount > 1) {
      cartCtx.addItem({ ...item, amount: -1 });
    } else {
      cartCtx.removeItem(item.id);
    }
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onHideCart}>
      <StyledCart>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="actions">
          <CartButton $alt onClick={onHideCart}>
            Close
          </CartButton>
          {cartCtx.items.length > 0 && <CartButton>Order</CartButton>}
        </div>
      </StyledCart>
    </Modal>
  );
}

export default Cart;
