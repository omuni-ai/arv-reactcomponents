import React from "react";
import { mount } from "enzyme";

import Toastr from "..";

Toastr.setConfig({
  limitTo: 1,
});

describe("Root Component Tests", () => {
  it("Show Toastr With Timeout", done => {
    Toastr.showToastr({
      className: "nwc-toastr-list-notification",
      message: `${Math.round(Math.random() * 10 ** 10)}`,
      timeout: 3000,
    });

    setTimeout(() => {
      Toastr.showToastr({
        className: "nwc-toastr-list-notification",
        message: `${Math.round(Math.random() * 10 ** 10)}`,
        timeout: 3000,
      });

      setTimeout(() => {
        Toastr.clearAll();
        done();
      }, 2000);
    }, 1000);
  });

  test("Close Click", () => {
    const mounted = mount(<Toastr />);

    Toastr.showToastr({
      className: "nwc-toastr-list-notification",
      message: `${Math.round(Math.random() * 10 ** 10)}`,
      timeout: 3000,
    });

    mounted.update();
    mounted.find("button.nwc-close").simulate("click");
  });
});
