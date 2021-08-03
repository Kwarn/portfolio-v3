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
          I practice a methodical strategy to learning which has been
          fundamental in maintaining consistent progress and positivity, while
          also greatly improving my understanding and knowledge retention.
        </p>
        <br />
        <p>
          This is done through challenging myself to attempt solving problems
          before immediately searching for a solution, I've found this to better
          train my logical reasoning abilities and makes me better aware of the
          value of any solutions I later find.
        </p>
        <br />
        <p>
          As a rule, I avoid copy/pasting code and in the rare event that I do,
          either I wrote it or I fully understand what it is doing. Finally I
          take detailed notes and utilize the 'rubber ducky' method.
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
