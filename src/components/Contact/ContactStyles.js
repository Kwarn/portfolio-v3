import styled from "styled-components";

export const ContactWrapper = styled.div`
  background-color: #ffffdb;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Courier New";
  font-weight: bold;
  font-size: 16px;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

export const Intersection = styled.div`
  display: hidden;
  @media (min-width: 900px) {
    display: inline;
    overflow: hidden;
    margin: auto auto -80px auto;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TriangleIntersection = styled.div`
  display: none;
  border-left: 10vw solid transparent;
  border-right: 10vw solid transparent;
  border-top: 80px solid black;

  @media (min-width: 900px) {
    display: inline;
  }
`;

export const ContactContainer = styled.div`
  margin: auto auto 10vh auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin: 15vh auto 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  p {
    width: 60%;
    margin: 1vh auto;
  }
`;
