import React, { Component, Fragment } from "react";

// Import common components
import { Input } from "../";

class InputTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidateInputValid: true,
      validateInputValue: "",
      validateInputErrorMsg: "",
      checkboxChecked: false,
      radioChecked: false,
      inputNumber: "",
    };

    this.validateInputChange = this.validateInputChange.bind(this);
    this.changeNumber1 = this.changeNumber1.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.toggleValue = this.toggleValue.bind(this);
  }

  get errorClass() {
    return !this.state.isValidateInputValid ? "is-invalid" : "";
  }

  validateInputChange(e) {
    const validateOutput = this.validateInputRef.getValidatedOutput(
      e.target.value,
    );
    this.setState({
      isValidateInputValid: validateOutput.isValid,
      validateInputValue: validateOutput.value,
      validateInputErrorMsg: validateOutput.errorMsg,
    });
  }

  changeNumber1(e) {
    const validateOutput = this.validateNumberRef1.getValidatedOutput(
      e.target.value,
    );
    this.setState({
      isValidateInputValid: validateOutput.isValid,
      validateInputValue: validateOutput.value,
      validateInputErrorMsg: validateOutput.errorMsg,
    });
  }

  changeNumber(e) {
    const validateOutput = this.validateNumberRef.getValidatedOutput(
      e.target.value,
    );
    this.setState({
      isValidateInputValid: validateOutput.isValid,
      validateInputValue: validateOutput.value,
      validateInputErrorMsg: validateOutput.errorMsg,
    });
  }

  toggleValue(e, stateProp) {
    if (e.key && e.key !== "Enter") {
      return;
    }
    this.setState({
      [stateProp]: !this.state[stateProp],
    });
  }

  render() {
    const {
      validateInputValue,
      validateInputErrorMsg,
      checkboxChecked,
      radioChecked,
      inputNumber,
    } = this.state;

    return (
      <Fragment>
        <Input
          id="sample-text-input"
          className={`${this.errorClass}`}
          placeholder="Enter between [1-5]"
          value={validateInputValue}
          onChange={this.validateInputChange}
          ref={c => {
            this.validateInputRef = c;
          }}
          maxLength={6}
          validateWithPattern={[
            {
              pattern: /^((\d+)*)?$/,
              msg: "Value must be a number",
            },
            {
              pattern: /^(([1-5]+)*)?$/,
              msg: "Between 1-5",
            },
          ]}
        />
        <div>{validateInputErrorMsg}</div>
        <Input
          id="sample-checkbox"
          name="sampleCheckbox"
          type="checkbox"
          value="0"
          checked={checkboxChecked}
          className={`${this.errorClass}`}
          onChange={e => {
            this.toggleValue(e, "checkboxChecked");
          }}
          onKeyDown={e => {
            this.toggleValue(e, "checkboxChecked");
          }}
        />
        <Input
          id="sample-radio"
          name="sampleRadio"
          type="radio"
          value="0"
          checked={radioChecked}
          className={`${this.errorClass}`}
          onChange={e => {
            this.toggleValue(e, "radioChecked");
          }}
          onKeyDown={e => {
            this.toggleValue(e, "radioChecked");
          }}
        />
        <Input
          id="sample-number-nomaxlength"
          name="sampleNumber"
          type="number"
          value={inputNumber}
          className={`${this.errorClass}`}
          onChange={this.changeNumber1}
          ref={c => {
            this.validateNumberRef1 = c;
          }}
        />
        <Input
          id="sample-number"
          name="sampleNumber"
          type="number"
          value={inputNumber}
          className={`${this.errorClass}`}
          onChange={this.changeNumber}
          ref={c => {
            this.validateNumberRef = c;
          }}
          maxLength={5}
        />
      </Fragment>
    );
  }
}

export default InputTest;
