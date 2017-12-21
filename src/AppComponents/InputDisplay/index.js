import React from "react";
import { GridRow, GridColumn, Input, Utils } from "../../components";

import "./_index.scss";

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
            placeholder="Default"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-primary"
            placeholder="Primary"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-secondary"
            placeholder="Secondary"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-success"
            placeholder="Success"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-danger"
            placeholder="Danger"
            value={value}
            onChange={Utils.noop}
          />
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-12 nw-block nw-block-white">
          <h2>Size Variants</h2>
          <Input
            className="nw-display-inp nwc-inp-xxl"
            placeholder="Input xxl"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-xl"
            placeholder="Input xl"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-lg"
            placeholder="Input lg"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-normal"
            placeholder="Input normal"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-sm"
            placeholder="Input normal"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-xs"
            placeholder="Input normal"
            value={value}
            onChange={Utils.noop}
          />
          <span>&nbsp;</span>
          <Input
            className="nw-display-inp nwc-inp-xxs"
            placeholder="Input normal"
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
