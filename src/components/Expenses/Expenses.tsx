import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Global/Card";
import "./Expenses.css";

const Expenses: React.FC<{
  expenses: { title: string; amount: number; date: Date }[];
}> = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
};

export default Expenses;
