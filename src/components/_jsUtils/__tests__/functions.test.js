import Utils from "../";

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
