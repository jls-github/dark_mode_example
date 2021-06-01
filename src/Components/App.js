import { useState } from "react";

// note: Normally you will need to use a relative path here
// but I've added config to my app to allow for absolute paths
// from the src directory
import "Styles/App.css";
import "Styles/theme.css";
import Navbar from "Components/Navbar/Navbar";
import Home from "Components/Home/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`app bg-primary-${theme}`}>
      <Navbar theme={theme} />
      <Home
        theme={theme}
        handleChangeTheme={handleChangeTheme}
      />
    </div>
  );
}

export default App;
