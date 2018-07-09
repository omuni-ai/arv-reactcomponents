import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import TestComponent from "../test.component";
import * as constants from "../../constants";

import Modal from "../";

describe("Root Component Tests", () => {
  beforeAll(() => {
    Object.defineProperty(global.window.history, "state", {
      value: {},
    });
  });

  it("Matches Shallow SnapShot", () => {
    expect(shallowToJson(shallow(<TestComponent />))).toMatchSnapshot();
  });

  it("Matches Mounted SnapShot", done => {
    const mounted = mount(<TestComponent />);

    expect(Modal.isModalOpen()).toBe(false);
    mounted.instance().showHaiMsg(true);
    expect(Modal.isModalOpen()).toBe(true);

    setTimeout(() => {
      mounted.update();
      expect(mounted).toMatchSnapshot();
      mounted.find("button.nwc-close").simulate("click");

      setTimeout(() => {
        done();
      }, 300);
    }, 300);
  });

  it("Matches Mounted SnapShot Mobile", done => {
    constants.isMobile = true;
    const mounted = mount(<TestComponent />);

    expect(Modal.isModalOpen()).toBe(false);
    mounted.instance().showHaiMsg(true);
    expect(Modal.isModalOpen()).toBe(true);

    setTimeout(() => {
      mounted.update();
      expect(mounted).toMatchSnapshot();
      mounted.find("button.nwc-close").simulate("click");

      setTimeout(() => {
        done();
      }, 300);
    }, 300);
  });

  afterEach(() => {
    constants.isMobile = false;
  });
});
