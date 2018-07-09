import React from "react";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", () => {
    expect(shallowToJson(shallow(<TestComponent />))).toMatchSnapshot();
  });

  it("Matches Mounted SnapShot", done => {
    const mounted = mount(<TestComponent />);
    setTimeout(() => {
      expect(mounted).toMatchSnapshot();
      done();
    }, 700);
  });
});
