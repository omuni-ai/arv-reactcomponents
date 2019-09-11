import React, { Component, Fragment } from "react";

// Import common components
import { Select } from "..";

class SelectExample extends Component {
  static getOneEmptyList(item) {
    if (item === "Karnataka") {
      return null;
    }
    return <li key={item}>{item}</li>;
  }

  static getList(item) {
    return (
      <li className="nw-sample-select-list" key={item}>
        {item}
      </li>
    );
  }

  constructor(props) {
    super(props);

    const selectList = ["Delhi", "Mumbai", "Gujarat", "Karnataka"];

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
      <Fragment>
        <Select
          selectedIndex={-1}
          id="select-test"
          selectedValue={selectSelectedValue}
          inpList={inpList}
          getSelection={this.getSelectSelection}
          renderList={SelectExample.getList}
        />
        <Select
          id="select1-test"
          className="nwc-select-secondary"
          selectedValue={selectSelectedValue}
          inpList={inpList}
          getSelection={this.getSelectSelection}
          renderList={SelectExample.getOneEmptyList}
        />
      </Fragment>
    );
  }
}

export default SelectExample;
