import React from "react";
import {
  LinksContainer,
  ProjectDescription,
  ProjectTitle,
  ProjectWrapper,
  Link,
} from "./ProjectOverviewStyles";

export default function ProjectOverview({
  title,
  description,
  liveDemoLink,
  gitHubLink,
}) {
  const createLinks = (linkData, linkText) => {
    let links = [];
    if (typeof linkData === "object") {
      Object.keys(linkData).forEach((key) => {
        links.push(
          <Link
            key={key}
            href={linkData[key]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {key} {linkText}
          </Link>
        );
      });
    }
    if (typeof linkData === "string") {
      links.push(
        <Link
          key={linkData}
          href={linkData}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </Link>
      );
    }
    return links;
  };

  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <LinksContainer>
        {liveDemoLink ? createLinks(liveDemoLink, "Live-demo") : null}
        {gitHubLink ? createLinks(gitHubLink, "Git-repo") : null}
      </LinksContainer>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectWrapper>
  );
}
