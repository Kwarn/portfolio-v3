import React from "react";
import FileSaver from "file-saver";
import background from "../../assets/homeBackground.jpg";
import profileImage from "../../assets/profileImage.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import whiteDownArrowIcon from "../../assets/whiteDownArrow.png";
import {
  HomeWrapper,
  Background,
  ProfileContainer,
  ProfileImage,
  SocialIconsContainer,
  SocialLink,
  MenuOptionsContainer,
  MenuOption,
  HelloText,
  DownArrow,
  Intersection,
  TriangleIntersectionRight,
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
      <ProfileContainer>
        <ProfileImage src={profileImage} alt="profile pic" />
        <SocialIconsContainer>
          <SocialLink
            href="https://github.com/Kwarn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="github profile link" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/karl-warner-9147661b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="linked in profile link" />
          </SocialLink>
          <SocialLink onClick={saveFile}>
            <p>CV</p>
          </SocialLink>
        </SocialIconsContainer>
      </ProfileContainer>
      <MenuOptionsContainer ref={homeRef}>
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
        <MenuOption onClick={() => scrollIntoView("about")}>About</MenuOption>
        <MenuOption onClick={() => scrollIntoView("contact")}>
          Contact
        </MenuOption>
      </MenuOptionsContainer>
      <HelloText>
        HELLO
        <DownArrow
          onClick={() => scrollIntoView("skills")}
          src={whiteDownArrowIcon}
          alt="scroll down arrow"
        />
      </HelloText>
      <Intersection>
        <TriangleIntersectionRight />
      </Intersection>
    </HomeWrapper>
  );
}
