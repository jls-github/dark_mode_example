import React from 'react'

// note: Normally you will need to use a relative path here
// but I've added config to my app to allow for absolute paths
// from the src directory
import "Styles/App.css";
import "Styles/theme.css";
import Navbar from "Components/Navbar/Navbar";
import AppWrapper from 'Components/AppWrapper'
import HomePage from "Pages/Home/HomePage";
import { ThemeProvider } from "Contexts/ThemeContext";

// Notice how our App has a single responsibility now.
// The App component doesn't handle any server or app state.
// It also does not render anything to the DOM.
// It's only concern is to put together the different 
// components of the application

function App() {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Navbar/>
        <HomePage/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
