import React, { memo } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <Card className='expenses'>
      {items.map((item) => {
        return (
          <ExpenseItem
            key={item.title}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
