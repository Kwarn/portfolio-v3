import React from "react";
import { createTechIcons } from "../../../shared/createProjectElements";
import {
  ProjectTechnicalWrapper,
  TechHeader,
  TechIconsContainer,
  TechText,
} from "./ProjectTechnicalStyles";

export default function ProjectTechnical({
  previewTechStack,
  technicalPractices,
}) {
  let techIcons = createTechIcons(previewTechStack);

  return (
    <ProjectTechnicalWrapper>
      <TechHeader>Technical Info</TechHeader>
      {window.innerWidth >= 1200 ? (
        <TechText>{technicalPractices}</TechText>
      ) : (
        <TechIconsContainer>{techIcons}</TechIconsContainer>
      )}
      {window.innerWidth < 1200 ? (
        <TechText>{technicalPractices}</TechText>
      ) : (
        <TechIconsContainer>{techIcons}</TechIconsContainer>
      )}
    </ProjectTechnicalWrapper>
  );
}
