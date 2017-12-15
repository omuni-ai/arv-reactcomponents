import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

// import for Page
import {
  propsRequiredForType,
  getValidatedOutput,
} from './methods';
import './styles/_index.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.getValidatedOutput = getValidatedOutput.bind(this);
    this.inputId = `${Math.round(Math.random() * (10 ** 10))}`;
  }

  get defaultClassNames() {
    const { type } = this.props;
    switch (type) {
      case 'checkbox':
      case 'radio':
        return 'nwc-inp-hide';
      default:
        return 'nwc-inp';
    }
  }

  get cloneClassName() {
    const { type, checked } = this.props;
    const isCheckedClass = checked ? ' is-checked' : '';
    switch (type) {
      case 'checkbox':
        return `nwc-inp-checkbox${isCheckedClass}`;
      case 'radio':
        return `nwc-inp-radio${isCheckedClass}`;
      default:
        return 'nwc-inp-hide';
    }
  }

  render() {
    const {
      id, className, type, validateWithPattern, ...otherProps
    } = this.props;

    return (
      <Label className="nwc-inp-container" htmlFor={id || this.inputId}>
        <input
          id={id || this.inputId}
          className={`${this.defaultClassNames} ${className}`}
          type={type}
          tabIndex="0"
          {...otherProps}
        />
        <i className={`${this.cloneClassName} ${className}`} />
      </Label>
    );
  }
}

Input.defaultProps = {
  id: undefined,
  name: undefined,
  type: 'text',
  placeholder: undefined,
  value: undefined,
  checked: undefined,
  maxLength: undefined,
  validateWithPattern: null,
};

Input.propTypes = {
  id: PropTypes.string,
  name: propsRequiredForType,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: propsRequiredForType,
  value: propsRequiredForType,
  checked: propsRequiredForType,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  validateWithPattern: PropTypes.arrayOf(PropTypes.shape({
    pattern: PropTypes.instanceOf(RegExp),
    msg: PropTypes.string,
  })),
};

export default Input;
