import styled from 'styled-components';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const StyledForm = styled.form`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  & button:hover,
  & button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

function MealItemForm({ id, onAddToCart }) {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;

    // entered invalid amount
    if (!enteredAmount.trim().length || +enteredAmount < 1 || +enteredAmount > 5) {
      setIsAmountValid(false);
      return;
    }

    setIsAmountValid(true);
    onAddToCart(+enteredAmount);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
    </StyledForm>
  );
}

export default MealItemForm;
