import React from "react";
// import background from "../../assets/homeBackground1.jpg";
import background from "../../assets/homeBackground.jpg";
import githubIcon from "../../assets/github.jpeg";
import linkedinIcon from "../../assets/linkedin.png";
import downloadCVIcon from "../../assets/cvicon.jpeg";
import whiteDownArrowIcon from "../../assets/whiteDownArrow.png";
import FileSaver from "file-saver";
import {
  HomeWrapper,
  Background,
  SocialIconsContainer,
  SocialIcon,
  HelloText,
  MenuOptionsContainer,
  MenuOption,
  DownArrow,
  TriangleIntersectionLeft,
  TriangleIntersectionRight,
  Intersection,
  WelcomeElementsContainer,
} from "./HomeStyles";

export default function Home({ homeRef, scrollIntoView }) {
  const saveFile = () =>
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resource/Karl_Warner_CV.pdf",
      "Karl_Warner_CV.pdf"
    );
  return (
    <HomeWrapper>
      <Background src={background} alt="home-background" />
      <MenuOptionsContainer ref={homeRef}>
        <MenuOption onClick={() => scrollIntoView("about")}>About</MenuOption>
        <MenuOption onClick={() => scrollIntoView("skills")}>Skills</MenuOption>
        <MenuOption onClick={() => scrollIntoView("projects")}>
          Projects
        </MenuOption>
        <MenuOption onClick={() => scrollIntoView("designs")}>
          Designs
        </MenuOption>
        <MenuOption onClick={() => scrollIntoView("education")}>
          Education
        </MenuOption>
      </MenuOptionsContainer>
      <WelcomeElementsContainer>
        <HelloText>
          HELLO
          <DownArrow
            onClick={() => scrollIntoView("about")}
            src={whiteDownArrowIcon}
            alt="scroll down arrow"
          />
        </HelloText>
      </WelcomeElementsContainer>
      <SocialIconsContainer>
        <a
          href="https://github.com/Kwarn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={githubIcon} alt="github profile link" />
        </a>
        <a
          href="https://www.linkedin.com/in/karl-warner-9147661b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={linkedinIcon} alt="linked in profile link" />
        </a>
        <SocialIcon
          src={downloadCVIcon}
          alt="download cv link"
          onClick={saveFile}
        />
      </SocialIconsContainer>
      <Intersection>
        <TriangleIntersectionLeft />
        <TriangleIntersectionRight />
      </Intersection>
    </HomeWrapper>
  );
}
