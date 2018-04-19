import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Allows Input", done => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

    let list;

    input.simulate("focus");

    setTimeout(() => {
      list = wrapper.find("#select-test .nwc-select-list-container");
      expect(list.length).toBe(1);

      input.simulate("blur");

      setTimeout(() => {
        list = wrapper.find("#select-test .nwc-select-list-container");
        expect(list.length).toBe(1);
        done();
      }, 300);
    }, 200);
  });

  it("List Item Click", done => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

    input.simulate("focus");

    setTimeout(() => {
      const list = wrapper.find("#select-test .nw-sample-select-list");
      const firstItem = list.at(0);

      firstItem.simulate("click");

      expect(wrapper.instance().state.selectSelectedValue).toBe("Delhi");
      done();
    }, 200);
  });
});
