import React, { Component } from "react";

// Import common components
import { Button, Toastr, GridColumn } from "../../components";

Toastr.setConfig({
  limitTo: 3, // Change default value of limitTo to `3`
});

class ButtonToastrExample extends Component {
  static withoutTimeout() {
    Toastr.showToastr({
      className: "nwc-toastr-list-danger",
      message: `${Math.round(Math.random() * 10 ** 10)}`,
    });
  }

  static withTimeout() {
    Toastr.showToastr({
      className: "nwc-toastr-list-notification",
      message: `${Math.round(Math.random() * 10 ** 10)}`,
      timeout: 3000,
    });
  }

  render() {
    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-block nw-block-white">
        <div className="nw-space-bottom">Button and Toastr Example</div>
        <Button
          className="nwc-btn-primary nwc-btn-normal"
          onClick={ButtonToastrExample.withoutTimeout}
        >
          Show Toastr
        </Button>
        <span>&nbsp;</span>
        <Button
          className="nwc-btn-primary nwc-btn-normal"
          onClick={ButtonToastrExample.withTimeout}
        >
          Show Toastr with Timeout
        </Button>
      </GridColumn>
    );
  }
}

export default ButtonToastrExample;
