import React from "react";
import {
  AboutWrapper,
  ProfileImage,
  AboutMeHeader,
  AboutMeText,
} from "./AboutStyles";
import profileImage from "../../assets/profileImage.png";

export default function About() {
  const aboutMeTextPart1 = `
        As a technical and mechanical enthusiast from a young age, I'm drawn to understanding how things work and thrive on pursuing the solutions when they don't! `;
  const aboutMeTextPart2 = `Curiosity has led me to understand a broad range of technologies and I'm eager to continue my journey within a skilled team, to which I can contribute and grow with.`;
  return (
    <AboutWrapper>
      <ProfileImage src={profileImage} alt="profile-pic" />
      <AboutMeHeader>Hi! I'm Karl,</AboutMeHeader>
      <AboutMeText>
        {aboutMeTextPart1}
        <br></br>
        <br></br>
        {aboutMeTextPart2}
      </AboutMeText>
    </AboutWrapper>
  );
}
