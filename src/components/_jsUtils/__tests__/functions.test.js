import Utils from "../";

describe("Root Component Tests", () => {
  it("Easing functions", () => {
    global.window.scrollY = 300;

    Utils.fixScroll();
    Utils.unFixScroll();
  });
});
