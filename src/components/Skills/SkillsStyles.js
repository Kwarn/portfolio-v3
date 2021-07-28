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
  width: 80%;
  margin: 10vh auto 10vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const SkillContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 80vw;
  max-width: 350px;
  img {
    width: auto;
    height: 100px;
    margin: auto;
  }
  p {
    font-family: "Ruluko";
  }
  @media (min-width: 900px) {
    margin: 0 auto;
    max-width: 200px;
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
