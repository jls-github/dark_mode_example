// This page will sometimes be called index.js

import React, { useContext } from "react";
import HomeWrapper from "Components/Home/HomeWrapper";
import HomeContentBoxContainer from "Components/Home/HomeContentBoxContainer";
import HomeThemeButton from "Components/Home/HomeThemeButton";
import HomeHeader from "Components/Home/HomeHeader";
import { ThemeContext } from "Contexts/ThemeContext";

export default function HomePage() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  // const value = useContext(ThemeContext)
  // const theme = value.theme
  // const handleChangeTheme = value.handleChangeTheme
  
  return (
    <HomeWrapper>
      <HomeHeader theme={theme} />
      <HomeContentBoxContainer theme={theme} />
      <HomeThemeButton theme={theme} handleChangeTheme={handleChangeTheme} />
    </HomeWrapper>
  );
}
