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

export const Grid = styled.div`
  @media (min-width: 700px) {
    margin: auto;
    display: grid;
    width: 100%;
    max-width: 600px;
    height: 600px;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const ProfileImage = styled.img`
  margin: auto auto 2vh auto;
  height: 150px;
  width: 150px;
  border-radius: 50%;

  @media (min-width: 700px) {
    grid-column: 1/2;
    grid-row: 2/3;
    margin: auto auto auto auto;
  }
`;

export const AboutMeHeader = styled.h1`
  margin: 3vh auto 0 auto;
  width: 100%;
  color: #eee;
  @media (min-width: 700px) {
    grid-column: 1/3;
    grid-row: 1/2;
    margin: auto auto 2vh 0;
  }
`;

export const AboutMeText = styled.p`
  text-align: left;
  line-height: 25px;
  margin: 2vh auto auto auto;
  width: 80%;
  height: fit-content;
  color: #eee;
  @media (min-width: 700px) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;
