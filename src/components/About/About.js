import React from "react";
import {
  AboutWrapper,
  ProfileImage,
  AboutMeHeader,
  AboutMeText,
  Grid,
} from "./AboutStyles";
import profileImage from "../../assets/profileImage.png";

export default function About({ aboutRef }) {
  return (
    <AboutWrapper ref={aboutRef}>
      <Grid>
        <ProfileImage src={profileImage} alt="profile-pic" />
        <AboutMeHeader>Hi! I'm Karl,</AboutMeHeader>
        <AboutMeText>
          As a technical and mechanical enthusiast from a young age, I'm drawn
          to understanding how things work and thrive on pursuing the solutions
          when they don't! <br></br>
          <br></br> Curiosity has led me to understand a broad range of
          technologies and I'm eager to continue my journey within a skilled
          team, to which I can contribute and grow with.
        </AboutMeText>
      </Grid>
    </AboutWrapper>
  );
}
