import React, { Component } from 'react';

// Import common components
import { Input, Autocomplete } from '../../components';

// Import for page
import './_index.scss';

class AutocompleteExample extends Component {
  static getList(item) {
    return <li className="nw-sample-autocomplete-list" key={item}>{item}</li>;
  }

  constructor(props) {
    super(props);

    this.state = {
      autocompleteInputValue: '',
      inpList: [
        'Arrow', 'Arrow-N', 'Arrow-Y', 'Arrow-L', 'Arrow-B', 'Arrow-Q', 'Arrow-P', 'Arrow-R', 'Arrow-D',
        'Sephora', 'Sephora-N', 'Sephora-Y', 'Sephora-L', 'Sephora-B', 'Sephora-Q', 'Sephora-P', 'Sephora-R', 'Sephora-D',
        'Levis', 'Levis-N', 'Levis-Y', 'Levis-L', 'Levis-B', 'Levis-Q', 'Levis-P', 'Levis-R', 'Levis-D',
        'Gap', 'Gap-N', 'Gap-Y', 'Gap-L', 'Gap-B', 'Gap-Q', 'Gap-P', 'Gap-R', 'Gap-D',
      ],
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
    const { inpList } = this.state;

    return (
      <div className="nw-sample-autocompletewrapper">
        <div className="nw-sample-autocomplete">
          <div>Autocomplete Example</div>
          <Autocomplete
            className="nw-autocomplete"
            inpList={inpList}
            getSelection={this.getAutocompleSelection}
            renderInput={this.getInput}
            renderList={AutocompleteExample.getList}
          />
        </div>
      </div>
    );
  }
}

export default AutocompleteExample;