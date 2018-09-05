import React, { Component } from "react";
import { GridRow, GridColumn, Input } from "../../components";
import ShowCode from "../ShowCode";

const value = "";
const componentFilePath = "CheckboxDisplay/index.js";

class CheckboxDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxState: true,
    };

    this.onCheckChange = this.onCheckChange.bind(this);
  }

  onCheckChange() {
    this.setState({
      checkboxState: !this.state.checkboxState,
    });
  }

  render() {
    const { checkboxState } = this.state;

    return (
      <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
        <h1 className="nw-header">Checkboxes</h1>
        <ShowCode fileName={componentFilePath} />
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <h2>Color Variants</h2>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                placeholder="Normal"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-checkbox-primary"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-checkbox-primary
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-checkbox-secondary"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-checkbox-secondary
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-checkbox-notification"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-checkbox-notification
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-checkbox-success"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-checkbox-success
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-checkbox-warning"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-checkbox-warning
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-checkbox-danger"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-checkbox-danger
            </div>
          </GridColumn>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <h2>Size Variants</h2>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-xxl"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xxl
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-xl"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xl
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-lg"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-lg
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-normal"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-normal
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-sm"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-sm
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-xs"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xs
            </div>
            <div className="nw-div-wrapper">
              <Input
                name="checkbox"
                type="checkbox"
                className="nwc-inp-xxs"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xxs
            </div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-checkbox-primary nwc-inp-sm is-covered"
                name="checkbox"
                type="checkbox"
                placeholder="Normal"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
              />
              &nbsp;Covered Input checkbox
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-checkbox-primary"
                name="checkbox"
                type="checkbox"
                placeholder="Normal"
                value={value}
                checked={checkboxState}
                onChange={this.onCheckChange}
                disabled
              />
              &nbsp;Disabled Input checkbox
            </div>
          </GridColumn>
        </GridRow>
      </GridColumn>
    );
  }
}

export default CheckboxDisplay;
