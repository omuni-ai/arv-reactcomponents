import React from "react";

import renderer from "react-test-renderer";

import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import TestComponent from "./test.component";

describe("Root Component Tests", () => {
  it("Matches Shallow SnapShot", done => {
    expect(shallowToJson(shallow(<TestComponent />))).toMatchSnapshot();
    done();
  });

  it("Matches Rendered SnapShot", done => {
    expect(renderer.create(<TestComponent />).toJSON()).toMatchSnapshot();
    done();
  });

  it("On Enter Select Value", done => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("change", { target: { value: "Arr" } });
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        },
      },
    });

    expect(input.instance().value).toBe("Arrow");

    done();
  });
});
