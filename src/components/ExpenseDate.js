import './ExpenseDate.css'
function ExpenseDate(props) {
    const expenseDate = props.date;
    const expenseMonth = expenseDate.toLocaleString("en-US", { month: "long" });
    const expenseYear = expenseDate.getFullYear();
    const expenseDay = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className = "expense-date">
      <div className = "expense-date__month">{expenseMonth}</div>
      <div className = "expense-date__year">{expenseYear}</div>
      <div className = "expense-date__day">{expenseDay}</div>
    </div>
  );
}

export { ExpenseDate };
