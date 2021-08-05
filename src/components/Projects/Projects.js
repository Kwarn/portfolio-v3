import React, { useState } from "react";
import { projectData } from "./ProjectData";
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import ProjectTechnical from "./ProjectTechnical/ProjectTechnical";
import projectsBackground from "../../assets/background5.jpg";
import FullProject from "./FullProject/FullProject";
import {
  ProjectsWrapper,
  ProjectsHeader,
  TextContainer,
  ProjectTile,
  ProjectsFooter,
  ProjectsTileContainer,
  ProjectTileTextContainer,
  MainContent,
} from "./ProjectsStyles";

export default function Projects({ projectsRef, modalHandler }) {
  const [selectedProject, setSelectedProject] = useState(0);
  const [hoveredElementIndex, setHoveredElementIndex] = useState(null);

  const hoverHandler = (elementIndex) => {
    if (selectedProject === elementIndex) return;
    setHoveredElementIndex(elementIndex);
  };

  const ProjectOverviews = [];
  const ProjectTechnicals = [];
  const FullProjectElements = [];

  projectData.forEach((p) => {
    FullProjectElements.push(
      <FullProject modalHandler={modalHandler} {...p} />
    );
  });

  projectData.forEach((p) => {
    ProjectOverviews.push(
      <ProjectOverview
        key={`${p.title} overview`}
        {...p}
        modalHandler={modalHandler}
      />
    );
    ProjectTechnicals.push(
      <ProjectTechnical
        key={`${p.title} technical info`}
        previewTechStack={p.previewTechStack}
        technicalPractices={p.technicalPractices}
      />
    );
  });

  return (
    <ProjectsWrapper>
      <ProjectsHeader src={projectsBackground} alt="projects background" />
      <TextContainer ref={projectsRef}>
        <h1>Projects</h1>
        <p>
          Built from the ground up to achieve a strong understanding of the
          implementation of popular components and design principles.
        </p>
      </TextContainer>
      <ProjectsTileContainer>
        {projectData.map((project, i) => (
          <ProjectTile
            key={`${project.title} tile`}
            gridRowStart={i + 1}
            isSelected={selectedProject === i}
            isHovered={hoveredElementIndex === i}
            isNextProject={!(selectedProject > 0) && selectedProject === i - 1}
            onMouseEnter={() => setHoveredElementIndex(i)}
            onMouseLeave={() => setHoveredElementIndex(null)}
            onClick={() =>
              window.innerWidth < 1200
                ? modalHandler({
                    isVisible: true,
                    contentArray: [
                      [ProjectOverviews[i]],
                      [ProjectTechnicals[i]],
                      ...project.images,
                    ],
                  })
                : setSelectedProject(i)
            }
          >
            <ProjectTileTextContainer>
              <h2>{project.title}</h2>
              <p>{project.previewTechStack}</p>
            </ProjectTileTextContainer>
          </ProjectTile>
        ))}
        <MainContent>{FullProjectElements[selectedProject]}</MainContent>
      </ProjectsTileContainer>
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
