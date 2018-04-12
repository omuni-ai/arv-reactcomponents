import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Allows Input", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("change", { target: { value: "A" } });
    input.simulate("keyDown", {
      key: "A",
    });

    expect(input.instance().value).toBe("A");
  });

  it("On Enter Select Value", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("change", { target: { value: "Arr" } });
    input.simulate("keyDown");
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
  });

  it("On ArrowDown Select Value", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");

    input
      .simulate("keyDown", {
        key: "ArrowDown",
      })
      .simulate("keyDown", {
        key: "ArrowDown",
      })
      .simulate("keyDown", {
        key: "ArrowDown",
      })
      .simulate("keyDown", {
        key: "ArrowDown",
      });

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
  });

  it("On ArrowUp Select Value", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    input
      .simulate("keyDown", {
        key: "ArrowUp",
      })
      .simulate("keyDown", {
        key: "ArrowUp",
      });
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        },
      },
    });

    expect(input.instance().value).toBe("Levis");
  });

  it("No Action on left - right Arrows", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        },
      },
    });

    expect(input.instance().value).toBe("");

    input.simulate("focus");
    input.simulate("change", { target: { value: "" } });
    input.simulate("keyDown", {
      key: "ArrowRight",
    });
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        },
      },
    });

    console.log(wrapper.html());
    expect(input.instance().value).toBe("");
  });
});
