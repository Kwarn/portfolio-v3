import React from "react";
import background from "../../assets/homeBackground1.jpg";
import githubIcon from "../../assets/github.jpeg";
import linkedinIcon from "../../assets/linkedin.png";
import downloadCVIcon from "../../assets/cvicon.jpeg";
import whiteDownArrowIcon from "../../assets/whiteDownArrow.png";
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

export default function Home({ scrollIntoView }) {
  return (
    <HomeWrapper>
      <Background src={background} alt="home-background" />
      <MenuOptionsContainer>
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
        <HelloText>HELLO</HelloText>
        <SocialIconsContainer>
          <SocialIcon src={downloadCVIcon} alt="download cv link" />
          <SocialIcon src={githubIcon} alt="github profile link" />
          <SocialIcon src={linkedinIcon} alt="linked in profile link" />
          <DownArrow
            onClick={() => scrollIntoView("about")}
            src={whiteDownArrowIcon}
            alt="scroll down arrow"
          />
        </SocialIconsContainer>
      </WelcomeElementsContainer>
      <Intersection>
        <TriangleIntersectionLeft />
        <TriangleIntersectionRight />
      </Intersection>
    </HomeWrapper>
  );
}
