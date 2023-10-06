import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpenseData }) {
  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpenseData={onAddExpenseData} />
    </div>
  );
}

export default NewExpense;
