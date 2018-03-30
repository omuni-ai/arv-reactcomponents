import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", done => {
    expect(shallowToJson(shallow(<TestComponent />))).toMatchSnapshot();
    done();
  });

  it("Matches Rendered SnapShot", done => {
    expect(renderer.create(<TestComponent />).toJSON()).toMatchSnapshot();
    done();
  });
});
