import React from "react";
import { GridRow, GridColumn, Button } from "../../components";

function ButtonDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Buttons</h1>
      <GridRow>
        <GridColumn className="nwc-grid-col-sm-12 nw-block nw-block-white">
          <h2>Color Variants</h2>
          <Button>Normal</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary">.nwc-btn-primary</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-secondary">.nwc-btn-secondary</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-success">.nwc-btn-success</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-danger">.nwc-btn-danger</Button>
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-12 nw-block nw-block-white">
          <h2>Size Variants</h2>
          <Button className="nwc-btn-xxl">.nwc-btn-xxl</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-xl">.nwc-btn-xl</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-lg">.nwc-btn-lg</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-normal">.nwc-btn-normal</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-sm">.nwc-btn-sm</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-xs">.nwc-btn-xs</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-xxs">.nwc-btn-xxs</Button>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default ButtonDisplay;
