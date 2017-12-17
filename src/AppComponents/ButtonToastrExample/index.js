import React, { Component } from 'react';

// Import common components
import { Button, Toastr, GridColumn } from '../../components';

// Import for page
import './_index.scss';

class ButtonToastrExample extends Component {
  constructor(props) {
    super(props);

    this.showHelloMsg = this.showHelloMsg.bind(this);
  }

  showHelloMsg() {
    Toastr.showToastr({
      context: this,
      type: 'notification',
      message: 'hello',
      timeout: 3000,
    });
  }

  render() {
    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-sample-buttoncontainer">
        <div className="nw-sample-buttonwrapper">
          <div className="nw-space-bottom">Button and Toastr Example</div>
          <Button
            className="nwc-btn-primary nwc-btn-normal"
            onClick={this.showHelloMsg}
          >
            Show Toastr
          </Button>
        </div>
      </GridColumn>
    );
  }
}

export default ButtonToastrExample;
