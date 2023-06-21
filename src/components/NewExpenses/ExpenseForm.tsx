import React, { useState } from "react";

import "./ExpenseForm.css";
import ExpenseData from "../Model/ExpenseData";

interface Props {
  onSaveExpenseData: (expenseData: ExpenseData) => void;
  onCancel?: () => void;
}

const ExpenseForm: React.FC<Props> = (props) => {
  const addYearsToDate = (date: Date, years: number) => {
    let new_date = new Date(date);

    new_date.setFullYear(new_date.getFullYear() + years);

    return new_date;
  };

  const [enteredExpenseFormInput, setEnteredExpenseFormInput] =
    useState<ExpenseData>({
      title: "",
      amount: 0,
      date: new Date(),
    });

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setEnteredExpenseFormInput((prevState) => {
      //In the future, don't set the key to the value of the input
      let newState: any = event.target.value;
      switch (key) {
        case "amount":
          newState = parseFloat(newState);
          break;
        case "date":
          newState = new Date(newState);
          break;
        default:
          break;
      }
      return {
        ...prevState,
        [key]: newState,
      };
    });
    console.log(enteredExpenseFormInput);
  };

  function submitHandler(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const expenseData: ExpenseData = {
      ...enteredExpenseFormInput,
    };
    console.log("expenseData from ExpenseForm.tsx: \n" + expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredExpenseFormInput({
      title: "",
      amount: 0,
      date: new Date(),
    });
  }

  const cancelFormHandler = () => {
    setEnteredExpenseFormInput({
      title: "",
      amount: 0,
      date: new Date(),
    });
    if (props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="newExpenseForm">Title</label>
          <input
            type="text"
            id="newExpenseForm"
            value={enteredExpenseFormInput.title}
            onChange={(event) => inputChangeHandler(event, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="newExpenseAmount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredExpenseFormInput.amount}
            id="newExpenseAmount"
            onChange={(event) => inputChangeHandler(event, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="newExpenseDate">Date</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            max={addYearsToDate(new Date(), 5).toISOString().split("T")[0]}
            value={enteredExpenseFormInput.date.toISOString().split("T")[0]}
            id="newExpenseDate"
            onChange={(event) => inputChangeHandler(event, "date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelFormHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
