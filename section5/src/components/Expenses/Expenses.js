import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onFilterChange = (selected) => {
    setFilteredYear(selected);
  };

  const filteredItems = items.filter((item) => item.date.getFullYear() === +filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        items={items}
        onFilterChange={onFilterChange}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
