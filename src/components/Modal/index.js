import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalContainer from "../ModalContainer";

import createBaseContainer from "./methods";

function Modal(props) {
  const { isOpen, ...otherProps } = props;

  if (isOpen) {
    return ReactDOM.createPortal(
      <ModalContainer {...otherProps} />,
      document.querySelector(".nwc-modal-holder"),
    );
  }
  return null;
}

createBaseContainer();

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
