import React from "react";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", done => {
    expect(shallowToJson(shallow(<TestComponent />))).toMatchSnapshot();
    done();
  });

  it("Matches Mounted SnapShot", done => {
    expect(mount(<TestComponent />)).toMatchSnapshot();
    done();
  });
});
