import React from "react";
import ReactDOM from "react-dom";
import Close from "../Close";
import { fixScroll, unFixScroll } from "../_jsUtils";

function preventEventPropagation(e) {
  e.stopPropagation();
}

function renderModal() {
  const { className, children, ...otherProps } = this.props;

  if (this.state.isOpen) {
    ReactDOM.render(
      <div
        role="button"
        className={`nwc-modal-overlay ${className}`}
        tabIndex={0}
        onClick={this.closeModal}
        // onKeyDownCapture={(e) => { this.closeModal(e, 'key'); }}
        onKeyDown={this.closeModal}
        ref={c => {
          this.modalRef = c;
        }}
        {...otherProps}
      >
        <div
          role="button"
          className="nwc-modal"
          tabIndex={0}
          onClick={preventEventPropagation}
          onKeyDown={null}
        >
          <Close className="nwc-close-normal" onClick={this.closeModal} />
          {children}
        </div>
      </div>,
      document.querySelectorAll(".nwc-modal-container")[0],
    );
  } else {
    ReactDOM.render(null, document.querySelectorAll(".nwc-modal-container")[0]);
  }
  return null;
}

function openModal(preventFix) {
  if (!preventFix) {
    fixScroll();
  }
  this.setState({
    isOpen: true,
  });
  setTimeout(() => {
    this.modalRef.focus();
  }, 10);
}

function closeModal(e) {
  if (e.key && e.key !== "Escape") {
    return;
  }
  unFixScroll();
  this.setState({
    isOpen: false,
  });
}

function createBaseContainer() {
  const modalContainer = document.createElement("div");
  modalContainer.className = "nwc-modal-container";
  document.querySelectorAll("body")[0].appendChild(modalContainer);
}

export { renderModal, openModal, closeModal, createBaseContainer };
