import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 125vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1200px) {
    height: 140vh;
  }
`;

export const Background = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 125vh;
  @media (min-width: 1200px) {
    height: 140vh;
  }
`;

export const MenuOptionsContainer = styled.div`
  position: absolute;
  top: 2vh;
  z-index: 2;
  font-family: "Teko";
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 900px) {
    max-width: 65%;
    right: 2vw;
    top: 3vh;
  }
  @media (min-width: 1200px) {
    width: 600px;
    right: 2vw;
    height: 60px;
  }
`;

export const MenuOption = styled.p`
  z-index: 3;
  cursor: pointer;
  font-size: 5vw;
  color: #eee;
  width: fit-content;
  margin: auto;
  height: 40px;
  @media (min-width: 900px) {
    font-size: 3vw;
  }
  @media (min-width: 1200px) {
    font-size: 2vw;
  }
`;

export const WelcomeElementsContainer = styled.div`
  margin: auto auto 0 auto;
  justify-content: center;
  position: relative;
  mix-blend-mode: difference;
`;

export const HelloText = styled.h1`
  padding: 0;
  font-family: "Teko";
  position: relative;
  mix-blend-mode: difference;
  color: #eee;
  font-size: 40vw;
  margin: auto;
  z-index: 1;
  @media (min-width: 900px) {
    margin-top: -15vh;
    font-size: 30vw;
  }
  @media (min-width: 1200px) {
    margin-top: -25vh;
    font-size: 400px;
  }
`;

export const SocialIconsContainer = styled.div`
  background-color: white;
  mix-blend-mode: difference;
  z-index: 3;
  margin: -50px auto auto auto;
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;

  a {
    margin: auto;
    padding: 0;
  }
  @media (min-width: 600px) {
    margin-top: -100px;
  }
  @media (min-width: 900px) {
    width: 30%;
    background-color: #eee;
    mix-blend-mode: difference;
    margin: auto;
    max-width: 300px;
    position: absolute;
    top: 2vh;
    left: 2vw;
    height: 60px;
    a {
      margin: 8px auto auto auto;
    }
  }
`;

export const SocialIcon = styled.img`
  mix-blend-mode: normal;
  z-index: 3;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: auto;
  border: 2px solid black;
  &:hover {
    background-color: cyan;
    border: 2px solid cyan;
  }
`;

export const DownArrow = styled.img`
  z-index: 2;
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: -10vh;
  left: calc(50% - 20px);
  @media (min-width: 900px) {
    bottom: 5vh;
  }
  @media (min-width: 1200px) {
    bottom: 10vh;
  }
`;

export const Intersection = styled.div`
  margin: auto auto 0 auto;
  z-index: 1;
  width: 100%;
  position: relative;
`;

export const TriangleIntersectionLeft = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 0;
  border-top: 20vw solid transparent;
  /* border-bottom: 0px solid transparent; */
  border-left: 50vw solid #2b364a;
`;

export const TriangleIntersectionRight = styled.div`
  position: absolute;
  bottom: -2px;
  right: 0;
  width: 0;
  height: 0;
  border-top: 20vw solid transparent;
  /* border-bottom: 0px solid transparent; */
  border-right: 50vw solid #2b364a;
`;
