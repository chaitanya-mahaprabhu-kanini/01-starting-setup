import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [pop, setPop] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const popInvert = () => {
        if(enteredTitle !== "" || enteredAmount != "" || enteredDate != "")
        {
            setEnteredAmount("");
            setEnteredDate("");
            setEnteredTitle("");
        }
        setPop(prev => !prev);
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };

    const form = <form onSubmit = {submitHandler}>
    <div className = 'new-expense__controls'>
        <div className = 'new-expense__control'>
            <label>Title</label>
            <input type = "text" onChange = {titleChangeHandler} value = {enteredTitle}/>
        </div>
        <div className = 'new-expense__control'>
            <label>Amount</label>
            <input type = "number" min = "0.01" step = "0.01" onChange = {amountChangeHandler} value = {enteredAmount}/>
        </div>
        <div className = 'new-expense__control'>
            <label>Date</label>
            <input type = "date" min = "2019-01-01" max = "2022-12-31" onChange = {dateChangeHandler} value = {enteredDate}/>
        </div>
    </div>
    <div id = "buttons">
    <div className = "new-expense__actions">
        <button onClick = {popInvert}>Cancel</button>
    </div>
    <div className = "new-expense__actions">
        <button type = "submit">Add Expense</button>
    </div>
    </div>

</form>;

const add = <form><button onClick = {popInvert}>Add New Expense</button></form>;

    return(
        <div>
        {pop === true ? form : add}
        </div>
    );
}

export {ExpenseForm};