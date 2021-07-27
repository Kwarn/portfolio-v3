import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Background = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  color: #eee;
  margin: 20vh auto 5vh auto;
  width: 80%;
  h1 {
  }
  p {
    font-family: "Ruluko";
    line-height: 25px;
  }
`;

export const Project = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  transition: background-color 0.8s ease;
  box-shadow: 0px 1px 2px 2px #eee;

  &:hover {
    background-color: cyan;
    background-position: right;
  }
  border-radius: 5px;
  box-shadow: 2px;
  margin: 3vh auto 2vh auto;
  z-index: 1;
  width: 80%;

  h2 {
    /* font-family: "Teko"; */
    margin: 10px auto 10px auto;
  }
  p {
    font-family: "Ruluko";
    margin: 0px 5px 10px 5px;
  }
`;

export const ProjectsFooter = styled.p`
  color: #eee;
  margin: 5vh auto 15vh auto;
  width: 80%;
  a {
    color: inherit;
    font-weight: 400;
  }
`;
