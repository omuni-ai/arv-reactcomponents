import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import for Page
import getValidatedOutput from './methods';
import './_index.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.getValidatedOutput = getValidatedOutput.bind(this);
  }

  render() {
    const {
      className, type, value, validateWithPattern, onChange, ...otherProps
    } = this.props;

    return (
      <input
        className={`nwc-inp ${className}`}
        type={type}
        tabIndex="0"
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    );
  }
}

Input.defaultProps = {
  type: 'text',
  maxLength: undefined,
  validateWithPattern: null,
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  validateWithPattern: PropTypes.arrayOf(PropTypes.shape({
    pattern: PropTypes.instanceOf(RegExp),
    msg: PropTypes.string,
  })),
};

export default Input;
