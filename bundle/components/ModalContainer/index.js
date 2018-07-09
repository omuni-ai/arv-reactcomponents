import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { isMobile } from "../constants";
import Close from "../Close";
import Utils from "../_jsUtils";
import setFocus from "./methods";

let modalOpen = false;
class ModalContainer extends PureComponent {
  static isModalOpen() {
    return modalOpen;
  }

  static handleHistoryOnOpen() {
    const currentState = window.history.state;
    if (currentState) {
      currentState.modal = true;
      window.history.pushState(currentState, "");
    }
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
    setTimeout(() => {
      modalOpen = false;
    }, 100);
    if (!this.props.preventfix) {
      Utils.unFixScroll();
    }
    window.removeEventListener("popstate", this.closeModal);
  }

  onClose(e) {
    const currentState = window.history.state;
    if (isMobile && currentState && currentState.modal) {
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
    onClose(e);
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
          role="presentation"
          className="nwc-modal"
          onClick={Utils.preventEventPropagation}
          onKeyDown={null}
        >
          <Close
            className="nwc-close-normal nwc-modal-close"
            onClick={this.onClose}
          />
          <div className="nwc-custom-scrollbar nwc-modal-children">
            {children}
          </div>
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
