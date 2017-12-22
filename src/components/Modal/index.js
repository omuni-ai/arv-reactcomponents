import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalContainer from "../ModalContainer";

import createBaseContainer from "./methods";

function Modal(props) {
  const { isOpen, ...otherProps } = props;

  return ReactDOM.createPortal(
    isOpen ? <ModalContainer {...otherProps} /> : null,
    document.querySelectorAll(".nwc-modal-holder")[0],
  );
}

createBaseContainer();

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
