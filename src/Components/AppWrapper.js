import React, { useContext } from "react";
import { ThemeContext } from "Contexts/ThemeContext";

export default function AppWrapper({ children }) {
  const { theme } = useContext(ThemeContext);
  return <div className={`app bg-primary-${theme}`}>{children}</div>;
}
