import React from "react";
import slopesImage from "../../assets/slopes.png";
import climbingImage from "../../assets/climbing.png";
import gymImage from "../../assets/gym.png";
import gardeningImage from "../../assets/gardening.png";
import {
  DesignsWrapper,
  TextSectionsContainer,
  ImageContainer,
  Image,
} from "./DesignsStyles";

export default function Designs({ designsRef }) {
  return (
    <DesignsWrapper>
      <TextSectionsContainer ref={designsRef}>
        <h2>UI/UX Designs</h2>
        <p>
          Having discovered the power of Figma.com, I've been further improving
          my design skills by experimenting with the core principles of visual
          hierarchy, white space, colour & font choice.
        </p>
      </TextSectionsContainer>
      <ImageContainer>
        <Image src={slopesImage} alt="ski resort website design" />
        <Image src={climbingImage} alt="climbing website design" />
        <Image src={gymImage} alt="personal trainer website design" />
        <Image src={gardeningImage} alt="gardener website design" />
      </ImageContainer>
    </DesignsWrapper>
  );
}
