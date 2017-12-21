import React from "react";
import { GridRow, GridColumn, Button } from "../../components";

import "./styles/_index.scss";

function ButtonDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Buttons</h1>
      <GridRow>
        <GridColumn className="nwc-grid-col-sm-12 nw-block">
          <h2>Color Variants</h2>
          <Button>Normal</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary">Primary</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-secondary">Secondary</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-success">Success</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-danger">Danger</Button>
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-12 nw-block">
          <h2>Size Variants</h2>
          <Button className="nwc-btn-primary nwc-btn-xxl">Button xxl</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary nwc-btn-xl">Button xl</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary nwc-btn-lg">Button lg</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary nwc-btn-normal">
            Button normal
          </Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary nwc-btn-sm">Button normal</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary nwc-btn-xs">Button normal</Button>
          <span>&nbsp;</span>
          <Button className="nwc-btn-primary nwc-btn-xxs">Button normal</Button>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default ButtonDisplay;
