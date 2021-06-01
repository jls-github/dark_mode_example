import React from "react";
// You will often see primary css files called index.css
// I have decided to be more explicit in my naming for this example
import "Styles/Home/Home.css";

export default function HomeWrapper({ children, theme }) {

  return (
    <div className={`home bg-primary-${theme}`}>
      {children}
    </div>
  );
}
