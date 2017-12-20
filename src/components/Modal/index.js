import { Component } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

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

Modal.defaultProps = {
  onStateChange: Utils.noop,
};

Modal.propTypes = {
  onStateChange: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
};

export default Modal;
