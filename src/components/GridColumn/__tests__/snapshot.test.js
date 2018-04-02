import React from "react";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import { GridColumnSuccessTest, GridColumnErrorTest } from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", done => {
    expect(shallowToJson(shallow(<GridColumnSuccessTest />))).toMatchSnapshot();
    expect(shallowToJson(shallow(<GridColumnErrorTest />))).toMatchSnapshot();
    done();
  });

  it("Matches Rendered SnapShot", done => {
    const successMounted = mount(<GridColumnSuccessTest />);
    const errorMounted = mount(<GridColumnErrorTest />);

    setTimeout(() => {
      expect(successMounted.find(".nwc-grid-col").length).toBe(1);
      expect(successMounted).toMatchSnapshot();

      expect(errorMounted.find(".nwc-grid-col").length).toBe(2);
      expect(errorMounted).toMatchSnapshot();

      done();
    }, 300);
  });
});
