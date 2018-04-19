import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  test("Allows Input", done => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

    input.simulate("focus");
    input.simulate("change", { target: { value: "A" } });

    input.simulate("keyDown", {
      key: "A",
    });

    expect(input.instance().value).toBe("A");

    setTimeout(() => {
      input.simulate("keyDown", {
        key: "A",
      });

      expect(input.instance().value).toBe("");
      done();
    }, 800);
  });

  it("On Enter Select Value", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

    input.simulate("focus");
    input.simulate("change", { target: { value: "Del" } });

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

    expect(wrapper.instance().state.selectSelectedValue).toBe("Delhi");
  });

  it("On ArrowDown Select Value", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

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

    setTimeout(() => {
      expect(input.instance().value).toBe("Delhi");
    }, 200);
  });

  it("On ArrowUp Select Value", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

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

    setTimeout(() => {
      expect(input.instance().value).toBe("Levis");
    }, 200);
  });

  it("On Tab Select Value", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

    input.simulate("focus");

    input
      .simulate("keyDown", {
        key: "ArrowUp",
      })
      .simulate("keyDown", {
        key: "ArrowUp",
      });
    input.simulate("keyDown", {
      key: "Tab",
      target: {
        blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        },
      },
    });

    setTimeout(() => {
      expect(input.instance().value).toBe("Levis");
    }, 200);
  });

  it("No Action on left - right Arrows", () => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("#select-test input.nwc-inp");

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

    expect(input.instance().value).toBe("");
  });
});
