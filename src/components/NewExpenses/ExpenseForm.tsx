import React from "react";

import "./ExpenseForm.css";

export default function ExpenseForm() {
  const addYearsToDate = (date: Date, years: number) => {
    let new_date = new Date(date);

    new_date.setFullYear(new_date.getFullYear() + years);

    return new_date;
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="newExpenseForm">Title</label>
          <input type="text" name="newExpenseForm" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="newExpenseAmount">Amount</label>
          <input type="number" min="0.01" step="0.01" name="newExpenseAmount" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="newExpenseDate">Date</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            max={addYearsToDate(new Date(), 5).toISOString().split("T")[0]}
            name="newExpenseDate"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
