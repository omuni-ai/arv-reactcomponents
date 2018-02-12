import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Close from "../Close";
import Utils from "../_jsUtils";

import setFocus from "./methods";

let modalOpen = false;
const isMobile = window.innerWidth <= 768;
class ModalContainer extends PureComponent {
  static isModalOpen() {
    return modalOpen;
  }

  static handleHistoryOnOpen() {
    const currentState = window.history.state;
    window.history.pushState(currentState, "");
  }

  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.onEscapeClose = this.onEscapeClose.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    modalOpen = true;
    if (!this.props.preventfix) {
      Utils.fixScroll();
    }

    if (isMobile) {
      ModalContainer.handleHistoryOnOpen();
    }
    window.addEventListener("popstate", this.closeModal);
  }

  componentWillUnmount() {
    modalOpen = false;
    Utils.unFixScroll();
    window.removeEventListener("popstate", this.closeModal);
  }

  onClose(e) {
    if (isMobile) {
      window.history.back();
    } else {
      this.closeModal(e);
    }
  }

  onEscapeClose(e) {
    Utils.preventEventPropagation(e);
    if (e.key === "Escape") {
      this.onClose(e);
    }
  }

  closeModal(e) {
    const { onClose } = this.props;
    setTimeout(() => {
      onClose(e);
    }, 50);
  }

  render() {
    const {
      className,
      children,
      onClose,
      preventfix,
      ...otherProps
    } = this.props;

    return (
      <div
        role="button"
        className={`nwc-modal-container ${className}`}
        tabIndex={0}
        onClick={this.onClose}
        onKeyDown={this.onEscapeClose}
        ref={setFocus}
        {...otherProps}
      >
        <div
          role="button"
          className="nwc-modal nwc-custom-scrollbar"
          tabIndex={0}
          onClick={Utils.preventEventPropagation}
          onKeyDown={null}
        >
          <Close
            className="nwc-close-normal nwc-modal-close"
            onClick={this.onClose}
          />
          {children}
        </div>
      </div>
    );
  }
}

ModalContainer.defaultProps = {
  className: "",
  preventfix: false,
};

ModalContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClose: PropTypes.func.isRequired,
  preventfix: PropTypes.bool,
};

export default ModalContainer;
