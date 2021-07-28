import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: #dedede;
`;

export const SkillsContainer = styled.div`
  margin: 10vh auto 10vh auto;
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
  overflow: hidden;
  /* position: absolute; */
  margin: auto auto -50px auto;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TriangleIntersection = styled.div`
  /* height: 50px; */
  border-left: 49vw solid transparent;
  border-right: 49vw solid transparent;
  border-top: 50px solid #dedede;
`;
