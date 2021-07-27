import styled from "styled-components";

export const SkillsWrapper = styled.div`
  height: 125vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: #dedede;
`;

export const SkillsContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 50%;
  width: 50%; */
`;

export const SkillContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 80vw;
  img {
    width: 100px;
    height: auto;
    margin: auto;
  }
  p {
    font-family: "Ruluko";
  }
`;

export const Intersection = styled.div`
  z-index: 1;
  width: 100%;
  position: relative;
`;

export const TriangleIntersectionLeft = styled.div`
  position: absolute;
  bottom: -10vh;
  left: 0;
  width: 0;
  height: 0;
  /* border-top: 10vh solid transparent; */
  border-bottom: 10vh solid transparent;
  border-right: 48vw solid #dedede;
`;

export const TriangleIntersectionRight = styled.div`
  position: absolute;
  bottom: -10vh;
  right: 0;
  width: 0;
  height: 0;
  /* border-top: 20vw solid transparent; */
  border-bottom: 10vh solid transparent;
  border-left: 48vw solid #dedede;
`;
