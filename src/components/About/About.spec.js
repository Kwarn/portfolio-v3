import React from "react";
import { shallow } from "enzyme";
import About from "./About";
import {
  AboutWrapper,
  ProfileImage,
  AboutMeHeader,
  AboutMeText,
} from "./AboutStyles";

describe("About", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<About />)));

  it("should render the About Wrapper", () => {
    expect(wrapper.find(AboutWrapper).length).toEqual(1);
  });
  it("should render ProfileImage", () => {
    expect(wrapper.find(ProfileImage).length).toEqual(1);
  });
  it("should render AboutMeHeader", () => {
    expect(wrapper.find(AboutMeHeader).length).toEqual(1);
  });
  it("should render AboutMeText", () => {
    expect(wrapper.find(AboutMeText).length).toEqual(1);
  });
});
