import React, { Component } from "react";

// Import common components
import { Input, Dummy } from "../../components";

class InputTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidateInputValid: true,
      validateInputValue: "",
      validateInputErrorMsg: "",
      checkboxChecked: false,
      radioChecked: false,
    };

    this.validateInputChange = this.validateInputChange.bind(this);
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
    } = this.state;

    return (
      <Dummy>
        <Input
          id="sample-text-input"
          className={`nwc-inp-dash nwc-inp-sm ${this.errorClass}`}
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
          className={`nwc-inp-checkbox-secondary nwc-inp-normal ${
            this.errorClass
          }`}
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
          className={`nwc-inp-radio-primary nwc-inp-normal ${this.errorClass}`}
          onChange={e => {
            this.toggleValue(e, "radioChecked");
          }}
          onKeyDown={e => {
            this.toggleValue(e, "radioChecked");
          }}
        />
      </Dummy>
    );
  }
}

export default InputTest;
