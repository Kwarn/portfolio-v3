import apollo from "../assets/apollo.png";
import aws from "../assets/aws.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import graphql from "../assets/graphql.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import reduxsaga from "../assets/reduxsaga.png";
import sqlite3 from "../assets/sqlite3.png";
import styled from "styled-components";

const TechIcon = styled.img`
  margin: auto;
  height: 40px;
  width: auto;
  @media (min-width: 800px) {
    height: 50px;
  }
`;

export const createTechIcons = (techListString) => {
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

  let techIcons = [];
  techListString.split(", ").forEach((tech) => {
    const key = tech.toLowerCase();
    if (techs[key]) {
      techIcons.push(<TechIcon key={tech} src={techs[key]} />);
    }
  });

  return techIcons;
};

export const createLinks = (linkData) => {
  if (!linkData || linkData.length < 1 || Object.keys(linkData).length < 1)
    return "";
  let links = [];
  if (typeof linkData === "object") {
    Object.keys(linkData).forEach((key) => {
      links.push(
        <a
          key={key}
          href={linkData[key]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {key}
        </a>
      );
    });
  }
  if (typeof linkData === "string") {
    links.push(
      <a
        key={linkData}
        href={linkData}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkData}
      </a>
    );
  }
  return links;
};

const createProjectElements = (techListString, gitHubLinks, liveDemoLinks) => {
  return {
    liveDemoLinks: createLinks(liveDemoLinks),
    gitHubLinks: createLinks(gitHubLinks),
    techIcons: createTechIcons(techListString),
  };
};

export default createProjectElements;
