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

export default function Home() {
  return (
    <HomeWrapper>
      <Background src={background} alt="home-background" />
      <MenuOptionsContainer>
        <MenuOption>About</MenuOption>
        <MenuOption>Skills</MenuOption>
        <MenuOption>Projects</MenuOption>
        <MenuOption>Designs</MenuOption>
      </MenuOptionsContainer>
      <HelloText>HELLO</HelloText>
      <SocialIconsContainer>
        <SocialIcon src={downloadCVIcon} />
        <SocialIcon src={githubIcon} />
        <SocialIcon src={linkedinIcon} />
      </SocialIconsContainer>
      <DownArrow src={whiteDownArrowIcon} />
      <Intersection>
        <TriangleIntersectionLeft />
        <TriangleIntersectionRight />
      </Intersection>
    </HomeWrapper>
  );
}
