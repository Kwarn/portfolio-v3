import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #474747;
  color: #eee;
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    width: 60%;
    margin: auto;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Site designed with Figma and built from the ground up with React.</p>
    </FooterWrapper>
  );
}
