import styled from "styled-components";

export const DesignsWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #474747;
  overflow: hidden;
  padding-bottom: 15vh;
`;

export const TextSectionsContainer = styled.div`
  max-width: 100%;
  z-index: 2;
  color: white;
  width: 80%;
  margin: 15vh auto 10vh auto;
  font-family: "Ruluko";
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    text-align: left;
    font-size: 5vw;
  }
  p {
    text-align: left;
    font-weight: 300;
    line-height: 30px;
  }
  @media (min-width: 900px) {
    margin: 15vh auto 10vh 20vw;
    h1 {
      font-size: 2vw;
    }
    p {
      max-width: 500px;
    }
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;
`;

export const Image = styled.img`
  margin: 3vh auto;
  width: 95%;
  height: auto;
  z-index: 2;

  @media (min-width: 900px) {
    width: 60%;
  }
  @media (min-width: 1200px) {
    margin: auto;
    width: 45vw;
    height: auto;
    padding: 5vh 0;
  }
`;
