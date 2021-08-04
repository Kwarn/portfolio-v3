import React, { useEffect, useState, useRef } from "react";
import WebFont from "webfontloader";
import Modal from "../../UI/Modal/Modal";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Designs from "../Designs/Designs";
import Education from "../Education/Education";
import ExtraInfo from "../CodeChallenges/ExtraInfo";
import About from "../About/About";
import Contact from "../Contact/Contact";
import GoToTop from "../../UI/GoToTop/GoToTop";
import Footer from "../Footer/Footer";

function App() {
  const [modalControl, setModalControl] = useState({
    isVisible: false,
    contentArray: [],
    startingIndex: 0,
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Ruluko", "Teko", "Secular One"],
      },
    });
  }, []);

  const modalHandler = ({ isVisible, contentArray, startingIndex }) => {
    setModalControl({
      isVisible,
      contentArray,
      startingIndex,
    });
  };

  const closeModalHandler = () => {
    setModalControl({
      isVisible: false,
      contentArray: [],
      startingIndex: 0,
    });
  };

  const elementRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    designs: useRef(null),
    education: useRef(null),
    contact: useRef(null),
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
    <div>
      <Modal closeFn={closeModalHandler} {...modalControl} />
      <Home
        homeRef={elementRefs.home}
        scrollIntoView={(refName) => scrollIntoView(refName)}
      />
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
      <ExtraInfo modalHandler={(options) => modalHandler(options)} />
      <About aboutRef={elementRefs.about} />
      <Contact contactRef={elementRefs.contact} />
      <Footer />
      <GoToTop scrollIntoView={(refName) => scrollIntoView(refName)} />
    </div>
  );
}

export default App;
