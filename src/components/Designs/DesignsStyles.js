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
  position: relative;
  color: white;
  text-align: left;
  width: 80%;
  margin: 15vh auto 10vh auto;
  font-family: "Ruluko";
  h2 {
    font-size: 5vw;
  }
  p {
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
`;

export const Image = styled.img`
  margin: 3vh auto;
  width: 95%;
  height: auto;
  z-index: 2;

  @media (min-width: 900px) {
    width: 60%;
  }
`;
