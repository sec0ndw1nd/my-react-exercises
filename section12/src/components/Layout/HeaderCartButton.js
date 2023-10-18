import styled from 'styled-components';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const StyledButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  & .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  & .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

function HeaderCartButton({ onClick }) {
  const [isButtonBump, setIsButtonBump] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;

    setIsButtonBump(true);

    const timer = setTimeout(() => setIsButtonBump(false), 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <StyledButton className={`${isButtonBump && 'bump'}`} onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </StyledButton>
  );
}

export default HeaderCartButton;
