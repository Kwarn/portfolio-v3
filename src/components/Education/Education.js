import React from "react";
import {
  EducationWrapper,
  TextSectionsContainer,
  ImagesContainer,
  Image,
  EducationHeader,
} from "./EducationStyles";
import educationBackground from "../../assets/studyingBackground2.jpg";
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
      <EducationHeader background={educationBackground}>
        <h1>Education</h1>
      </EducationHeader>
      <TextSectionsContainer ref={educationRef}>
        <p>
          I've found by challenging myself to code first wherever possible,
          avoiding copy/pasting of code, taking detailed notes and utilizing the
          'rubber ducky' method, I'm able to better absorb and retain knowledge.
          This approach has been key to maintaining consistent progress and
          positivity.
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
