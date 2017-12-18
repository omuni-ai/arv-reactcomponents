import React, { Component } from "react";
import PropTypes from "prop-types";

// import for Page
import { renderAutocompleteInput, renderListItems } from "./methods";
import "./styles/_index.scss";

let renderAutocompleteInputFn;
let renderListItemsFn;

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAutocompleteActive: false, // eslint-disable-line react/no-unused-state
      listNode: [], // eslint-disable-line react/no-unused-state
      listNodeItem: [], // eslint-disable-line react/no-unused-state
    };

    renderAutocompleteInputFn = renderAutocompleteInput.bind(this);
    renderListItemsFn = renderListItems.bind(this);
  }

  render() {
    const {
      className,
      inpList,
      getSelection,
      renderInput,
      renderList,
      minTextLength,
      ...otherProps
    } = this.props;

    const elem = renderInput();

    return (
      <div className={`nwc-autocomplete ${className}`} {...otherProps}>
        {renderAutocompleteInputFn(elem)}
        {renderListItemsFn(elem.props.value, inpList, renderList)}
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  className: "",
  getSelection: () => {},
  minTextLength: 0,
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  inpList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getSelection: PropTypes.func,
  renderInput: PropTypes.func.isRequired,
  renderList: PropTypes.func.isRequired,
  minTextLength: PropTypes.number,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

export default Autocomplete;
