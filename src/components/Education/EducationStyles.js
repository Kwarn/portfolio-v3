import styled from "styled-components";

export const EducationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #6e8992;
`;

export const TextSectionsContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 80%;
  h1 {
    margin: 5vh auto;
  }
  p {
    font-family: "Ruluko";
    line-height: 30px;
  }
`;

export const ImagesContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const Image = styled.img`
  margin: 2vh auto;
  width: 30%;
  height: auto;
`;
