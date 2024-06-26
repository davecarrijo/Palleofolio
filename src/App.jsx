// React imports
import React from "react";
// Styles imports
import "./index.css";
import "./Styles/Buttons.css";
import "./Styles/Containers.css";
import "./App.css";
// Components Imports
import Nav from "./components/Nav";

import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Tech_Stack from "./components/Tech_Stack";
import Hero from "./components/Hero";

function App() {
  return (
    <div className='App'>
      <div className='Main_container mr-3 ml-3 lg:mr-52 lg:ml-52'>
        <Nav />
        <Hero />
        <Tech_Stack />
        <Projects />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
}

export default App;
