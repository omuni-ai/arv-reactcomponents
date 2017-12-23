import React, { Component } from "react";
import { GridRow, GridColumn, Input } from "../../components";

const value = "";

class RadioDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioState: true,
    };

    this.onCheckChange = this.onCheckChange.bind(this);
  }

  onCheckChange() {
    this.setState({
      radioState: !this.state.radioState,
    });
  }

  render() {
    const { radioState } = this.state;

    return (
      <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
        <h1>Checkboxes</h1>
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <h2>Color Variants</h2>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                placeholder="Normal"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-radio-primary"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-radio-primary
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-radio-secondary"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-radio-secondary
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-radio-success"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-radio-success
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-radio-danger"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-radio-danger
            </form>
          </GridColumn>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <h2>Size Variants</h2>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-xxl"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xxl
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-xl"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xl
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-lg"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-lg
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-normal"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-normal
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-sm"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-sm
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-xs"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xs
            </form>
            <form className="nw-div-wrapper">
              <Input
                name="radio"
                type="radio"
                className="nwc-inp-xxs"
                value={value}
                checked={radioState}
                onChange={this.onCheckChange}
              />
              .nwc-inp-xxs
            </form>
          </GridColumn>
        </GridRow>
      </GridColumn>
    );
  }
}

export default RadioDisplay;
