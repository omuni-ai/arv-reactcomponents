import React from "react";
import ReactDOM from "react-dom";
import Utils from "../_jsUtils";

import ModalContainer from "../ModalContainer";

function renderModal() {
  const { onStateChange, ...otherProps } = this.props;

  if (this.state.isOpen) {
    ReactDOM.render(
      <ModalContainer {...otherProps} closeModal={this.closeModal} />,
      document.querySelectorAll(".nwc-modal-holder")[0],
    );
  } else {
    ReactDOM.render(null, document.querySelectorAll(".nwc-modal-holder")[0]);
  }
}

function openModal(preventFix) {
  if (!preventFix) {
    Utils.fixScroll();
  }
  this.setState({
    isOpen: true,
  });

  this.props.onStateChange(true);
  return this.closeModal;
}

function closeModal(e) {
  if (e.key && e.key !== "Escape") {
    return;
  }
  Utils.unFixScroll();
  this.setState({
    isOpen: false,
  });

  this.props.onStateChange(false);
}

function createBaseContainer() {
  const modalContainer = document.createElement("div");
  modalContainer.className = "nwc-modal-holder";
  document.querySelectorAll("body")[0].appendChild(modalContainer);
}

export { renderModal, openModal, closeModal, createBaseContainer };
