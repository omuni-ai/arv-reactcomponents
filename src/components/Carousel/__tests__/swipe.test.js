import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Navigation Swipe work", () => {
    const mounted = mount(<TestComponent />);
    const wrapper = mounted.find(".nw-carouselexample").at(1);

    // Right Swipe
    wrapper.simulate("touchstart", {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
    });
    wrapper.simulate("touchmove", {
      touches: [
        {
          clientX: 51,
          clientY: 51,
        },
      ],
    });
    wrapper.simulate("touchend");
    wrapper.simulate("touchend");

    // Left Swipe
    wrapper.simulate("touchstart", {
      touches: [
        {
          clientX: 51,
          clientY: 51,
        },
      ],
    });
    wrapper.simulate("touchmove", {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
    });
    wrapper.simulate("touchend");

    // MultiTouch Swipe
    wrapper.simulate("touchstart", {
      touches: [
        {
          clientX: 30,
          clientY: 30,
        },
        {
          clientX: 40,
          clientY: 40,
        },
      ],
    });
    wrapper.simulate("touchmove", {
      touches: [
        {
          clientX: 10,
          clientY: 10,
        },
        {
          clientX: 50,
          clientY: 50,
        },
      ],
    });
    wrapper.simulate("touchend");
  });
});
