import React, { Component } from "react";

// Import common components
import { Input, Autocomplete } from "..";

class AutocompleteTest extends Component {
  static getList(item) {
    if (item === "Hidden") {
      return null;
    }

    return (
      <li className="autocomplete-listitems" key={item}>
        {item}
      </li>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      autocompleteInputValue: "",
      inpList: ["Arrow", "Levis", "Hidden", "Gap"],
    };

    this.onInpValChange = this.onInpValChange.bind(this);
    this.getInput = this.getInput.bind(this);
    this.getAutocompleteSelection = this.getAutocompleteSelection.bind(this);
  }

  onInpValChange(e) {
    this.setState({
      autocompleteInputValue: e.target.value,
    });
  }

  getAutocompleteSelection(selectedValue) {
    this.setState({
      autocompleteInputValue: selectedValue,
    });
  }

  getInput() {
    const { autocompleteInputValue } = this.state;

    return (
      <Input
        id="autocomplete-input"
        placeholder="Enter text"
        value={autocompleteInputValue}
        onChange={this.onInpValChange}
      />
    );
  }

  render() {
    const { inpList } = this.state;

    return (
      <Autocomplete
        selectedIndex={-1}
        inpList={inpList}
        getSelection={this.getAutocompleteSelection}
        renderInput={this.getInput}
        renderList={AutocompleteTest.getList}
      />
    );
  }
}

export default AutocompleteTest;
