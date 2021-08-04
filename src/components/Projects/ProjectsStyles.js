import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a9d8f;
  color: black;
`;

export const ProjectsHeader = styled.img`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  object-fit: cover;
  object-position: bottom;
`;

export const TextContainer = styled.div`
  margin: 20vh auto 2vh auto;
  width: 80%;
  text-align: center;
  h1 {
    font-family: "Ruluko";
    text-align: center;
  }
  p {
    font-family: "Ruluko";
    line-height: 25px;
  }
  @media (min-width: 900px) {
    max-width: 400px;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

export const ProjectTile = styled.div`
  text-align: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  transition: background-color 0.8s ease;
  &:hover {
    background-color: cyan;
  }
  border-radius: 5px;
  box-shadow: 2px;
  margin: 3vh auto 2vh auto;
  z-index: 1;
  width: 80%;

  h2 {
    font-family: "Teko";
    margin: 10px auto 10px auto;
  }
  p {
    font-family: "Teko";
    margin: 0px 5px 10px 5px;
  }

  @media (min-width: 900px) {
    max-width: 40%;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 22px;
    }
  }
`;

export const ProjectsFooter = styled.p`
  text-align: center;
  margin: 5vh auto 15vh auto;
  width: 80%;
  a {
    color: white;
    font-weight: 400;
  }
`;
