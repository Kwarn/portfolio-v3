import styled from "styled-components";

export const AboutWrapper = styled.div`
  background-color: #2b364a;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Ruluko";
`;

export const ProfileImage = styled.img`
  margin: auto auto 2vh auto;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

export const AboutMeHeader = styled.h1`
  margin: 2vh auto 0 auto;
  width: 100%;
  height: fit-content;
  color: #eee;
`;

export const AboutMeText = styled.p`
  text-align: left;
  line-height: 25px;
  margin: 2vh auto auto auto;
  width: 80%;
  height: fit-content;
  color: #eee;
`;
