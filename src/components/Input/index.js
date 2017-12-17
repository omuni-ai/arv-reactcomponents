import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../_jsUtils/customPropTypes';
import Label from '../Label';

// import for Page
import getValidatedOutput from './methods';
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
      id, labelClassName, className, type, validateWithPattern, ...otherProps
    } = this.props;

    return (
      <Label className={`nwc-inp-container ${labelClassName}`} htmlFor={id || this.inputId}>
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
  id: null,
  name: null,
  labelClassName: '',
  className: '',
  type: 'text',
  placeholder: null,
  value: null,
  checked: null,
  maxLength: null,
  validateWithPattern: null,
};

Input.propTypes = {
  id: PropTypes.string,
  name: CustomPropTypes.Input, // eslint-disable-line react/no-typos
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: CustomPropTypes.Input, // eslint-disable-line react/no-typos
  value: CustomPropTypes.Input, // eslint-disable-line react/no-typos
  checked: CustomPropTypes.Input, // eslint-disable-line react/no-typos
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  validateWithPattern: PropTypes.arrayOf(PropTypes.shape({
    pattern: PropTypes.instanceOf(RegExp),
    msg: PropTypes.string,
  })),
};

export default Input;
