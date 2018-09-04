import React from "react";
import { GridRow, GridColumn } from "../../components";
import ShowCode from "../ShowCode";

const componentFilePath = "ColorsDisplay/index.js";

function ColorsDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1 className="nw-header">Colors</h1>
      <ShowCode fileName={componentFilePath} />
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
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-primary">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $wild-strawberry / $color-primary
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-secondary">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $lochmara / $color-secondary
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-notification">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $boston-blue / $color-notification
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-success">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $sushi / $color-success
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-warning">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $web-orange / $color-warning
        </GridColumn>
      </GridRow>
      <GridRow className="nw-color-row">
        <GridColumn className="nwc-grid-col-sm-8 nw-color-block nw-color-danger">
          &nbsp;
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-4">
          $torch-red / $color-danger
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default ColorsDisplay;
