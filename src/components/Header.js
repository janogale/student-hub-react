import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">Student Hub App</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>{" "}
        </li>
      </ul>
    </header>
  );
}
