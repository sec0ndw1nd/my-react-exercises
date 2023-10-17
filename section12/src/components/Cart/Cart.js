import styled from 'styled-components';
import Modal from '../UI/Modal';

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
  const dummyCartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <Modal onClose={onHideCart}>
      <StyledCart>
        {dummyCartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className="actions">
          <CartButton $alt onClick={onHideCart}>
            Close
          </CartButton>
          <CartButton>Order</CartButton>
        </div>
      </StyledCart>
    </Modal>
  );
}

export default Cart;
