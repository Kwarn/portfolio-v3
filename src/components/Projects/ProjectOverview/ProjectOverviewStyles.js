import styled from "styled-components";

export const ProjectWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectTitle = styled.h1`
  margin: auto auto 0 auto;
`;

export const ProjectDescription = styled.p`
  text-align: left;
  line-height: 20px;
  margin: 0 auto auto auto;
  width: 80%;
  @media (min-width: 800px) {
    width: 70%;
    line-height: 30px;
  }
`;

export const LinksContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 80%;
`;

export const Link = styled.a`
  margin: 0 10px auto 10px;
`;
