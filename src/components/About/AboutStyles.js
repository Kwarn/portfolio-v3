import styled from "styled-components";

export const AboutWrapper = styled.div`
  background-color: #2b364a;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Ruluko";
  position: relative;
  overflow: hidden;
`;

export const Grid = styled.div`
  @media (min-width: 700px) {
    margin: auto auto 10vh 25vw;
    display: grid;
    width: 100%;
    max-width: 600px;
    height: 600px;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 250px 1fr;
    max-width: 780px;
    z-index: 2;
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
  @media (min-width: 1200px) {
    margin-bottom: 3vh;
    height: 250px;
    width: 250px;
    grid-row: 1/3;
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
  @media (min-width: 1200px) {
    max-width: 800px;
    font-size: 18px;
    line-height: 30px;
  }
`;

export const Slope = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 10vw solid transparent;
    /* border-bottom: 0px solid transparent; */
    border-right: 100vw solid black;
  }
`;

export const Ball1 = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    z-index: 1;
    bottom: 9.5vw;
    right: -200px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #4a4d68;
  }
`;

export const Ball2 = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    z-index: 1;
    bottom: 6.125vw;
    right: calc(20% - 280px);
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #4a4d68;
  }
`;

export const Ball3 = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    z-index: 1;
    bottom: 2.5vw;
    right: calc(50% - 350px);
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background-color: #4a4d68;
  }
`;

export const Ball4 = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: calc(10% - 450px);
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background-color: #4a4d68;
  }
`;

export const SweepingArrow = styled.img`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    position: absolute;
    z-index: 2;
    bottom: -50px;
    left: -100px;
    width: 200px;
    height: 200px;
    transform: rotate(25deg);
  }
`;
