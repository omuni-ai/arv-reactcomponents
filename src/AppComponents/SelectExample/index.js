import React, { Component } from "react";

// Import common components
import { Select, GridColumn } from "../../components";

// Import for page
import "./_index.scss";

class SelectExample extends Component {
  static getList(item) {
    return (
      <li className="nw-sample-select-list" key={item}>
        {item}
      </li>
    );
  }

  constructor(props) {
    super(props);

    const selectList = [
      "Delhi",
      "Mumbai",
      "Gujarat",
      "Karnataka",
      "Pune",
      "Kerala",
      "Goa",
      "Maharashrtra",
    ];

    this.state = {
      selectSelectedValue: selectList[0],
      inpList: selectList,
    };

    this.getSelectSelection = this.getSelectSelection.bind(this);
  }

  getSelectSelection(selectedValue) {
    this.setState({
      selectSelectedValue: selectedValue,
    });
  }

  render() {
    const { inpList, selectSelectedValue } = this.state;

    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-block nw-block-white">
        <div className="nw-sample-select">
          <div className="nw-space-bottom">Select Example</div>
          <Select
            className="nwc-select-secondary nwc-select-sm nw-select"
            selectedValue={selectSelectedValue}
            inpList={inpList}
            getSelection={this.getSelectSelection}
            renderList={SelectExample.getList}
          />
        </div>
      </GridColumn>
    );
  }
}

export default SelectExample;
