import React from "react";
import {
  ProjectsWrapper,
  Background,
  Project,
  TextContainer,
  ProjectSmall,
  ProjectsFooter,
} from "./ProjectsStyles";
import projectsBackground from "../../assets/background5.jpg";
import { projectData } from "./ProjectData";

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Background src={projectsBackground} alt="projects-background" />
      <TextContainer>
        <h1>Projects</h1>
        <p>
          Build from the ground up with the goal of achieving a strong grasp of
          how popular design principles and components are implimented, these
          projects demonstrate multiple approaches to building front & back-end
          systems.
        </p>
      </TextContainer>
      {projectData.map((project, i) => (
        <Project>
          <h2>{project.title}</h2>
          <p>{project.previewTechStack}</p>
        </Project>
      ))}
      <ProjectsFooter>
        A full list of my projects can be found{" "}
        <a href="https://github.com/Kwarn?tab=repositories" target="_blank">
          Here
        </a>
        .
      </ProjectsFooter>
    </ProjectsWrapper>
  );
}
