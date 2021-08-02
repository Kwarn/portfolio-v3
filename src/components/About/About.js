import React from "react";
import {
  AboutWrapper,
  ProfileImage,
  Name,
  AboutMeText,
  Grid,
  Slope,
  CenterLine,
  StyledFadeEffect,
  AboutMeTextContainer,
  CodeBackground,
  ProfileContainer,
  JobTitle,
} from "./AboutStyles";
import profileImage from "../../assets/profileImage.png";
import background from "../../assets/vsCodeBg.png";

export default function About({ aboutRef }) {
  return (
    <AboutWrapper ref={aboutRef}>
      <Grid>
        <StyledFadeEffect />
        <CodeBackground background={background} />
        <ProfileContainer>
          <ProfileImage src={profileImage} alt="profile-pic" />
          <Name>Karl Warner</Name>
          <JobTitle>Full-stack web dev</JobTitle>
        </ProfileContainer>
        <AboutMeTextContainer>
          <AboutMeText>
            As a technical and mechanical enthusiast from a young age, I'm drawn
            to understanding how things work and thrive on pursuing the
            solutions when they don't! <br></br>
            <br></br> Curiosity has led me to understand a broad range of
            technologies and I'm eager to continue my journey within a skilled
            team, to which I can contribute and grow with.
          </AboutMeText>
        </AboutMeTextContainer>
      </Grid>
      <Slope />
      <CenterLine />
    </AboutWrapper>
  );
}
