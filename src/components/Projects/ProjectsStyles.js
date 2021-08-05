import styled, { keyframes, css } from "styled-components";

const pulseAnimation = keyframes`
	0% {

  background-color: #2a9d8f;
	}

	50% {
    background-color: rgba(42,157,143, 0.7);
	}

	100% {
  background-color: #2a9d8f;

	}
`;

export const ProjectsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  @media (min-width: 1200px) {
    color: #eee;
  }
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
  color: #eee;
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
    margin: 30vh auto 10vh auto;
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

export const ProjectsTileContainer = styled.div`
  @media (min-width: 1200px) {
    margin: auto;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 150px 150px 150px 150px 150px;
    gap: 0 0;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    background-color: #ccc;
  }
`;

export const ProjectTile = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 5px;
  box-shadow: 2px;
  margin: 3vh auto 2vh auto;
  z-index: 1;
  width: 80%;
  @media (min-width: 900px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    grid-column: 1/2;
    border-radius: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) =>
      props.isSelected
        ? "#eee"
        : props.isHovered
        ? "rgba(42,157,143, 0.5)"
        : "#2a9d8f"};
    grid-row: ${(props) => `${props.gridRowStart} / ${props.gridRowStart + 1}`};
    color: ${(props) => (props.isSelected ? "black" : "#474747")};
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    animation: ${(props) =>
      props.isNextProject
        ? css`
            ${pulseAnimation} 3s infinite
          `
        : "none"};
  }
`;

export const ProjectTileTextContainer = styled.div`
  margin: auto;
  width: 100%;
  h2 {
    font-family: "Teko";
    margin: 10px auto 10px auto;
  }
  p {
    font-family: "Teko";
    margin: 0px 5px 10px 5px;
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 35px;
    }
    p {
      display: none;
    }
  }
`;

export const MainContent = styled.div`
  display: none;
  @media (min-width: 1200px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    grid-row: 1/6;
    grid-column: 2/3;
  }
`;

export const ProjectsFooter = styled.p`
  color: #eee;
  text-align: center;
  margin: 5vh auto 15vh auto;
  width: 80%;
  a {
    color: white;
    font-weight: 400;
  }
`;
