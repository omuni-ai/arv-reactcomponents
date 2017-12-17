import { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/_index.scss';
import {
  renderModal,
  openModal,
  closeModal,
  createBaseContainer,
} from './methods';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'isOpen': false, // eslint-disable-line react/no-unused-state
    };

    this.openModal = openModal.bind(this);
    this.closeModal = closeModal.bind(this);
  }

  componentDidUpdate() {
    renderModal.bind(this)();
  }

  render() {
    return null;
  }
}

Modal.defaultProps = {
  className: '',
};

Modal.propTypes = {
  className: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  children: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

createBaseContainer();

export default Modal;
