import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import ExpenseData from "./components/Model/ExpenseData";

const DUMMY_EXPENSES: ExpenseData[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 3, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2025, 2, 28),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 1, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2026, 0, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseItems: ExpenseData) => {
    setExpenses((prevState) => {
      return [expenseItems, ...prevState];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
