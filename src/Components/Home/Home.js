import React from "react";
import HomeContentBoxContainer from "Components/Home/HomeContentBoxContainer";
// You will often see primary css files called index.css
// I have decided to be more explicit in my naming for this example
import "Styles/Home/Home.css";
import HomeThemeButton from "Components/Home/HomeThemeButton";
import HomeHeader from "Components/Home/HomeHeader";

export default function Home({ theme, handleChangeTheme }) {
  return (
    <div className={`home bg-primary-${theme}`}>
      <HomeHeader />
      <HomeContentBoxContainer theme={theme} />
      <HomeThemeButton theme={theme} handleChangeTheme={handleChangeTheme} />
    </div>
  );
}
