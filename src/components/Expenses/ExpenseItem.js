import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import {Card} from "../UI/Card";
import {useState} from "react";

const ExpenseItem = (props) => {
  const expenseDate = props.date;
  const expenseAmount = props.amount;

  const [title, setTitle] = useState(props.title);

  const clickHandler = ()  => {
    setTitle('Updated bruv!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <button onClick = {clickHandler}>Click Me!</button>
    </Card>
  );
}

export { ExpenseItem };
