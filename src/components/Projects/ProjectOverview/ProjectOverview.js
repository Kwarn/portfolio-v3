import React from "react";
import { createLinks } from "../../../shared/createProjectElements";
import ProjectTechnical from "../ProjectTechnical/ProjectTechnical";

import {
  ProjectWrapper,
  ProjectImagesContainer,
  ProjectImage,
  ProjectTitle,
  LinksWrapper,
  LinksContainer,
  Link,
  ProjectDescription,
} from "./ProjectOverviewStyles";

export default function ProjectOverview({
  title,
  description,
  liveDemoLink,
  gitHubLink,
  images,
  previewTechStack,
  technicalPractices,
  modalHandler,
}) {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <LinksWrapper>
        {liveDemoLink ? (
          <LinksContainer>
            <h3>Live demo </h3>
            {createLinks(liveDemoLink)}
          </LinksContainer>
        ) : (
          ""
        )}
        {gitHubLink ? (
          <LinksContainer>
            <h3>Github repo</h3>
            {createLinks(gitHubLink)}
          </LinksContainer>
        ) : (
          ""
        )}
      </LinksWrapper>
      <ProjectDescription>{description}</ProjectDescription>
      {window.innerWidth >= 1200 ? (
        <ProjectTechnical
          previewTechStack={previewTechStack}
          technicalPractices={technicalPractices}
        />
      ) : null}
    </ProjectWrapper>
  );
}
