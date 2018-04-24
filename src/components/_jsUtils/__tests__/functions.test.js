import React from "react";
import { mount } from "enzyme";

import Utils from "../";
import * as constants from "../../constants";

const rAF = global.window.requestAnimationFrame;
const cAF = global.window.cancelAnimationFrame;
const rIC = global.window.requestIdleCallback;
const cIC = global.window.cancelIdleCallback;

const mockGetBoundClientRect = (
  top,
  right,
  bottom,
  left,
  width,
  height,
) => () => ({
  top,
  right,
  bottom,
  left,
  width,
  height,
});

describe("fixScroll", () => {
  test("Window Fix and Unfix", () => {
    global.window.scrollY = 300;

    Utils.fixScroll();
    Utils.unFixScroll();
  });
});

describe("getBoundClientRect", () => {
  test("Empty object passed", () => {
    expect(Utils.getBoundClientRect()).toBe(null);
  });
});

describe("isTouch function", () => {
  test("istouch test", () => {
    expect(
      Utils.isTouch({
        sourceCapabilities: {
          firesTouchEvents: true,
        },
      }),
    ).toBe(false);

    global.window.onmsgesturechange = jest.fn();

    expect(
      Utils.isTouch({
        sourceCapabilities: {
          firesTouchEvents: true,
        },
      }),
    ).toBe(true);

    global.window.ontouchstart = jest.fn();

    expect(
      Utils.isTouch({
        sourceCapabilities: {
          firesTouchEvents: true,
        },
      }),
    ).toBe(true);
  });
});

describe("localstorage", () => {
  global.console.warning = jest.fn();
  global.console.debug = jest.fn();

  test("Test Methods", () => {
    Utils.localStorage.removeItem("key");
    expect(Utils.localStorage.getItem("key")).toBe(null);
    Utils.localStorage.setItem("key", "value");
    expect(Utils.localStorage.getItem("key")).toBe("value");
    Utils.localStorage.removeItem("key");
    expect(Utils.localStorage.getItem("key")).toBe(null);
    Utils.localStorage.setItem("key", "value");

    constants.localStorage = null;
    Utils.localStorage.setItem("key", "value");
    Utils.localStorage.getItem();
    Utils.localStorage.getItem("key");
  });
});

describe("onElementScroll", () => {
  test("Modal open and close", done => {
    Utils.onElementScroll(window, jest.fn());

    global.window.scrollY = 300;

    Utils.fixScroll();
    global.window.dispatchEvent(new Event("scroll"));

    setTimeout(() => {
      Utils.unFixScroll();
      global.window.dispatchEvent(new Event("scroll"));

      done();
    }, 300);
  });

  test("Window scroll test", done => {
    Utils.onElementScroll(window, jest.fn());

    setTimeout(() => {
      global.window.pageYOffset = 300;
      global.window.dispatchEvent(new Event("scroll"));

      setTimeout(() => {
        global.window.pageYOffset = 100;
        global.window.dispatchEvent(new Event("scroll"));

        setTimeout(() => {
          done();
        }, 100);
      }, 100);
    }, 100);
  });
});

describe("polyfill", () => {
  test("polyfill", () => {
    Utils.polyfill();
  });

  afterAll(() => {
    global.window.requestAnimationFrame = rAF;
    global.window.cancelAnimationFrame = cAF;
    global.window.requestIdleCallback = rIC;
    global.window.cancelIdleCallback = cIC;
  });
});

describe("animationFrame", () => {
  test("requestAnimationFrame", done => {
    const mockFn = jest.fn(() => 123123123);

    const requestId = Utils.requestAnimationFrame(mockFn);
    Utils.cancelAnimationFrame(requestId);

    Utils.requestAnimationFrame(mockFn);

    global.window.requestAnimationFrame = null;
    const requestId2 = Utils.requestAnimationFrame(mockFn);

    constants.requestAnimationFrameVendor = jest.fn(() => {
      mockFn();
    });
    const requestId3 = Utils.requestAnimationFrame(mockFn);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(3);

      global.window.cancelAnimationFrame = null;
      Utils.cancelAnimationFrame(requestId2);

      constants.requestAnimationFrameVendor = jest.fn(() => {
        mockFn();
      });
      Utils.cancelAnimationFrame(requestId3);

      done();
    }, 300);
  });

  afterAll(() => {
    global.window.requestAnimationFrame = rAF;
    global.window.cancelAnimationFrame = cAF;
  });
});

describe("scroll functions", () => {
  let element;
  let mounted;
  beforeAll(() => {
    element = (
      <div className="nw-parent">
        <div className="nw-child">child</div>
      </div>
    );
    mounted = mount(element);
  });

  test("scrollElemToTop", done => {
    mounted
      .find(".nw-parent")
      .instance().getBoundingClientRect = mockGetBoundClientRect(
      10,
      0,
      0,
      10,
      300,
      300,
    );
    mounted
      .find(".nw-child")
      .instance().getBoundingClientRect = mockGetBoundClientRect(
      0,
      10,
      10,
      0,
      300,
      500,
    );

    Utils.scrollElemToTop(
      mounted.find(".nw-parent").instance(),
      mounted.find(".nw-child").instance(),
    );

    Utils.scrollElemToTop(
      mounted.find(".nw-parent").instance(),
      mounted.find(".nw-child").instance(),
      300,
    );

    setTimeout(() => {
      done();
    }, 300);
  });

  test("scrollElemToView", done => {
    mounted
      .find(".nw-parent")
      .instance().getBoundingClientRect = mockGetBoundClientRect(
      300,
      300,
      300,
      300,
      300,
      300,
    );
    mounted
      .find(".nw-child")
      .instance().getBoundingClientRect = mockGetBoundClientRect(
      0,
      0,
      0,
      0,
      300,
      500,
    );

    Utils.scrollElemToView(
      mounted.find(".nw-parent").instance(),
      mounted.find(".nw-child").instance(),
    );

    mounted
      .find(".nw-child")
      .instance().getBoundingClientRect = mockGetBoundClientRect(
      1000,
      1000,
      1000,
      1000,
      300,
      500,
    );

    Utils.scrollElemToView(
      mounted.find(".nw-parent").instance(),
      mounted.find(".nw-child").instance(),
    );

    Utils.scrollElemToView(
      mounted.find(".nw-parent").instance(),
      mounted.find(".nw-child").instance(),
      300,
    );

    setTimeout(() => {
      done();
    }, 300);
  });

  test("scrollTo", done => {
    Utils.scrollTo(window, 0, 300);

    Utils.scrollTo(window, 0, 300, 300);

    setTimeout(() => {
      done();
    }, 300);
  });
});

describe("urlMethods", () => {
  test("getUrlParameter", () => {
    expect(Utils.getUrlParameter("http://www.abc.com?a=1", "a")).toBe("1");
    expect(Utils.getUrlParameter("http://www.abc.com?a=1", "b")).toBe(
      undefined,
    );
  });

  test("setUrlParameter", () => {
    expect(Utils.setUrlParameter("http://www.abc.com", "a", "1")).toBe(
      "http://www.abc.com?a=1",
    );
    expect(Utils.setUrlParameter("http://www.abc.com?a=1", "a", "2")).toBe(
      "http://www.abc.com?a=2",
    );
  });
});
