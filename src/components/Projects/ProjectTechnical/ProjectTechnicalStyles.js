import styled from "styled-components";

export const ProjectTechnicalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TechHeader = styled.h1`
  margin: auto auto 0 auto;
  @media (min-width: 1200px) {
    font-size: 50px;
  }
`;

export const TechIconsContainer = styled.div`
  margin: 5vh auto 0 auto;
  display: flex;
  flex-direction: row;
  width: 80%;
  @media (min-width: 800px) {
    width: 40%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const TechIcon = styled.img`
  margin: auto;
  height: 40px;
  width: auto;
  @media (min-width: 800px) {
    height: 50px;
  }
`;

export const TechText = styled.p`
  text-align: left;
  margin: 5vh auto auto auto;
  width: 80%;
  line-height: 22px;
  @media (min-width: 800px) {
    line-height: 30px;
  }
  @media (min-width: 1200px) {
    width: 50%;
    font-size: 18px;
  }
`;
