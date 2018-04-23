import Utils from "../";
import * as constants from "../../constants";

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
    Utils.localStorage.setItem("key", "value");
    Utils.localStorage.getItem();
    Utils.localStorage.getItem("key");

    constants.localStorage = {};
    Utils.localStorage.removeItem("key");
    expect(Utils.localStorage.getItem("alreadySet")).toBe(null);
    Utils.localStorage.setItem("key", "value");
    expect(Utils.localStorage.getItem("key")).toBe("value");
    Utils.localStorage.removeItem("key");
    expect(Utils.localStorage.getItem("key")).toBe(null);

    Utils.localStorage.setItem("key", "value");
    setTimeout(() => {
      expect(Utils.localStorage.getItem("key")).toBe(null);
    }, 1000);
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
});
