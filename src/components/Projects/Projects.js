import React from "react";
import {
  ProjectsWrapper,
  Background,
  ProjectTile,
  TextContainer,
  ProjectsFooter,
} from "./ProjectsStyles";
import projectsBackground from "../../assets/background5.jpg";
import { projectData } from "./ProjectData";
import Project from "./Project/Project";

export default function Projects({ projectsRef, modalHandler }) {
  const fullProjectElements = projectData.map((p) => (
    <Project key={p.title} {...p} />
  ));

  return (
    <ProjectsWrapper>
      <Background src={projectsBackground} alt="projects-background" />
      <TextContainer ref={projectsRef}>
        <h1>Projects</h1>
        <p>
          Built from the ground up with the goal of achieving a strong grasp of
          how popular design principles and components are implimented, these
          projects demonstrate multiple approaches to building front & back-end
          systems.
        </p>
      </TextContainer>
      {projectData.map((project, i) => (
        <ProjectTile
          key={`${project.title} tile`}
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: [[fullProjectElements[i]], ...project.images],
            })
          }
        >
          <h2>{project.title}</h2>
          <p>{project.previewTechStack}</p>
        </ProjectTile>
      ))}
      <ProjectsFooter>
        A full list of my projects can be found{" "}
        <a
          href="https://github.com/Kwarn?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
        .
      </ProjectsFooter>
    </ProjectsWrapper>
  );
}
