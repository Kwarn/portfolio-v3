import React from "react";
import { SkillContainer, SkillsContainer, SkillsWrapper } from "./SkillsStyles";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import uxui from "../../assets/uxui.png";
import {
  Intersection,
  TriangleIntersectionLeft,
  TriangleIntersectionRight,
} from "./SkillsStyles";

export default function Skills() {
  return (
    <SkillsWrapper>
      <SkillsContainer>
        <SkillContainer>
          <img src={frontend} alt="front-end" />
          <h3>Front-end</h3>
          <p>
            JavaScript ES6+, TypeScript, React, Redux, ApolloClient, HTML, CSS.
          </p>
        </SkillContainer>
        <SkillContainer>
          <img src={backend} alt="back-end" />
          <h3>Back-end</h3>
          <p>Node, Express, GraphQL, SQL, Apollo, MongoDb</p>
        </SkillContainer>
        <SkillContainer>
          <img src={uxui} alt="uxui" />
          <h3>Design</h3>
          <p>Figma, Inkscape, Pinta, Gimp.</p>
        </SkillContainer>
      </SkillsContainer>
      <Intersection>
        <TriangleIntersectionLeft />
        <TriangleIntersectionRight />
      </Intersection>
    </SkillsWrapper>
  );
}
