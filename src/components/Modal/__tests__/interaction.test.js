import React from "react";
import { mount } from "enzyme";

import TestComponent from "../test.component";

import Modal from "../";

describe("Root Component Tests", () => {
  test("Escape on Close", done => {
    const mounted = mount(<TestComponent />);

    mounted.instance().showHaiMsg(true);

    mounted.update();

    mounted.find("div.nwc-modal-container").simulate("keydown", {
      key: "Escape",
    });

    setTimeout(() => {
      expect(Modal.isModalOpen()).toBe(false);

      done();
    }, 300);
  });
});
