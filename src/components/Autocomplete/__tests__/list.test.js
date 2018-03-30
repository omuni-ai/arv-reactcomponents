import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Allows Input", done => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    let list;

    input.simulate("focus");
    list = wrapper.find(".nwc-autocomplete-list-container");
    expect(list.length).toBe(1);

    input.simulate("blur");

    setTimeout(() => {
      list = wrapper.find(".nwc-autocomplete-list-container");
      expect(list.length).toBe(1);
      done();
    }, 300);
  });

  it("List Item Click", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    const list = wrapper.find(".autocomplete-listitems");
    const firstItem = list.at(0);

    firstItem.simulate("click");

    expect(input.instance().value).toBe("Arrow");
  });
});
