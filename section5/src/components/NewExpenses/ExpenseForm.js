import { useState } from "react";
import "./ExpenseForm.css";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);
  const handler = (e) => setInputValue(e.target.value);

  return [inputValue, setInputValue, handler];
}

function ExpenseForm({ onAddExpenseData }) {
  const [titleValue, setTitleValue, titleHandler] = useInput("");
  const [amountValue, setAmountValuel, amountHandler] = useInput("");
  const [dateValue, setDateValue, dateHandler] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      id: Date.now(),
      title: titleValue,
      amount: amountValue,
      date: new Date(dateValue),
    };

    // to parent component
    onAddExpenseData(formData);

    setTitleValue("");
    setAmountValuel("");
    setDateValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={titleValue} onChange={titleHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amountValue}
            onChange={amountHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            step='2022-12-31'
            value={dateValue}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
