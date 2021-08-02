const { default: styled } = require("styled-components");

export const ExtraInfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  font-family: "Ruluko";
  line-height: 25px;
  justify-content: center;
  background: url("../../assets/background2.jpg");
  background-size: cover;
`;

export const ExtraInfoContainer = styled.div`
  color: #474747;
  margin: 20vh 15px 20vh 15px;
  text-align: center;
  box-shadow: 0 0 5px 5px white inset;
  padding: 20px;
  h2 {
    text-align: center;
    padding: 10px 0 0 0;
  }
  p {
    white-space: pre-line;
    max-width: 800px;
    padding: 10px 0 10px 0;
  }

  img {
    cursor: pointer;
    height: 80px;
    width: auto;
    padding: 20px 5px 10px 5px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 760px) {
    img {
      height: 60px;
    }
  }

  @media (max-width: 500px) {
    img {
      height: 50px;
    }
    p {
      font-size: small;
    }
  }

  @media (max-width: 375px) {
    p {
      font-size: small;
    }
    img {
      padding: 5px;
      height: 30px;
    }
  }

  @media (max-width: 350px) {
    p {
      font-size: small;
    }
  }
`;
