import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #2a9d8f;
  overflow: hidden;
`;

export const Background = styled.img`
  z-index: -1;
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

export const ProfileContainer = styled.div`
  margin: 1vh auto 1vh auto;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: row;
  @media (min-width: 900px) {
    width: auto;
    margin: 1vh auto 1vh 1vw;
  }
`;
export const ProfileImage = styled.img`
  margin: auto 0 auto auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const SocialIconsContainer = styled.div`
  background-color: #c5525f;
  z-index: 3;
  margin: auto auto auto 2vw;
  width: 100%;
  max-width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;

  @media (min-width: 900px) {
    margin: auto auto auto 20px;
    width: 200px;
  }
`;
export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  padding: 0;
  img {
    mix-blend-mode: normal;
    z-index: 3;
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: auto;
    border: 2px solid transparent;
    &:hover {
      background-color: cyan;
      border: 2px solid cyan;
    }
  }
  p {
    font-size: 20px;
    font-weight: bolder;
    color: #c5525f;
    line-height: 36px;
    text-align: center;
    background-color: #eee;
    margin: auto;
    z-index: 3;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    cursor: pointer;
    border: 3px solid #eee;
    &:hover {
      color: cyan;
      border: 3px solid cyan;
    }
  }
`;

export const MenuOptionsContainer = styled.div`
  margin: 1vh auto;
  z-index: 2;
  font-family: "Teko";
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 900px) {
    width: calc(100% - 320px);
    position: absolute;
    left: calc(20px + 300px);
    top: calc(2vh + 20px);
  }
  @media (min-width: 1200px) {
    width: 500px;
    height: 60px;
    left: 340px;
    top: calc(2vh + 5px);
  }
`;
export const MenuOption = styled.p`
  z-index: 3;
  cursor: pointer;
  font-size: 18px;
  color: #eee;
  width: fit-content;
  margin: auto;
  height: 40px;
  @media (min-width: 900px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 25px;
  }
  transition: color 0.3s ease-in-out;
  &:hover {
    color: cyan;
  }
`;

export const HelloText = styled.h1`
  padding: 0;
  color: #eee;
  font-family: "Secular One";
  position: relative;
  mix-blend-mode: difference;
  font-size: 30vw;
  margin: 15vh auto auto auto;
  z-index: 1;
  @media (min-width: 900px) {
    /* margin-top: -15vh; */
    font-size: 30vw;
  }
  @media (min-width: 1200px) {
    /* margin-top: -25vh; */
    font-size: 350px;
  }
`;

export const DownArrow = styled.img`
  z-index: 2;
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: -15vh;
  left: calc(50% - 20px);
  @media (min-width: 900px) {
    bottom: 5vh;
  }
  @media (min-width: 1200px) {
    bottom: 5vh;
  }
`;

export const Intersection = styled.div`
  margin: auto auto 0 auto;
  z-index: 1;
  width: 100%;
  position: relative;
`;

export const TriangleIntersectionRight = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 0;
  height: 0;
  border-top: 10vw solid transparent;
  border-right: 50vw solid #051320;
`;
