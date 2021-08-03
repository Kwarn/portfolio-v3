import styled from "styled-components";

export const AboutWrapper = styled.div`
  background: #f4a261;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Ruluko";
  font-weight: 20;
  position: relative;
  overflow: hidden;
  @media (min-width: 900px) {
    background: linear-gradient(to bottom, #f4a261 30%, #e9c46a);
  }
`;

export const CenterLine = styled.div`
  @media (min-width: 900px) {
    position: absolute;
    bottom: 20px;
    left: calc(50% - 2vw);
    width: 4vw;
    height: 50%;
    z-index: 0;
    background-color: black;
    box-shadow: 5px 0px #ccc;
  }
`;

export const CodeBackground = styled.div`
  @media (min-width: 900px) {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.background});
    background-position: top;
    background-size: cover;
  }
`;
export const Grid = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 900px) {
    position: relative;
    z-index: 2;
    border: 10px solid black;
    background-color: black;
    margin: 15vh 5vw 10vh 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 500px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 2;
    margin: 15vh 15vw;
    height: 600px;
  }
`;

export const StyledFadeEffect = styled.div`
  @media (min-width: 900px) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    box-shadow: 0px 0px 3px 3px #ccc;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto auto 2vh auto;
  color: #eee;
  font-size: 14px;
  text-align: center;

  @media (min-width: 900px) {
    margin: auto -4vw auto auto;
    z-index: 4;
    grid-column: 1/2;
    grid-row: 1/3;
    color: #ccc;
    height: 60%;
  }

  @media (min-width: 1200px) {
    margin: auto -2vw auto auto;
  }
  @media (min-width: 1450px) {
    margin: auto -5vw auto auto;
  }
`;

export const ProfileImage = styled.img`
  margin: auto auto 2vh auto;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  z-index: 4;
  @media (min-width: 900px) {
    margin: auto auto;
    height: 200px;
    width: 200px;
  }
  @media (min-width: 1200px) {
    height: 220px;
    width: 220px;
  }
`;

export const JobTitle = styled.h2`
  z-index: 4;
  width: 100%;
  margin: auto;
`;

export const AboutMeTextContainer = styled.div`
  z-index: 4;
  margin: auto;
  color: #eee;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 900px) {
    grid-column: 2/5;
    grid-row: 1/3;
    color: #ccc;
    margin: auto auto;
  }
`;

export const Name = styled.h1`
  text-align: center;
  margin: auto;
  width: 100%;
  @media (min-width: 900px) {
    margin: 0 auto;
  }
`;

export const AboutMeText = styled.p`
  text-align: left;
  line-height: 25px;
  margin: 2vh auto auto auto;
  width: 80%;
  height: fit-content;
  @media (min-width: 900px) {
    margin: auto;
    font-size: 20px;
    font-weight: 400;
    margin: auto auto;
  }
  @media (min-width: 1200px) {
    font-size: 25px;
    line-height: 30px;
    font-weight: 400;
    margin: auto auto;
  }
`;

export const Slope = styled.div`
  @media (min-width: 900px) {
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 0;
    border-top: 8vw solid transparent;
    /* border-bottom: 0px solid transparent; */
    border-right: 120vw solid black;
  }
`;
