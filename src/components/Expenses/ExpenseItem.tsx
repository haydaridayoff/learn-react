import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Global/Card";

export default function ExpenseItem(props: {
  expense: { title: string; amount: number; date: Date };
}) {
  const [title, setTitle] = useState(props.expense.title);

  const onClickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
}
