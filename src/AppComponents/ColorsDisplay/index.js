import React from "react";
import { GridRow, GridColumn } from "../../components";

import "./_index.scss";

function ColorsDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Colors</h1>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-white" />
        <GridColumn className="nwc-grid-col-sm-4">$white</GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-black" />
        <GridColumn className="nwc-grid-col-sm-4">$black</GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-concrete" />
        <GridColumn className="nwc-grid-col-sm-4">$concrete</GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-violet-red" />
        <GridColumn className="nwc-grid-col-sm-4">
          $violet-red / $color-primary
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-lochmara" />
        <GridColumn className="nwc-grid-col-sm-4">
          $lochmara / $color-secondary
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-fountain-blue" />
        <GridColumn className="nwc-grid-col-sm-4">
          $fountain-blue / $color-notification
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-fern" />
        <GridColumn className="nwc-grid-col-sm-4">
          $fern / $color-success
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-tan-hide" />
        <GridColumn className="nwc-grid-col-sm-4">
          $tan-hide / $color-warning
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-chestnut-rose" />
        <GridColumn className="nwc-grid-col-sm-4">
          $chestnut-rose / $color-danger
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default ColorsDisplay;
