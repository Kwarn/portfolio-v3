import React, { useEffect, useState } from "react";
import createProjectElements, {
  createTechIcons,
} from "../../../shared/createProjectElements";
import {
  DescriptionsContainer,
  FullProjectWrapper,
  GitHubHeader,
  GitHubLinksContainer,
  LiveDemoHeader,
  LiveDemoLinksContainer,
  ProjectImage,
  ProjectImagesContainer,
  TechIconsContainer,
  TopLeftGrid,
  TechDescription,
  ViewImages,
} from "./FullProjectStyles";

export default function FullProject({
  title,
  description,
  liveDemoLink,
  gitHubLink,
  images,
  previewTechStack,
  technicalPractices,
  modalHandler,
}) {
  const { techIcons, gitHubLinks, liveDemoLinks } = createProjectElements(
    previewTechStack,
    gitHubLink,
    liveDemoLink
  );

  const ImageElements = images.map((img, i) => (
    <ProjectImage
      key={`project-image-${i}`}
      imageCount={images.length}
      src={img}
      alt={`Project-pic-${i}`}
      onClick={() =>
        modalHandler({
          isVisible: true,
          contentArray: images,
          startingIndex: i,
        })
      }
    />
  ));

  const hasGitLinks = gitHubLinks.length > 0;
  const hasDemoLinks = liveDemoLinks.length > 0;
  const doBothLinksExist = hasGitLinks && hasDemoLinks;

  const demoHeader = hasDemoLinks ? (
    <LiveDemoHeader doBothLinksExist={doBothLinksExist}>
      Live Demo
    </LiveDemoHeader>
  ) : (
    ""
  );
  const demoLinks = hasDemoLinks ? (
    <LiveDemoLinksContainer doBothLinksExist={doBothLinksExist}>
      {liveDemoLinks}
    </LiveDemoLinksContainer>
  ) : (
    ""
  );

  const gitHeader = hasGitLinks ? (
    <GitHubHeader doBothLinksExist={doBothLinksExist}>GitHub</GitHubHeader>
  ) : (
    ""
  );
  const gitLinks = hasGitLinks ? (
    <GitHubLinksContainer doBothLinksExist={doBothLinksExist}>
      {gitHubLinks}
    </GitHubLinksContainer>
  ) : (
    ""
  );

  console.log(window.innerWidth);

  return (
    <FullProjectWrapper>
      <ProjectImagesContainer>{ImageElements}</ProjectImagesContainer>
      <TopLeftGrid>
        <TechIconsContainer>{techIcons}</TechIconsContainer>
        {demoHeader}
        {demoLinks}
        {gitHeader}
        {gitLinks}
      </TopLeftGrid>

      <DescriptionsContainer>
        <p>{description}</p>
        <h3>The technical stuff</h3>
        <p>{technicalPractices}</p>
      </DescriptionsContainer>
    </FullProjectWrapper>
  );
}
