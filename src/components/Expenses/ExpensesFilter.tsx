import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter: React.FC<{
  onFilterChange: (datefilter: string) => void;
  value?: string;
  minYear?: number;
  maxYear?: number;
}> = (props) => {
  const years =
    props.minYear !== undefined && props.maxYear !== undefined
      ? Array.from(Array(props.maxYear - props.minYear + 1).keys()).map(
          (i) => i + props.minYear!
        )
      : [2021, 2022, 2023, 2024, 2025, 2026, 2027];

  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.value} onChange={filterChangeHandler}>
          {years.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
