import React, { useState, useEffect } from "react";
import upArrow from "../../assets/upArrow.jpeg";
import styled from "styled-components";

const GoToTopFooter = styled.footer`
  cursor: pointer;
  height: 50px;
  position: fixed;
  right: 10px;
  z-index: 100;
  transition: bottom 0.6s;
  bottom: ${(props) => (props.isVisible ? "10px" : "-60px")};
  padding: 5px;
`;

const GoToTopButton = styled.img`
  height: 50px;
  width: auto;
  align-items: center;
`;

const GoToTop = ({ scrollIntoView }) => {
  const [scrollPos, setScrollPos] = useState({
    posY: window.pageYOffset,
    isVisible: false,
  });

  const scrollHandler = () => {
    const newScrollPos = window.pageYOffset;
    if (Math.abs(document.body.scrollHeight - window.pageYOffset) < 1500) {
      setScrollPos({ posY: newScrollPos, isVisible: true });
    } else {
      if (newScrollPos > 300) {
        const isVisible = scrollPos.posY > newScrollPos;
        setScrollPos({ posY: newScrollPos, isVisible: isVisible });
      } else {
        setScrollPos({ posY: newScrollPos, isVisible: false });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <GoToTopFooter isVisible={scrollPos.isVisible}>
      <GoToTopButton
        src={upArrow}
        alt="go to top"
        onClick={() => scrollIntoView("home")}
      />
    </GoToTopFooter>
  );
};

export default GoToTop;
