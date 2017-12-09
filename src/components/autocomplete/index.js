import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import for Page
import './_index.scss';
import {
  setInputVal,
  hideAutocompleteList,
  renderListItems,
  renderAutocompleteInput,
  navigateUsingKey,
} from './methods';

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      isActive: false, // eslint-disable-line react/no-unused-state
    };

    this.setInputVal = setInputVal.bind(this);
    this.hideAutocompleteList = hideAutocompleteList.bind(this);
    this.renderAutocompleteInput = renderAutocompleteInput.bind(this);
    this.renderListItems = renderListItems.bind(this);
    this.navigateUsingKey = navigateUsingKey.bind(this);
  }

  componentWillMount() {
    this.listNode = {};
  }

  render() {
    const {
      className,
      inpList,
      getSelection,
      renderInput,
      renderList,
      ...otherProps
    } = this.props;

    return (
      <div
        className={`nwc-autocomplete ${className}`}
        ref={(c) => { this.autocompleteNode = c; }}
        {...otherProps}
      >
        {this.renderAutocompleteInput(renderInput)}
        {this.renderListItems(this.state.inputVal, inpList, renderList)}
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  className: '',
  getSelection: () => {},
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  inpList: PropTypes.node.isRequired,
  getSelection: PropTypes.func,
  renderInput: PropTypes.func.isRequired,
  renderList: PropTypes.func.isRequired,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

export default Autocomplete;
