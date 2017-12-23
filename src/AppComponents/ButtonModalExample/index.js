import React, { Component } from "react";

// Import common components
import { Button, Modal, GridColumn, Toastr } from "../../components";

class ButtonModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHelloIsOpen: false,
      showHaiIsOpen: false,
    };

    this.showHelloMsg = this.showHelloMsg.bind(this);
    this.showHaiMsg = this.showHaiMsg.bind(this);
  }

  showHelloMsg(bool) {
    this.setState({
      showHelloIsOpen: bool,
    });
    Toastr.clearAll();
  }

  showHaiMsg(bool) {
    this.setState({
      showHaiIsOpen: bool,
    });
    Toastr.clearAll();
  }

  render() {
    const { showHelloIsOpen, showHaiIsOpen } = this.state;

    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-block nw-block-white">
        <div className="nw-space-bottom">Button and Modal Example</div>
        <Button
          className="nwc-btn-primary nwc-btn-normal"
          onClick={() => {
            this.showHaiMsg(true);
          }}
        >
          Hai Modal
        </Button>
        <span>&nbsp;</span>
        <Button
          className="nwc-btn-primary nwc-btn-normal"
          onClick={() => {
            this.showHelloMsg(true);
          }}
        >
          Hello Modal
        </Button>
        <Modal
          className="nw-modal"
          isOpen={showHaiIsOpen}
          onClose={() => {
            this.showHaiMsg(false);
          }}
        >
          <div>Hai</div>
        </Modal>
        <Modal
          className="nw-modal"
          isOpen={showHelloIsOpen}
          onClose={() => {
            this.showHelloMsg(false);
          }}
          preventfix
        >
          <div>Hello</div>
        </Modal>
      </GridColumn>
    );
  }
}

export default ButtonModalExample;
