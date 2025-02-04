
import React from 'react';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Skills from './Component/Skills';
import Work from './Component/Work';
import { ThemeProvider } from "./Component/ThemeContext";
function App() {
  return (
    <ThemeProvider>

    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
    </ThemeProvider>

  );
}

export default App;
