import React, { Component } from "react";

// Import common components
import { Modal } from "..";

class ModalTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHaiIsOpen: false,
    };

    this.showHaiMsg = this.showHaiMsg.bind(this);
  }

  showHaiMsg(bool) {
    this.setState({
      showHaiIsOpen: bool,
    });
  }

  render() {
    const { showHaiIsOpen } = this.state;

    return (
      <Modal
        className="nw-modal"
        isOpen={showHaiIsOpen}
        onClose={() => {
          this.showHaiMsg(false);
        }}
      >
        <div>Hai</div>
      </Modal>
    );
  }
}

export default ModalTest;
