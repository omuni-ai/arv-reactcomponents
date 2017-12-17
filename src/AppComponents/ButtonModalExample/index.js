import React, { Component } from 'react';

// Import common components
import { Button, Modal, GridColumn } from '../../components';

// Import for page
import './_index.scss';

class ButtonModalExample extends Component {
  constructor(props) {
    super(props);

    this.showHelloMsg = this.showHelloMsg.bind(this);
    this.showHaiMsg = this.showHaiMsg.bind(this);
  }

  showHelloMsg() {
    this.helloRef.openModal();
  }

  showHaiMsg() {
    this.haiRef.openModal();
  }

  render() {
    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-sample-buttoncontainer">
        <div className="nw-sample-buttonwrapper">
          <div className="nw-space-bottom">Button and Modal Example</div>
          <Button
            className="nwc-btn-primary nwc-btn-normal"
            onClick={this.showHelloMsg}
          >
            Hello Modal
          </Button>
          <Button
            className="nwc-btn-primary nwc-btn-normal"
            onClick={this.showHaiMsg}
          >
            Hai Modal
          </Button>
          <Modal
            ref={(c) => { this.helloRef = c; }}
          >
            <div>Hello</div>
          </Modal>
          <Modal
            ref={(c) => { this.haiRef = c; }}
          >
            <div>Hai</div>
          </Modal>
        </div>
      </GridColumn>
    );
  }
}

export default ButtonModalExample;
