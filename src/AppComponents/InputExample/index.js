import React, { Component } from "react";

// Import common components
import { Input, GridRow, GridColumn } from "../../components";

// Import for page
import "./_index.scss";

class InputExample extends Component {
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
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4">
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-12 nw-sample-inputcontainer">
            <form name="sample-form" className="nw-sample-inputwrapper">
              <div className="nw-space-bottom">
                Input Example field with Validations Example
              </div>
              <Input
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
            </form>
          </GridColumn>
          <GridColumn className="nwc-grid-col-sm-12 nw-sample-inputcontainer">
            <div className="nw-sample-inputwrapper">
              <div className="nw-space-bottom">
                Input Example checkbox and radio
              </div>
              <Input
                name="sampleCheckbox"
                type="checkbox"
                value="0"
                checked={checkboxChecked}
                className={`nwc-inp-checkbox-secondary nwc-inp-sm nwc-inp-normal ${
                  this.errorClass
                }`}
                onChange={e => {
                  this.toggleValue(e, "checkboxChecked");
                }}
                onKeyDown={e => {
                  this.toggleValue(e, "checkboxChecked");
                }}
              />{" "}
              &nbsp;
              <Input
                name="sampleRadio"
                type="radio"
                value="0"
                checked={radioChecked}
                className={`nwc-inp-radio-primary nwc-inp-sm nwc-inp-normal ${
                  this.errorClass
                }`}
                onChange={e => {
                  this.toggleValue(e, "radioChecked");
                }}
                onKeyDown={e => {
                  this.toggleValue(e, "radioChecked");
                }}
              />
            </div>
          </GridColumn>
        </GridRow>
      </GridColumn>
    );
  }
}

export default InputExample;
