import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate = new Date(2023, 5, 15); 
    const expenseTitle = 'Bike';
    const expenseAmount = 234000.56;

    return (<div className = 'expense-item'>
            <div>{expenseDate}</div>
            <div className = 'expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className = 'expense-item__price'>{expenseAmount}</div>
            </div>
           </div>);
}


export {ExpenseItem};