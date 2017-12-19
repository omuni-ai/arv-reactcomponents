import { Component } from "react";

import {
  renderModal,
  openModal,
  closeModal,
  createBaseContainer,
} from "./methods";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false, // eslint-disable-line react/no-unused-state
    };

    this.openModal = openModal.bind(this);
    this.closeModal = closeModal.bind(this);
  }

  componentDidUpdate() {
    renderModal.bind(this)();
  }

  render() {
    return null;
  }
}

createBaseContainer();

export default Modal;
