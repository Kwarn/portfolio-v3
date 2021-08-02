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
    text-align: center;
  }
  p {
    font-family: "Ruluko";
    line-height: 25px;
  }
  @media (min-width: 900px) {
    max-width: 400px;
    p {
      text-align: left;
    }
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

  @media (min-width: 900px) {
    max-width: 40%;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const ProjectsFooter = styled.p`
  text-align: center;
  color: #eee;
  margin: 5vh auto 15vh auto;
  width: 80%;
  a {
    color: inherit;
    font-weight: 400;
  }
`;
