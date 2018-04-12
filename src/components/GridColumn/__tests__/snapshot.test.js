import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import GridColumnTest from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", () => {
    expect(shallowToJson(shallow(<GridColumnTest />))).toMatchSnapshot();
  });

  it("Matches Mounted SnapShot", done => {
    const mounted = mount(<GridColumnTest />);

    setTimeout(() => {
      expect(mounted).toMatchSnapshot();
      done();
    }, 300);
  });
});
