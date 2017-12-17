import React from 'react';
import Modal from './';
import Close from '../Close';

function getModalTemplateIfOpen() {
  const {
    className,
    children,
    ...otherProps
  } = this.props;

  if (this.state.isOpen) {
    return (
      <div
        role="button"
        className={`nwc-modal-container ${className}`}
        tabIndex={0}
        onClick={this.closeModal}
        // onKeyDownCapture={(e) => { this.closeModal(e, 'key'); }}
        onKeyDown={this.closeModal}
        ref={(c) => { this.modalRef = c; }}
        {...otherProps}
      >
        <div
          role="button"
          className="nwc-modal"
          tabIndex={0}
          onClick={Modal.preventEventPropagation}
          onKeyDown={null}
        >
          <Close className="nwc-close-normal" onClick={this.closeModal} />
          {children}
        </div>
      </div>
    );
  }
  return null;
}

function openModal(preventFix) {
  if (!preventFix) {
    Modal.fixScrollFn();
  }
  this.setState({
    isOpen: true,
  });
  setTimeout(() => {
    this.modalRef.focus();
  }, 10);
}

function closeModal(e) {
  if (e.key && e.key !== 'Escape') {
    return;
  }
  Modal.unFixScrollFn();
  this.setState({
    isOpen: false,
  });
}

export {
  getModalTemplateIfOpen,
  openModal,
  closeModal,
};
