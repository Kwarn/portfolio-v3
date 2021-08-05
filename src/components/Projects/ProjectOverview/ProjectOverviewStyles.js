import styled from "styled-components";

export const ProjectWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectImagesContainer = styled.div`
  display: none;
  @media (min-width: 1200px) {
    margin: 10px auto auto auto;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
  }
`;

export const ProjectImage = styled.img`
  cursor: pointer;
  margin: auto 5px auto 5px;
  max-width: ${(props) => `${100 / props.imageCount}%`};
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ProjectTitle = styled.h1`
  margin: auto auto 5vh auto;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  margin: 1vh auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  h3 {
    margin: 0 auto;
  }
  @media (min-width: 600px) {
    max-width: 400px;
  }
`;
export const LinksContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1200px) {
    width: 100%;
  }
`;
export const Link = styled.a`
  margin: auto;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const ProjectDescription = styled.p`
  text-align: left;
  line-height: 20px;
  margin: 0 auto auto auto;
  width: 80%;
  font-size: 12px;
  white-space: pre-line;
  @media (min-width: 800px) {
    width: 70%;
    line-height: 30px;
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    margin: 0 auto 0 auto;
    width: 95%;
    line-height: 25px;
    font-size: 18px;
  }
`;
