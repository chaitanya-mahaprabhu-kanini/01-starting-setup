import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import {Card} from "../UI/Card";
import {useState} from "react";

const ExpenseItem = (props) => {
  const expenseDate = props.date;
  const expenseAmount = props.amount;
  const expenseTitle = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </Card>
  );
}

export { ExpenseItem };
