import React from "react";
import "Styles/Navbar/Navbar.css";

export default function Navbar({ theme }) {
  return (
    <nav className={`navbar navbar-${theme}`}>
      <p className={`navbar-text navbar-text-${theme}`}>Themed App</p>
    </nav>
  );
}
