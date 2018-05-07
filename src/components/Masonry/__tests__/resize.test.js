import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  const windowInnerWidth = global.window.innerWidth;
  beforeEach(() => {
    mount(<TestComponent />);
  });

  it("Resize cols adjust properly", done => {
    setTimeout(() => {
      global.window.innerWidth = 1201;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  it("Resize cols adjust properly", done => {
    setTimeout(() => {
      global.window.innerWidth = 993;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  it("Resize cols adjust properly", done => {
    setTimeout(() => {
      global.window.innerWidth = 769;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  it("Resize cols adjust properly", done => {
    setTimeout(() => {
      global.window.innerWidth = 500;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  afterEach(() => {
    global.window.innerWidth = windowInnerWidth;
  });
});
