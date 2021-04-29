import React from "react";
import { createMount } from "@material-ui/core/test-utils";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "./NavBar";

configure({ adapter: new Adapter() });

it("renders with correct title", () => {
  const mount = createMount();
  const wrapper = mount(<NavBar title="Testing is super cool." />);

  expect(wrapper.find("h6").text()).toEqual("Testing is super cool.");
});
