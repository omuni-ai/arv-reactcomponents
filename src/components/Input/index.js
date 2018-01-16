import React, { Component } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";
import Label from "../Label";

// import for Page
import getValidatedOutput from "./methods";

class Input extends Component {
  constructor(props) {
    super(props);

    this.getValidatedOutput = getValidatedOutput.bind(this);
    this.inputId = `${Math.round(Math.random() * 10 ** 10)}`;
  }

  get cloneClassName() {
    const { type, checked, className } = this.props;
    const isCheckedClass = checked ? "is-checked" : "";
    const additionalClasses = `${className} ${isCheckedClass}`;
    switch (type) {
      case "checkbox":
        return `nwc-inp-checkbox ${additionalClasses}`;
      case "radio":
        return `nwc-inp-radio ${additionalClasses}`;
      default:
        return "";
    }
  }

  get isCheckTypes() {
    const { type } = this.props;
    switch (type) {
      case "checkbox":
      case "radio":
        return true;
      default:
        return false;
    }
  }

  render() {
    const {
      id,
      className,
      type,
      inputRef,
      validateWithPattern,
      ...otherProps
    } = this.props;

    if (!this.isCheckTypes) {
      return (
        <input
          id={id || this.inputId}
          className={`nwc-inp  ${className}`}
          type={type}
          tabIndex="0"
          ref={inputRef}
          {...otherProps}
        />
      );
    }

    return (
      <Label className="nwc-inp-container" htmlFor={id || this.inputId}>
        <input
          id={id || this.inputId}
          className="nwc-inp-hide"
          type={type}
          tabIndex="0"
          ref={inputRef}
          {...otherProps}
        />
        <i className={`${this.cloneClassName}`} />
      </Label>
    );
  }
}

Input.defaultProps = {
  id: null,
  name: null,
  className: "",
  type: "text",
  placeholder: null,
  value: null,
  checked: null,
  maxLength: null,
  inputRef: Utils.noop,
  validateWithPattern: null,
};

Input.propTypes = {
  id: PropTypes.string,
  name: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  value: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  checked: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  inputRef: PropTypes.func,
  validateWithPattern: PropTypes.arrayOf(
    PropTypes.shape({
      pattern: PropTypes.instanceOf(RegExp),
      msg: PropTypes.string,
    }),
  ),
};

export default Input;
