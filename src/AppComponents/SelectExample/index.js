import React, { Component } from "react";

// Import common components
import { Select, GridColumn, Button } from "../../components";

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
      disableState: false,
    };

    this.getSelectSelection = this.getSelectSelection.bind(this);
    this.enableSelect = this.enableSelect.bind(this);
    this.disableSelect = this.disableSelect.bind(this);
  }

  getSelectSelection(selectedValue) {
    this.setState({
      selectSelectedValue: selectedValue,
    });
  }

  enableSelect() {
    this.setState({
      disableState: false,
    });
  }

  disableSelect() {
    this.setState({
      disableState: true,
    });
  }

  render() {
    const { inpList, selectSelectedValue } = this.state;

    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-block nw-block-white">
        <div className="nw-sample-select">
          <div className="nw-space-bottom">Select Example</div>
          <Select
            className="nwc-select-sm nw-select nw-space-bottom"
            selectedValue={selectSelectedValue}
            inpList={inpList}
            getSelection={this.getSelectSelection}
            renderList={SelectExample.getList}
            disabled={this.state.disableState}
          />
          <Button
            className="nwc-btn nw-space-bottom"
            onClick={this.enableSelect}
          >
            Enable Select
          </Button>
          <Button className="nwc-btn" onClick={this.disableSelect}>
            Disable Select
          </Button>
        </div>
      </GridColumn>
    );
  }
}

export default SelectExample;
