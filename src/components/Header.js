import React from "react";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">Student Hub App</h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </header>
  );
}
