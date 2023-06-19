import React from "react";

import "./NewExpense.css";
import ExpenseData from "../Model/ExpenseData";
import ExpenseForm from "./ExpenseForm";

const NewExpense: React.FC<{
  onAddExpense: (ExpenseData: ExpenseData) => void;
}> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData: ExpenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 1000).toFixed().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
