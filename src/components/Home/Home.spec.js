import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import {
  HomeWrapper,
  Background,
  SocialIconsContainer,
  SocialIcon,
  HelloText,
  MenuOptionsContainer,
  MenuOption,
  DownArrow,
  WelcomeElementsContainer,
  TriangleIntersectionLeft,
  TriangleIntersectionRight,
  Intersection,
} from "./HomeStyles";

describe("Home", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  // render tests
  it("should render the HomeWrapper", () => {
    expect(wrapper.find(HomeWrapper).length).toEqual(1);
  });
  it("should render the background", () => {
    expect(wrapper.find(Background).length).toEqual(1);
  });
  it("should render the SocialIconsContainer", () => {
    expect(wrapper.find(SocialIconsContainer).length).toEqual(1);
  });
  it("should render the SocialIcons", () => {
    expect(wrapper.find(SocialIcon).length).toEqual(3);
  });
  it("should render Hello text", () => {
    expect(wrapper.find(HelloText).length).toEqual(1);
    expect(wrapper.find(HelloText).text()).toContain("HELLO");
  });
  it("should render MenuOptionsContainer", () => {
    expect(wrapper.find(MenuOptionsContainer).length).toEqual(1);
  });
  it("should render MenuOptions", () => {
    expect(wrapper.find(MenuOption).length).toEqual(4);
  });
  it("should render downArrow", () => {
    expect(wrapper.find(DownArrow).length).toEqual(1);
  });
  it("should render Intersection", () => {
    expect(wrapper.find(Intersection).length).toEqual(1);
  });
  it("should render TriagleIntersectionLeft", () => {
    expect(wrapper.find(TriangleIntersectionLeft).length).toEqual(1);
  });
  it("should render TriagleIntersectionRight", () => {
    expect(wrapper.find(TriangleIntersectionRight).length).toEqual(1);
  });
});
