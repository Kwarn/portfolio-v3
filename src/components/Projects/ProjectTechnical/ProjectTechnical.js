import React from "react";
import {
  ProjectTechnicalWrapper,
  TechHeader,
  TechIcon,
  TechIconsContainer,
  TechText,
} from "./ProjectTechnicalStyles";
import apollo from "../../../assets/apollo.png";
import aws from "../../../assets/aws.png";
import css from "../../../assets/css.png";
import firebase from "../../../assets/firebase.png";
import graphql from "../../../assets/graphql.png";
import javascript from "../../../assets/javascript.png";
import mongodb from "../../../assets/mongodb.png";
import node from "../../../assets/node.png";
import python from "../../../assets/python.png";
import react from "../../../assets/react.png";
import redux from "../../../assets/redux.png";
import reduxsaga from "../../../assets/reduxsaga.png";
import sqlite3 from "../../../assets/sqlite3.png";

export default function ProjectTechnical({
  previewTechStack,
  technicalPractices,
}) {
  const techs = {
    apollo: apollo,
    aws: aws,
    css: css,
    firebase: firebase,
    graphql: graphql,
    javascript: javascript,
    mongodb: mongodb,
    node: node,
    python: python,
    react: react,
    redux: redux,
    "redux-saga": reduxsaga,
    sqlite3: sqlite3,
  };

  const techIcons = previewTechStack.split(", ").map((tech) => {
    const key = tech.toLowerCase();
    if (techs[key]) {
      return <TechIcon key={tech} src={techs[key]} />;
    }
  });

  return (
    <ProjectTechnicalWrapper>
      <TechHeader>Technical Info</TechHeader>
      <TechIconsContainer>{techIcons}</TechIconsContainer>
      <TechText>{technicalPractices}</TechText>
    </ProjectTechnicalWrapper>
  );
}
