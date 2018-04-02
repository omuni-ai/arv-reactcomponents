import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import {
  GridContainerSuccessTest,
  GridContainerErrorTest,
} from "../test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", done => {
    expect(
      shallowToJson(shallow(<GridContainerSuccessTest />)),
    ).toMatchSnapshot();
    expect(
      shallowToJson(shallow(<GridContainerErrorTest />)),
    ).toMatchSnapshot();
    done();
  });

  it("Matches Mounted SnapShot", done => {
    const successMounted = mount(<GridContainerSuccessTest />);
    const errorMounted = mount(<GridContainerErrorTest />);

    setTimeout(() => {
      expect(successMounted).toMatchSnapshot();

      expect(errorMounted).toMatchSnapshot();

      done();
    }, 300);
  });
});
