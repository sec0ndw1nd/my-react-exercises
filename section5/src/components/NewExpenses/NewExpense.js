import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpenseData }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div className="new-expense">
      {isOpen ? (
        <ExpenseForm onAddExpenseData={onAddExpenseData} onClose={close} />
      ) : (
        <button onClick={open}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
