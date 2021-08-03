import React from "react";
import {
  ProjectsWrapper,
  ProjectsHeader,
  ProjectTile,
  TextContainer,
  ProjectsFooter,
} from "./ProjectsStyles";
import projectsBackground from "../../assets/background5.jpg";
import { projectData } from "./ProjectData";
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import ProjectTechnical from "./ProjectTechnical/ProjectTechnical";

export default function Projects({ projectsRef, modalHandler }) {
  const ProjectOverviews = [];
  const ProjectTechnicals = [];

  projectData.forEach((p) => {
    ProjectOverviews.push(
      <ProjectOverview key={`${p.title} overview`} {...p} />
    );
    ProjectTechnicals.push(
      <ProjectTechnical
        key={`${p.title} technical`}
        previewTechStack={p.previewTechStack}
        technicalPractices={p.technicalPractices}
      />
    );
  });

  return (
    <ProjectsWrapper>
      <ProjectsHeader src={projectsBackground} alt="projects-background" />
      <TextContainer ref={projectsRef}>
        <h1>Projects</h1>
        <p>
          Built from the ground up to achieve a strong understanding of the
          implementation of popular components and design principles.
        </p>
      </TextContainer>
      {projectData.map((project, i) => (
        <ProjectTile
          key={`${project.title} tile`}
          onClick={() =>
            modalHandler({
              isVisible: true,
              contentArray: [
                [ProjectOverviews[i]],
                [ProjectTechnicals[i]],
                ...project.images,
              ],
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
