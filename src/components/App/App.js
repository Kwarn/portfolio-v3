import React, { useEffect } from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./App.css";
import WebFont from "webfontloader";
import Designs from "../Designs/Designs";
import Education from "../Education/Education";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Ruluko", "Teko"],
      },
    });
  }, []);
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Designs />
      <Education />
    </div>
  );
}

export default App;
