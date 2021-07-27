import React from "react";
import {
  EducationWrapper,
  TextSectionsContainer,
  ImagesContainer,
  Image,
} from "./EducationStyles";
import imageAssets from "../../assets/assets";
import nodeCertificate from "../../assets/nodeCertificate.jpg";
import reactCertificate from "../../assets/reactCertificate.jpg";
import typescriptCertificate from "../../assets/typescriptCertificate.jpg";
import javascriptCertificate from "../../assets/javascriptCertificate.jpg";
import freeCodeCampCertificate from "../../assets/freeCodeCampCertificate.png";
import sqlCodeAcademyCertificate from "../../assets/sqlCodeAcademyCertificate.png";

export default function Education() {
  return (
    <EducationWrapper>
      <TextSectionsContainer>
        <h1>Education</h1>
        <p>
          Developing effective learning strategies has been fundamental to fully
          digesting the - at times overwhelming - amount of information
          contained throughout the numerous courses and tutorials I've taken.
        </p>
        <p>
          I've found by challenging myself to code first whenever possible,
          taking detailed notes and utilizing the 'rubber ducky' method that I'm
          able to better understand and retain knowledge. This approach has been
          key to maintaining consistent progress, positivity and motivation;
        </p>
      </TextSectionsContainer>
      <ImagesContainer>
        <Image src={nodeCertificate} alt="certificate" />
        <Image src={typescriptCertificate} alt="certificate" />
        <Image src={reactCertificate} alt="certificate" />
        <Image src={javascriptCertificate} alt="certificate" />
        <Image src={freeCodeCampCertificate} alt="certificate" />
        <Image src={sqlCodeAcademyCertificate} alt="certificate" />
      </ImagesContainer>
    </EducationWrapper>
  );
}
