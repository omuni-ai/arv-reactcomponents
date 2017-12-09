import React, { Component } from 'react';

// Import common components
import { Input, Autocomplete } from '../../components';

// Import for page
import './_index.scss';

class AutocompleteExample extends Component {
  static getList(item) {
    return <li key={item}>{item}</li>;
  }

  static autocompleteValueChange(e) {
    console.log(e.target.value);
  }

  constructor(props) {
    super(props);

    this.state = {
      autocompleteInputValue: '',
    };

    this.onInpValChange = this.onInpValChange.bind(this);
    this.getInput = this.getInput.bind(this);
    this.getAutocompleSelection = this.getAutocompleSelection.bind(this);
  }

  onInpValChange(e) {
    this.setState({
      autocompleteInputValue: e.target.value,
    });
  }

  getAutocompleSelection(selectedValue) {
    this.setState({
      autocompleteInputValue: selectedValue,
    });
  }

  getInput() {
    const { autocompleteInputValue } = this.state;

    return (
      <Input
        className="nwc-inp-dash nwc-inp-sm"
        placeholder="Enter text"
        value={autocompleteInputValue}
        onChange={this.onInpValChange}
      />
    );
  }

  render() {
    return (
      <div>
        <Autocomplete
          inpList={['Arrow', 'Sephora', 'Levis', 'Gap']}
          getSelection={this.getAutocompleSelection}
          renderInput={this.getInput}
          renderList={AutocompleteExample.getList}
        />
      </div>
    );
  }
}

export default AutocompleteExample;
