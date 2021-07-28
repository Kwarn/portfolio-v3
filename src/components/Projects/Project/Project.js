import React from "react";
import {
  LinksContainer,
  ProjectDescription,
  ProjectTitle,
  ProjectWrapper,
  Link,
} from "./ProjectStyles";

export default function Project({
  title,
  description,
  previewTechStack,
  technicalPractices,
  liveDemoLink,
  gitHubLink,
}) {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <LinksContainer>
        {liveDemoLink ? (
          <Link href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            Live-Demo
          </Link>
        ) : null}
        {gitHubLink ? (
          <Link href={gitHubLink} target="_blank" rel="noopener noreferrer">
            GitHub-Repo
          </Link>
        ) : null}
      </LinksContainer>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectWrapper>
  );
}
