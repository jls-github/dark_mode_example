import { ThemeContext } from "Contexts/ThemeContext";
import React, { useContext } from "react";
import "Styles/Navbar/Navbar.css";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-${theme}`}>
      <p className={`navbar-text navbar-text-${theme}`}>Themed App</p>
    </nav>
  );
}
