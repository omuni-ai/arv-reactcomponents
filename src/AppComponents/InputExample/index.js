import React, { Component } from 'react';

// Import common components
import { Input } from '../../components';

// Import for page
import './_index.scss';

class InputExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidateInputValid: true,
      validateInputValue: '',
      validateInputErrorMsg: '',
    };

    this.validateInputChange = this.validateInputChange.bind(this);
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

  render() {
    const {
      validateInputValue,
      validateInputErrorMsg,
    } = this.state;

    return (
      <div className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-sample-inputcontainer">
        <div className="nw-sample-inputwrapper">
          <div>Input Example field with Validations Example</div>
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
        </div>
      </div>
    );
  }
}

export default InputExample;
