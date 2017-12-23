import React from "react";
import { GridRow, GridColumn } from "../../components";

function ColorsDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Colors</h1>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-white">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">$white</GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-black">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">$black</GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-concrete">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">$concrete</GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-violet-red">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $violet-red / $color-primary
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-lochmara">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $lochmara / $color-secondary
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-fountain-blue">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $fountain-blue / $color-notification
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-fern">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $fern / $color-success
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-tan-hide">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $tan-hide / $color-warning
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-chestnut-rose">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $chestnut-rose / $color-danger
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default ColorsDisplay;
