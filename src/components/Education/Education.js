import React from "react";
import {
  EducationWrapper,
  TextSectionsContainer,
  ImagesContainer,
  Image,
} from "./EducationStyles";
import nodeCertificate from "../../assets/nodeCertificate.jpg";
import reactCertificate from "../../assets/reactCertificate.jpg";
import typescriptCertificate from "../../assets/typescriptCertificate.jpg";
import javascriptCertificate from "../../assets/javascriptCertificate.jpg";
import freeCodeCampCertificate from "../../assets/freeCodeCampCertificate.png";
import sqlCodeAcademyCertificate from "../../assets/sqlCodeAcademyCertificate.png";

export default function Education({ educationRef, modalHandler }) {
  const certificates = [
    nodeCertificate,
    reactCertificate,
    typescriptCertificate,
    javascriptCertificate,
    freeCodeCampCertificate,
    sqlCodeAcademyCertificate,
  ];

  return (
    <EducationWrapper>
      <TextSectionsContainer ref={educationRef}>
        <h1>Education</h1>
        <p>
          Developing effective learning strategies has been fundamental in
          allowing me to fully digest the - at times overwhelming - amount of
          information contained throughout the numerous courses and tutorials
          I've taken.
        </p>
        <p>
          I've found by challenging myself to code first whenever possible,
          taking detailed notes and utilizing the 'rubber ducky' method that I'm
          able to better understand and retain knowledge. This approach has been
          key to maintaining consistent progress, positivity and motivation;
        </p>
      </TextSectionsContainer>
      <ImagesContainer>
        <Image
          src={nodeCertificate}
          alt="certificate"
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: certificates,
            })
          }
        />
        <Image
          src={typescriptCertificate}
          alt="certificate"
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: certificates,
              startingIndex: 1,
            })
          }
        />
        <Image
          src={reactCertificate}
          alt="certificate"
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: certificates,
              startingIndex: 2,
            })
          }
        />
        <Image
          src={javascriptCertificate}
          alt="certificate"
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: certificates,
              startingIndex: 3,
            })
          }
        />
        <Image
          src={freeCodeCampCertificate}
          alt="certificate"
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: certificates,
              startingIndex: 4,
            })
          }
        />
        <Image
          src={sqlCodeAcademyCertificate}
          alt="certificate"
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: certificates,
              startingIndex: 5,
            })
          }
        />
      </ImagesContainer>
    </EducationWrapper>
  );
}
