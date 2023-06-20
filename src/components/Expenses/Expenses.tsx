import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Global/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseData from "../Model/ExpenseData";

const Expenses: React.FC<{
  expenses: ExpenseData[];
}> = (props) => {
  const defaultYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState<string>(defaultYear);

  const filterChangeHandler = (selectedYear: string) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        value={selectedYear}
        minYear={2019}
        maxYear={2028}
      />
      {props.expenses.map((expenseItem) => {
        if (expenseItem.date.getFullYear().toString() === selectedYear) {
          return <ExpenseItem key={expenseItem.id!} expense={expenseItem} />;
        }
      })}
    </Card>
  );
};

export default Expenses;
