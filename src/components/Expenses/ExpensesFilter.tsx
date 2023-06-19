import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter: React.FC<{
  onFilterChange: (datefilter: string) => void;
}> = (props) => {
  const [dateFilter, setDateFilter] = useState("2023");

  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDateFilter(event.target.value);
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={dateFilter} onChange={filterChangeHandler}>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
