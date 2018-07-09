import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  let mounted;
  beforeEach(() => {
    mounted = mount(<TestComponent />);
  });

  it("Matches Shallow SnapShot", () => {
    expect(shallowToJson(shallow(<TestComponent />))).toMatchSnapshot();
  });

  it("Matches Mounted SnapShot", done => {
    setTimeout(() => {
      mounted.update();
      global.window.dispatchEvent(new Event("scroll"));

      setTimeout(() => {
        mounted.update();
        expect(mounted).toMatchSnapshot();

        done();
      }, 1000);
    }, 300);
  });

  it("Unmount", () => {
    mounted.unmount();
  });
});
