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
`;

export const TechIconsContainer = styled.div`
  margin: auto auto 0 auto;
  display: flex;
  flex-direction: row;
  width: 80%;
  @media (min-width: 800px) {
    width: 40%;
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
  margin: auto;
  width: 80%;
  line-height: 22px;
  @media (min-width: 800px) {
    line-height: 30px;
  }
`;
