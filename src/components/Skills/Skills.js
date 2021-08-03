import React from "react";
import {
  SkillContainer,
  SkillsContainer,
  SkillsWrapper,
  Intersection,
  TriangleIntersection,
} from "./SkillsStyles";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import uxui from "../../assets/uxui.png";

export default function Skills({ skillsRef }) {
  return (
    <SkillsWrapper>
      {/* <Intersection>
        <TriangleIntersection />
      </Intersection> */}
      <SkillsContainer>
        <SkillContainer ref={skillsRef}>
          <img src={frontend} alt="front-end icon" />
          <h3>Front-end</h3>
          <p>
            JavaScript, ES6+, TypeScript, React, Redux, ApolloClient, HTML,
            CSS/styled-components.
          </p>
        </SkillContainer>
        <SkillContainer>
          <img src={backend} alt="back-end icon" />
          <h3>Back-end</h3>
          <p>Node, Express, GraphQL, SQL, MongoDb, Python, Django.</p>
        </SkillContainer>
        <SkillContainer>
          <img src={uxui} alt="u x u i icon" />
          <h3>Design</h3>
          <p>Figma, Inkscape, Pinta, Gimp.</p>
        </SkillContainer>
      </SkillsContainer>
    </SkillsWrapper>
  );
}
