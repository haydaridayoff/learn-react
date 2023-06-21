import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Global/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseData from "../Model/ExpenseData";
import ExpensesChart from "./ExpensesChart";

const Expenses: React.FC<{
  expenses: ExpenseData[];
}> = (props) => {
  const defaultYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState<string>(defaultYear);

  const filterChangeHandler = (selectedYear: string) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expenseItem) => {
    return expenseItem.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        value={selectedYear}
        minYear={2019}
        maxYear={2028}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map((expenseItem) => (
        <ExpenseItem key={expenseItem.id!} expense={expenseItem} />
      ))}
    </Card>
  );
};

export default Expenses;
