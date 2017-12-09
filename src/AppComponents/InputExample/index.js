import React, { Component } from 'react';

// Import common components
import { Input } from '../../components';

class InputExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validateInputValue: '',
    };

    this.validateInputChange = this.validateInputChange.bind(this);
  }

  validateInputChange(e) {
    console.log(this.state.validateInputValue, e.target.value);
  }

  render() {
    return (
      <div>
        <Input
          className="nwc-inp-dash nwc-inp-sm"
          placeholder="Enter between [1-5]"
          value={this.state.validateInputValue}
          onChange={this.validateInputChange}
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
      </div>
    );
  }
}

export default InputExample;
