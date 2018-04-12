import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Input check if validation works", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#sample-text-input").find("input");

    input.simulate("change", { target: { value: "A" } });

    input.simulate("change", { target: { value: "" } });

    input.simulate("change", { target: { value: 1 } });
  });

  it("Input checkbox lable click", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input#sample-checkbox");

    input.simulate("change");
  });

  it("Input checkbox input change", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input#sample-checkbox");

    input.simulate("keydown");
  });

  it("Input radio lable click", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input#sample-radio");

    input.simulate("change", {
      key: "A",
    });
  });

  it("Input radio input change", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input#sample-radio");

    input.simulate("keydown");
  });

  it("Input number value change check without maxLength", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input#sample-number-nomaxlength");

    input.simulate("change", {
      key: 1234,
    });

    input.simulate("change", {
      key: 567,
    });
  });

  it("Input number value change check with maxLength", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input#sample-number");

    input.simulate("change", {
      key: 1234,
    });

    input.simulate("change", {
      key: 567,
    });
  });
});
