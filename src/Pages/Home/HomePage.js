// This page will sometimes be called index.js

import React from "react";
import Home from 'Components/Home/Home'
import HomeContentBoxContainer from 'Components/Home/HomeContentBoxContainer'
import HomeThemeButton from 'Components/Home/HomeThemeButton'
import HomeHeader from 'Components/Home/HomeHeader'

export default function HomePage({ theme, handleChangeTheme }) {
  return (
    <Home theme={theme}>
      <HomeHeader theme={theme}/>
      <HomeContentBoxContainer theme={theme} />
      <HomeThemeButton theme={theme} handleChangeTheme={handleChangeTheme} />
    </Home>
  );
}
