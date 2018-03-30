import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

describe("Root Component Tests", () => {
  it("Allows Input", done => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("change", { target: { value: "A" } });
    input.simulate("keyDown", {
      key: "A",
    });

    expect(input.instance().value).toBe("A");

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

  it("On ArrowDown Select Value", done => {
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

    done();
  });

  it("On ArrowUp Select Value", done => {
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

    done();
  });

  it("No Action on left - right Arrows", done => {
    const wrapper = mount(<TestComponent />);
    const input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("keyDown", {
      key: "ArrowLeft",
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

    expect(input.instance().value).toBe("Arrow");

    done();
  });
});
