import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  test("On Button Click", done => {
    const mounted = mount(<TestComponent />);

    mounted.find("button.nwc-btn-secondary").simulate("click");

    setTimeout(done, 100);
  });
});
