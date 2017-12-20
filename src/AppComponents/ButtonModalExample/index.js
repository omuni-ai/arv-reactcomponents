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
            onStateChange={ButtonModalExample.onStateChange}
            ref={c => {
              this.helloRef = c;
            }}
          >
            <div>Hello</div>
          </Modal>
          <Modal
            ref={c => {
              this.haiRef = c;
            }}
          >
            <div>Hai</div>
          </Modal>
        </div>
      </GridColumn>
    );
  }
}

export default ButtonModalExample;
