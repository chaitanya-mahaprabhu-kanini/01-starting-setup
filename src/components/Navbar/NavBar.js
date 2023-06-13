import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Expense Tracker</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export { NavBar };
