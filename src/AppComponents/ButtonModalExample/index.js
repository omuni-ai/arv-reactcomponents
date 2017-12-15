import React, { Component } from 'react';

// Import common components
import { Button, Modal } from '../../components';

// Import for page
import './_index.scss';

class ButtonModalExample extends Component {
  constructor(props) {
    super(props);

    this.showHelloMsg = this.showHelloMsg.bind(this);
  }

  showHelloMsg() {
    this.exampleModalRef.openModal();
  }

  render() {
    return (
      <div className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-sample-buttoncontainer">
        <div className="nw-sample-buttonwrapper">
          <div className="nw-space-bottom">Button and Modal Example</div>
          <Button
            className="nwc-btn-primary nwc-btn-normal"
            onClick={this.showHelloMsg}
          >
            Open Modal
          </Button>
          <Modal ref={(c) => { this.exampleModalRef = c; }}>Hello</Modal>
        </div>
      </div>
    );
  }
}

export default ButtonModalExample;
