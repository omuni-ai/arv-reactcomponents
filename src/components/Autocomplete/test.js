import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import TestComponent from "./testcomponent";

describe("Root Component Tests", () => {
  beforeAll(() => shallow(React.createElement(TestComponent)));

  it("To Match SnapShot", () => {
    expect(shallowToJson(TestComponent)).toMatchSnapshot();
  });
});
