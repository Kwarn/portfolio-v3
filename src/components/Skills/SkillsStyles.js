import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: linear-gradient(to bottom, #c5525f, #f4a261 95%);
  text-align: center;
  color: black;
`;

export const SkillsContainer = styled.div`
  width: 80%;
  margin: 5vh auto 5vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 10vh auto 10vh auto;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const SkillContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 80vw;
  max-width: 350px;
  img {
    width: auto;
    height: 100px;
    margin: auto;
  }
  p {
    font-family: "Ruluko";
  }
  @media (min-width: 900px) {
    margin: 0 auto;
    max-width: 200px;
  }
  @media (min-width: 1200px) {
    max-width: 250px;
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 18px;
    }
  }
`;
