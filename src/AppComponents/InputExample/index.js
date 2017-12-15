import React, { Component } from 'react';

// Import common components
import { Input, GridRow } from '../../components';

// Import for page
import './_index.scss';

class InputExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidateInputValid: true,
      validateInputValue: '',
      validateInputErrorMsg: '',
      checkboxChecked: false,
      radioChecked: false,
    };

    this.validateInputChange = this.validateInputChange.bind(this);
    this.toggleValue = this.toggleValue.bind(this);
  }

  get errorClass() {
    return !this.state.isValidateInputValid ? 'is-invalid' : '';
  }

  validateInputChange(e) {
    const validateOutput = this.validateInputRef.getValidatedOutput(e.target.value);
    this.setState({
      isValidateInputValid: validateOutput.isValid,
      validateInputValue: validateOutput.value,
      validateInputErrorMsg: validateOutput.errorMsg,
    });
  }

  toggleValue(stateProp) {
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
      <div className="nwc-grid-col-sm-6 nwc-grid-col-md-4">
        <GridRow>
          <div className="nwc-grid-col-sm-12 nw-sample-inputcontainer">
            <form
              name="sample-form"
              className="nw-sample-inputwrapper"
            >
              <div className="nw-space-bottom">Input Example field with Validations Example</div>
              <Input
                className={`nwc-inp-dash nwc-inp-sm ${this.errorClass}`}
                placeholder="Enter between [1-5]"
                value={validateInputValue}
                onChange={this.validateInputChange}
                ref={(c) => { this.validateInputRef = c; }}
                maxLength={6}
                validateWithPattern={[{
                    pattern: /^((\d+)*)?$/,
                    msg: 'Value must be a number',
                  }, {
                    pattern: /^(([1-5]+)*)?$/,
                    msg: 'Between 1-5',
                  },
                ]}
              />
              <div>{validateInputErrorMsg}</div>
            </form>
          </div>
          <div className="nwc-grid-col-sm-12 nw-sample-inputcontainer">
            <div className="nw-sample-inputwrapper">
              <div className="nw-space-bottom">Input Example checkbox and radio</div>
              <Input
                name="sampleCheckbox"
                type="checkbox"
                value="0"
                checked={checkboxChecked}
                className={`nwc-inp-checkbox-secondary nwc-inp-sm nwc-inp-normal ${this.errorClass}`}
                onChange={() => { this.toggleValue('checkboxChecked'); }}
              /> &nbsp;
              <Input
                name="sampleRadio"
                type="radio"
                value="0"
                checked={radioChecked}
                className={`nwc-inp-radio-primary nwc-inp-sm nwc-inp-normal ${this.errorClass}`}
                onChange={() => { this.toggleValue('radioChecked'); }}
              />
            </div>
          </div>
        </GridRow>
      </div>
    );
  }
}

export default InputExample;
