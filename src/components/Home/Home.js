import React from "react";
// import background from "../../assets/homeBackground1.jpg";
import background from "../../assets/homeBackground.jpg";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import downloadCVIcon from "../../assets/cvicon1.png";
import whiteDownArrowIcon from "../../assets/whiteDownArrow.png";
import profileImage from "../../assets/profileImage.png";
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
  TriangleIntersectionRight,
  Intersection,
  ProfileContainer,
  ProfileImage,
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
