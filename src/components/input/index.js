import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_index.scss';

import {
  onInpChange,
  restrictVal,
  validateInput,
} from './methods';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };

    this.isError = false;

    this.onInpChange = onInpChange.bind(this);
    this.restrictVal = restrictVal.bind(this);
    this.validateInput = validateInput.bind(this);
  }

  get errorClass() {
    if (this.isError) {
      return 'is-invalid';
    }
    return '';
  }

  render() {
    const {
      className, type, validateWithPattern, onError, ...otherProps
    } = this.props;

    const val = this.props.value || this.props.value.length > 0 ? this.props.value : this.state.val;

    const restrictedVal = this.restrictVal(val, type);

    if (validateWithPattern !== null) {
      this.validateInput(restrictedVal, validateWithPattern);
    }

    return (
      <input
        className={`nwc-inp ${className} ${this.errorClass}`}
        type={type}
        tabIndex="0"
        {...otherProps}
        value={restrictedVal}
        onError={onError}
        onChange={(e) => { this.onInpChange(e); }}
      />
    );
  }
}

Input.defaultProps = {
  type: 'text',
  value: '',
  maxLength: undefined,
  validateWithPattern: null,
  onChange: () => {},
  onError: () => {},
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  validateWithPattern: PropTypes.arrayOf(PropTypes.shape({
    pattern: PropTypes.instanceOf(RegExp),
    msg: PropTypes.string,
  })),
  onChange: PropTypes.func,
  onError: PropTypes.func,
};

export default Input;
