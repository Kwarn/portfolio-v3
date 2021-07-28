import React from "react";
import { DesignsWrapper, Image, TextSectionsContainer } from "./DesignsStyles";
import slopesImage from "../../assets/slopes.png";
import gardeningImage from "../../assets/gardening.png";
import gymImage from "../../assets/gym.png";
import climbingImage from "../../assets/climbing.png";

export default function Designs({ designsRef }) {
  return (
    <DesignsWrapper>
      <TextSectionsContainer ref={designsRef}>
        <h2>UI/UX Designs</h2>
        <p>
          Having discovered the power of Figma.com, I've been further improving
          my design skills by experimenting with the core principles of visual
          hierarchy, spacing & font choice. Below are some of my recent
          examples.
        </p>
      </TextSectionsContainer>

      <Image src={slopesImage} />
      <Image src={climbingImage} />
      <Image src={gymImage} />
      <Image src={gardeningImage} />
    </DesignsWrapper>
  );
}
