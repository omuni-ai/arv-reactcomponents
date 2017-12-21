import React, { Component } from "react";

// Import common components
import { Button, Modal, GridColumn, Toastr } from "../../components";

// Import for page
import "./_index.scss";

class ButtonModalExample extends Component {
  static onStateChange(bool) {
    console.log(bool);
  }

  constructor(props) {
    super(props);

    this.showHelloMsg = this.showHelloMsg.bind(this);
    this.showHaiMsg = this.showHaiMsg.bind(this);
  }

  showHelloMsg() {
    this.helloRef.openModal();
    Toastr.clearAll();
  }

  showHaiMsg() {
    this.haiRef.openModal();
    Toastr.clearAll();
  }

  render() {
    return (
      <GridColumn className="nw-block nwc-grid-col-sm-6 nwc-grid-col-md-4">
        <div className="nw-space-bottom">Button and Modal Example</div>
        <Button
          className="nwc-btn-primary nwc-btn-normal"
          onClick={this.showHelloMsg}
        >
          Hello Modal
        </Button>
        <span>&nbsp;</span>
        <Button
          className="nwc-btn-primary nwc-btn-normal"
          onClick={this.showHaiMsg}
        >
          Hai Modal
        </Button>
        <Modal
          className="nw-modal"
          onStateChange={ButtonModalExample.onStateChange}
          ref={c => {
            this.helloRef = c;
          }}
        >
          <div>Hello</div>
        </Modal>
        <Modal
          className="nw-modal"
          ref={c => {
            this.haiRef = c;
          }}
        >
          <div>Hai</div>
        </Modal>
      </GridColumn>
    );
  }
}

export default ButtonModalExample;
