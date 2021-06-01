import React from "react";
import "Styles/Home/HomeThemeButton.css";

export default function HomeThemeButton({ theme, handleChangeTheme }) {
  return (
    <button
      className={`home-theme-button bg-secondary-${theme} text-secondary-${theme}`}
      onClick={handleChangeTheme}
    >
      Change Theme
    </button>
  );
}
