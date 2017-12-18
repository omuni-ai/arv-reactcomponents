import React, { Component } from 'react';

// Import common components
import { Select, GridColumn } from '../../components';

// Import for page
import './_index.scss';

class SelectExample extends Component {
  static getList(item) {
    return <li className="nw-sample-dropdown-list" key={item}>{item}</li>;
  }

  constructor(props) {
    super(props);

    const dropdownList = [
      'Delhi',
      'Mumbai',
      'Gujarat',
      'Karnataka',
      'Pune',
      'Kerala',
      'Goa',
      'Maharashrtra',
    ];

    this.state = {
      dropdownSelectedValue: dropdownList[0],
      inpList: dropdownList,
    };

    this.getSelectSelection = this.getSelectSelection.bind(this);
  }

  getSelectSelection(selectedValue) {
    this.setState({
      dropdownSelectedValue: selectedValue,
    });
  }

  render() {
    const { inpList, dropdownSelectedValue } = this.state;

    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-sample-dropdowncontainer">
        <div className="nw-sample-dropdownwrapper">
          <div className="nw-sample-dropdown">
            <div className="nw-space-bottom">Select Example</div>
            <Select
              className="nwc-dropdown nwc-dropdown-secondary nwc-dropdown-sm nw-dropdown"
              selectedValue={dropdownSelectedValue}
              inpList={inpList}
              getSelection={this.getSelectSelection}
              renderList={SelectExample.getList}
            />
          </div>
        </div>
      </GridColumn>
    );
  }
}

export default SelectExample;
