import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 125vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Background = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 125vh;
`;

export const SocialIconsContainer = styled.div`
  /* background-color: white; */
  background-color: rgba(255, 255, 255, 0.5);
  /* mix-blend-mode: difference; */
  z-index: 1;
  margin: -7vh auto auto auto;
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
`;

export const SocialIcon = styled.img`
  mix-blend-mode: normal;
  z-index: 2;
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
  /* background: black; */
`;

export const HelloText = styled.h1`
  /* font-family: "Strong"; */
  font-family: "Teko";
  mix-blend-mode: difference;
  color: #eee;
  font-size: 40vw;
  margin: 30vh auto 5px auto;
  z-index: 1;
`;

export const MenuOptionsContainer = styled.div`
  font-family: "Teko";
  position: absolute;
  top: 2vh;
  right: 2vw;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
`;

export const MenuOption = styled.p`
  cursor: pointer;
  font-size: 6vw;
  color: #eee;
  width: fit-content;
  margin: auto;
  height: 40px;
`;

export const DownArrow = styled.img`
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 35vh;
  left: calc(50% - 20px);
`;

export const Intersection = styled.div`
  z-index: 1;
  width: 100%;
  position: relative;
`;

export const TriangleIntersectionLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 20vw solid transparent;
  /* border-bottom: 0px solid transparent; */
  border-left: 50vw solid #2b364a;
`;

export const TriangleIntersectionRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 20vw solid transparent;
  /* border-bottom: 0px solid transparent; */
  border-right: 50vw solid #2b364a;
`;
