import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Close from "../Close";
import Utils from "../_jsUtils";

import setFocus from "./methods";

class ModalContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onEscapeClose = this.onEscapeClose.bind(this);
  }

  componentDidMount() {
    if (!this.props.preventfix) {
      Utils.fixScroll();
    }
  }

  componentWillUnmount() {
    Utils.unFixScroll();
  }

  onEscapeClose(e) {
    Utils.preventEventPropagation(e);
    const { onClose } = this.props;
    if (e.key === "Escape") {
      onClose(e);
    }
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
        onClick={onClose}
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
            onClick={onClose}
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
