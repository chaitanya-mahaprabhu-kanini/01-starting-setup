import { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";

const Expenses = (props) => {
  const [filteredList, setFilteredList] = useState(
    props.items.filter((value) => value.date.getFullYear() === 2020)
  );
  const filterChangeHandler = (selectedYear) => {
    if (selectedYear == -1) setFilteredList(props.items);
    else
      setFilteredList(
        props.items.filter(
          (value) => value.date.getFullYear() === parseInt(selectedYear, 10)
        )
      );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        <ExpensesList items={filteredList} />
      </Card>
    </div>
  );
};

export { Expenses };
