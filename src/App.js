import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { useState } from "react";
import {Route, Routes} from 'react-router-dom';
import {NavBar} from './components/Navbar/NavBar';
import {About} from './components/Navbar/About';
import {Contact} from './components/Navbar/Contact';
import { NotFound } from "./components/Navbar/NotFound";

const DUMMY_EXPENSES = [
  { id: "e5", title: "Headphones", amount: 89.99, date: new Date(2020, 2, 2) },
  { id: "e6", title: "Groceries", amount: 150.75, date: new Date(2020, 5, 18) },
  {
    id: "e7",
    title: "Movie Tickets",
    amount: 45.5,
    date: new Date(2020, 8, 7),
  },
  {
    id: "e8",
    title: "Gym Membership",
    amount: 29.99,
    date: new Date(2020, 11, 23),
  },
  {
    id: "e9",
    title: "New Smartphone",
    amount: 999.99,
    date: new Date(2021, 2, 15),
  },
  {
    id: "e10",
    title: "Restaurant Dinner",
    amount: 75.25,
    date: new Date(2021, 5, 29),
  },
  {
    id: "e11",
    title: "Vacation Package",
    amount: 1500,
    date: new Date(2021, 8, 5),
  },
  { id: "e12", title: "Books", amount: 120.35, date: new Date(2021, 11, 14) },
  {
    id: "e13",
    title: "New Laptop",
    amount: 1299.99,
    date: new Date(2022, 1, 3),
  },
  {
    id: "e14",
    title: "Fitness Equipment",
    amount: 299.99,
    date: new Date(2022, 4, 8),
  },
  {
    id: "e15",
    title: "Music Concert Tickets",
    amount: 150,
    date: new Date(2022, 7, 22),
  },
  { id: "e16", title: "Home Decor", amount: 250, date: new Date(2022, 10, 6) },
  {
    id: "e17",
    title: "Pet Supplies",
    amount: 49.99,
    date: new Date(2023, 0, 17),
  },
  { id: "e18", title: "Gifts", amount: 200, date: new Date(2023, 3, 1) },
  {
    id: "e19",
    title: "New Bicycle",
    amount: 599.99,
    date: new Date(2023, 5, 9),
  },
  {
    id: "e20",
    title: "Electronics",
    amount: 899.99,
    date: new Date(2023, 8, 3),
  },
];

const Tracker = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return(
  <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

const App = () => {
  const router_logic = 
    <Routes>
    <Route path = "/about" element = {<About/>}>About</Route>
    <Route path = "/" element = {<Tracker/>}>ExpenseTracker</Route>
    <Route path = "/contact" element = {<Contact/>}>Contact</Route>
    <Route path = "*" element = {<NotFound/>}/>
    </Routes>
  ;
  
  return (
    <div>
    <NavBar />
    {router_logic}
    </div>
  );
};

export default App;
