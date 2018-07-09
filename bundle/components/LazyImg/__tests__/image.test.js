import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

const mockGetBoundClientRect = (
  top,
  right,
  bottom,
  left,
  width,
  height,
) => () => ({
  top,
  right,
  bottom,
  left,
  width,
  height,
});

describe("Root Component Tests", () => {
  let mounted;
  beforeEach(() => {
    mounted = mount(<TestComponent />);
  });

  it("Image index change", done => {
    setTimeout(() => {
      mounted.update();

      mounted.instance().changeIndex();

      done();
    }, 300);
  });

  it("Image On Load", done => {
    setTimeout(() => {
      mounted.update();

      const image = mounted.find(".nw-carouselexample-img1 img");

      image.simulate("load");

      done();
    }, 300);
  });

  it("Image On Fail", done => {
    setTimeout(() => {
      mounted.update();

      const image = mounted.find(".nw-carouselexample-img1 img");

      image.simulate("error");
      done();
    }, 300);
  });

  it("Image in Viewport 1", done => {
    mounted
      .find("div")
      .at(0)
      .instance().getBoundingClientRect = mockGetBoundClientRect(
      0,
      300,
      800,
      0,
      300,
      400,
    );
    setTimeout(() => {
      mounted.update();
      mounted
        .find("div.nw-carouselexample-img3")
        .instance().getBoundingClientRect = mockGetBoundClientRect(
        301,
        298,
        398,
        1,
        298,
        398,
      );
      mounted
        .find("div.nw-carouselexample-img4")
        .instance().getBoundingClientRect = mockGetBoundClientRect(
        301,
        298,
        398,
        1,
        298,
        398,
      );

      global.window.dispatchEvent(new Event("scroll"));

      done();
    }, 300);
  });

  it("Image in Viewport 2", done => {
    mounted
      .find("div")
      .at(0)
      .instance().getBoundingClientRect = mockGetBoundClientRect(
      0,
      300,
      400,
      0,
      300,
      400,
    );
    setTimeout(() => {
      mounted.update();
      mounted
        .find("div.nw-carouselexample-img3")
        .instance().getBoundingClientRect = mockGetBoundClientRect(
        301,
        298,
        698,
        1,
        298,
        398,
      );
      mounted
        .find("div.nw-carouselexample-img4")
        .instance().getBoundingClientRect = mockGetBoundClientRect(
        301,
        298,
        698,
        1,
        298,
        398,
      );

      global.window.dispatchEvent(new Event("scroll"));

      done();
    }, 300);
  });
});
