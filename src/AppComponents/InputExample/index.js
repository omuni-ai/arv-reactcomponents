import React, { Component } from 'react';

// Import common components
import { Input } from '../../components';

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
      <div>
        <Input
          className={`nwc-inp-dash nwc-inp-sm ${this.errorClass}`}
          placeholder="Enter between [1-5]"
          value={validateInputValue}
          onChange={this.validateInputChange}
          ref={(c) => { this.validateInputRef = c; }}
          maxLength={6}
          validateWithPattern={[{
              pattern: /^((\d+)*)?$/,
              msg: 'Value should be a number',
            }, {
              pattern: /^(([1-5]+)*)?$/,
              msg: 'Between 1-5',
            },
          ]}
        />
        <div>{validateInputErrorMsg}</div>
      </div>
    );
  }
}

export default InputExample;
