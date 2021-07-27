import styled from "styled-components";

export const DesignsWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #474747;
  overflow: hidden;
  padding-bottom: 15vh;
`;
export const TextSectionsContainer = styled.div`
  max-width: 100%;
  z-index: 2;
  position: relative;
  color: white;
  text-align: left;
  width: 80%;
  margin: 15vh auto 10vh auto;
  font-family: "Ruluko";
  h2 {
    mix-blend-mode: difference;
  }
  p {
    mix-blend-mode: difference;
    font-weight: 300;
    line-height: 30px;
  }
`;

export const CircleBackgroundYellow = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -2;
  top: -30%;
  left: calc(100% - 70%);
  height: 350px;
  width: 100%;
  border-radius: 50%;
  /* background-image: linear-gradient(to left, orange, yellow); */
`;
export const CircleBackgroundRed = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: -1;
  top: -35%;
  right: calc(100% - 70%);
  height: 350px;
  width: 100%;
  border-radius: 50%;
  background-image: linear-gradient(to top, yellow, orange);
`;

export const Image = styled.img`
  margin: 3vh auto;
  width: 95%;
  height: auto;
  z-index: 2;
`;
