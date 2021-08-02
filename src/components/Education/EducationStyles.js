import styled from "styled-components";

export const EducationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #6e8992;
  color: white;
`;

export const EducationHeader = styled.div`
  background: url(${(props) => props.background});
  background-position: bottom;
  background-size: cover;
  margin: 0 auto auto auto;
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100%;
  height: 300px;
  h1 {
    z-index: 2;
    margin: auto auto 0 auto;
  }
  @media (min-width: 1200px) {
    height: 500px;
    background-position: center;
    h1 {
      font-size: 60px;
    }
  }
`;

export const TextSectionsContainer = styled.div`
  background-blend-mode: difference;
  border-radius: 40px;
  margin: 5vh auto 5vh auto;
  width: 90%;
  p {
    text-align: left;
    margin: auto 5vw;
    z-index: 2;
    font-family: "Ruluko";
    line-height: 35px;
  }

  @media (min-width: 700px) {
    width: 60%;
  }
  @media (min-width: 1200px) {
    margin: 10vh auto;
    p {
      font-size: 20px;
    }
  }
`;

export const ImagesContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  opacity: 0.8;
  cursor: pointer;
  margin: 2vh auto;
  width: 30%;
  height: auto;
`;
