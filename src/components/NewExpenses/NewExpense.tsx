import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseData from "../Model/ExpenseData";
import ExpenseForm from "./ExpenseForm";

interface Props {
  onAddExpense: (expenseData: ExpenseData) => void;
}

const NewExpense: React.FC<Props> = (props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData: ExpenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 1000).toFixed().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  let form = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={cancelHandler}
    />
  );

  if (!isEditing) {
    form = <button onClick={() => setIsEditing(true)}>Add New Expense</button>;
  }

  return <div className="new-expense">{form}</div>;
};

export default NewExpense;
