import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Global/Card";
import "./Expenses.css";

export default function Expenses(props: {
  expenses: { title: string; amount: number; date: Date }[];
}) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
}
