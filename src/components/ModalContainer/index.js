import React from "react";
import PropTypes from "prop-types";
import Close from "../Close";
import { preventEventPropagation } from "../_jsUtils";

import setFocus from "./methods";
import "./styles/_index.scss";

function ModalContainer(props) {
  const { className, children, closeModal, ...otherProps } = props;

  return (
    <div
      role="button"
      className={`nwc-modal-container ${className}`}
      tabIndex={0}
      onClick={closeModal}
      // onKeyDownCapture={(e) => { this.closeModal(e, 'key'); }}
      onKeyDown={closeModal}
      ref={setFocus}
      {...otherProps}
    >
      <div
        role="button"
        className="nwc-modal"
        tabIndex={0}
        onClick={preventEventPropagation}
        onKeyDown={null}
      >
        <Close className="nwc-close-normal" onClick={closeModal} />
        {children}
      </div>
    </div>
  );
}

ModalContainer.defaultProps = {
  className: "",
};

ModalContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalContainer;
