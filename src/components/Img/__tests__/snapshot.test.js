import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import ImgTest from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", done => {
    expect(shallowToJson(shallow(<ImgTest />))).toMatchSnapshot();
    done();
  });

  it("Matches Mounted SnapShot", done => {
    const mounted = mount(<ImgTest />);

    setTimeout(() => {
      expect(mounted).toMatchSnapshot();
      done();
    }, 300);
  });
});
