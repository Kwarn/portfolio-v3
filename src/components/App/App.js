import React, { useEffect, useState, useRef } from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./App.css";
import WebFont from "webfontloader";
import Designs from "../Designs/Designs";
import Education from "../Education/Education";
import Modal from "../../UI/Modal/Modal";

function App() {
  const [modalControl, setModalControl] = useState({
    isVisible: false,
    contentArray: [],
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Ruluko", "Teko"],
      },
    });
  }, []);

  const modalHandler = ({ isVisible, contentArray }) => {
    setModalControl({
      isVisible,
      contentArray,
    });
  };

  const closeModalHandler = () => {
    setModalControl({
      isVisible: false,
      contentArray: [],
    });
  };

  const elementRefs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    designs: useRef(null),
    education: useRef(null),
    // contact: useRef(null),
  };

  const scrollIntoView = (refName) => {
    elementRefs[refName].current.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Modal
        closeFn={closeModalHandler}
        isVisible={modalControl.isVisible}
        contentArray={modalControl.contentArray}
      />
      <Home scrollIntoView={(refName) => scrollIntoView(refName)} />
      <About aboutRef={elementRefs.about} />
      <Skills skillsRef={elementRefs.skills} />
      <Projects
        projectsRef={elementRefs.projects}
        modalHandler={(options) => modalHandler(options)}
      />
      <Designs designsRef={elementRefs.designs} />
      <Education
        educationRef={elementRefs.education}
        modalHandler={(options) => modalHandler(options)}
      />
    </div>
  );
}

export default App;
