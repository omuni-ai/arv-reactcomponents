import React, { Component } from 'react';

// Import common components
import { Button, Toastr, GridColumn } from '../../components';

// Import for page
import './_index.scss';

Toastr.setConfig({
  limitTo: 3, // Change default value of limitTo to `3`
});

class ButtonToastrExample extends Component {
  static showHelloMsg() {
    Toastr.showToastr({
      className: 'nwc-toastr-msg-notification',
      type: 'notification',
      message: 'hello',
    });
  }

  render() {
    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-sample-buttoncontainer">
        <div className="nw-sample-buttonwrapper">
          <div className="nw-space-bottom">Button and Toastr Example</div>
          <Button
            className="nwc-btn-primary nwc-btn-normal"
            onClick={ButtonToastrExample.showHelloMsg}
          >
            Show Toastr
          </Button>
        </div>
      </GridColumn>
    );
  }
}

export default ButtonToastrExample;
