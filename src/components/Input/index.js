import React, { Component } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";
import Label from "../Label";

// import for Page
import getValidatedOutput from "./methods";
import "./styles/_index.scss";

class Input extends Component {
  constructor(props) {
    super(props);

    this.getValidatedOutput = getValidatedOutput.bind(this);
    this.inputId = `${Math.round(Math.random() * 10 ** 10)}`;
  }

  get defaultClassNames() {
    const { type, className } = this.props;
    switch (type) {
      case "checkbox":
      case "radio":
        return "nwc-inp-hide";
      default:
        return `nwc-inp  ${className}`;
    }
  }

  get cloneClassName() {
    const { type, checked, className } = this.props;
    const isCheckedClass = checked ? "is-checked" : "";
    switch (type) {
      case "checkbox":
        return `nwc-inp-checkbox ${className} ${isCheckedClass}`;
      case "radio":
        return `nwc-inp-radio ${className} ${isCheckedClass}`;
      default:
        return "nwc-inp-hide";
    }
  }

  render() {
    const {
      id,
      labelClassName,
      className,
      type,
      validateWithPattern,
      ...otherProps
    } = this.props;

    return (
      <Label
        className={`nwc-inp-container ${labelClassName}`}
        htmlFor={id || this.inputId}
      >
        <input
          id={id || this.inputId}
          className={`${this.defaultClassNames}`}
          type={type}
          tabIndex="0"
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
  labelClassName: "",
  className: "",
  type: "text",
  placeholder: null,
  value: null,
  checked: null,
  maxLength: null,
  validateWithPattern: null,
};

Input.propTypes = {
  id: PropTypes.string,
  name: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  value: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  checked: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  validateWithPattern: PropTypes.arrayOf(
    PropTypes.shape({
      pattern: PropTypes.instanceOf(RegExp),
      msg: PropTypes.string,
    }),
  ),
};

export default Input;
