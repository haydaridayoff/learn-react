import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Global/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses: React.FC<{
  expenses: { title: string; amount: number; date: Date }[];
}> = (props) => {
  const filterChangeHandler = (selectedYear: string) => {
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
};

export default Expenses;
