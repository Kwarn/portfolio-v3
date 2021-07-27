import React from "react";
import {
  DesignsWrapper,
  Image,
  CircleBackgroundYellow,
  TextSectionsContainer,
  CircleBackgroundRed,
} from "./DesignsStyles";
import slopesImage from "../../assets/slopes.png";
import gardeningImage from "../../assets/gardening.png";
import gymImage from "../../assets/gym.png";
import climbingImage from "../../assets/climbing.png";

export default function Designs() {
  return (
    <DesignsWrapper>
      <TextSectionsContainer>
        <h2>UI/UX Designs</h2>
        <p>
          Having discovered Figma.com, I've been further improving my design
          skills by experimenting with the core principles of visual hierarchy,
          spacing & font choice. Below are some of my recent examples.
        </p>
        {/* <CircleBackgroundYellow />
        <CircleBackgroundRed /> */}
      </TextSectionsContainer>

      <Image src={slopesImage} />
      <Image src={climbingImage} />
      <Image src={gymImage} />
      <Image src={gardeningImage} />
    </DesignsWrapper>
  );
}
