import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DomSelector } from '../';

import './_index.scss';
import {
  getModalIfOpen,
  openModal,
  closeModal,
} from './methods';

let { scrollY } = window;

class Modal extends Component {
  static preventEventPropagation(e) {
    e.stopPropagation();
  }

  static fixScrollFn() {
    const bodyElem = DomSelector('body');
    ({ scrollY } = window);
    setTimeout(() => {
      bodyElem.addClass('nwc-hide-scrollbar');
      bodyElem[0].style.top = `-${scrollY}px`;
    }, 0, false);
  }

  static unFixScrollFn() {
    const bodyElem = DomSelector('body');
    bodyElem.removeClass('nwc-hide-scrollbar');
    bodyElem[0].style.top = null;
    if (scrollY) {
      window.scrollTo(0, scrollY);
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      'isOpen': false, // eslint-disable-line react/no-unused-state
    };

    this.getModalIfOpen = getModalIfOpen.bind(this);
    this.openModal = openModal.bind(this);
    this.closeModal = closeModal.bind(this);
  }

  render() {
    return (
      <div>
        {this.getModalIfOpen()}
      </div>
    );
  }
}

Modal.defaultProps = {
  className: '',
  children: '',
};

Modal.propTypes = {
  className: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  children: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Modal;
