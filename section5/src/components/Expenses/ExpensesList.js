import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ items }) {
  if (!items.length) {
    return <h2 className="expenses-list__fallback">Woops! No data by filtered..</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.title}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
