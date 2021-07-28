import React from "react";
import { SkillContainer, SkillsContainer, SkillsWrapper } from "./SkillsStyles";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import uxui from "../../assets/uxui.png";
import { Intersection, TriangleIntersection } from "./SkillsStyles";

export default function Skills({ skillsRef }) {
  return (
    <SkillsWrapper>
      <SkillsContainer>
        <SkillContainer ref={skillsRef}>
          <img src={frontend} alt="front-end" />
          <h3>Front-end</h3>
          <p>
            JavaScript ES6+, TypeScript, React, Redux, ApolloClient, HTML,
            CSS/styled-components.
          </p>
        </SkillContainer>
        <SkillContainer>
          <img src={backend} alt="back-end" />
          <h3>Back-end</h3>
          <p>Node, Express, GraphQL, SQL, Apollo, MongoDb, Python, Django.</p>
        </SkillContainer>
        <SkillContainer>
          <img src={uxui} alt="uxui" />
          <h3>Design</h3>
          <p>Figma, Inkscape, Pinta, Gimp.</p>
        </SkillContainer>
      </SkillsContainer>
      <Intersection>
        <TriangleIntersection />
      </Intersection>
    </SkillsWrapper>
  );
}
