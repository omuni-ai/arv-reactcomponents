import React from "react";
import { GridRow, GridColumn, Input, Utils } from "../../components";

const value = "";

function InputDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Inputs</h1>
      <GridRow>
        <GridColumn className="nwc-grid-col-sm-12 nw-block nw-block-white">
          <h2>Color Variants</h2>
          <Input
            className="nw-display-inp"
            placeholder="Normal"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-primary"
            placeholder=".nwc-inp-primary"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-secondary"
            placeholder=".nwc-inp-secondary"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-success"
            placeholder=".nwc-inp-success"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-danger"
            placeholder=".nwc-inp-danger"
            value={value}
            onChange={Utils.noop}
          />
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-12 nw-block nw-block-white">
          <h2>Size Variants</h2>
          <Input
            className="nw-display-inp nwc-inp-xxl"
            placeholder=".nwc-inp-xxl"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-xl"
            placeholder=".nwc-inp-xl"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-lg"
            placeholder=".nwc-inp-lg"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-normal"
            placeholder=".nwc-inp-normal"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-sm"
            placeholder=".nwc-inp-sm"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-xs"
            placeholder=".nwc-inp-xs"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-xxs"
            placeholder=".nwc-inp-xxs"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default InputDisplay;
