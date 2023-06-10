import { ExpenseItem } from "./ExpenseItem";
import { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
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
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      {filteredList.length === 0 ? (
        <code style = {{color:'white', fontSize:'2rem',paddingLeft: '1rem'}}>No expenses found!</code>
      ) : (
        filteredList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export { Expenses };
