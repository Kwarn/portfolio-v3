import React from "react";
import {
  LinksContainer,
  ProjectDescription,
  ProjectTitle,
  ProjectWrapper,
  LinksWrapper,
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
    </ProjectWrapper>
  );
}
