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
      <HelloText>HELLO</HelloText>
      <SocialIconsContainer>
        <SocialIcon src={downloadCVIcon} />
        <SocialIcon src={githubIcon} />
        <SocialIcon src={linkedinIcon} />
      </SocialIconsContainer>
      <DownArrow
        onClick={() => scrollIntoView("about")}
        src={whiteDownArrowIcon}
      />
      <Intersection>
        <TriangleIntersectionLeft />
        <TriangleIntersectionRight />
      </Intersection>
    </HomeWrapper>
  );
}
