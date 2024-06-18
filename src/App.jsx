// React imports
import React from "react";
// Styles imports
import "./index.css";
import "./App.css";
// Components Imports
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Nav_Mobile from "./components/Nav_Mobile";

function App() {
  return (
    <div className='App'>
      <div className='Main_container mr-3 ml-3 lg:mr-32 lg:ml-32'>
        {/* <Nav_Mobile /> */}
        <Nav />
        <Hero />
        <Projects />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
}

export default App;
