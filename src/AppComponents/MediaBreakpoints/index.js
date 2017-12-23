import React from "react";
import { GridRow, GridColumn } from "../../components";

function MediaBreakpoints() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Media Breakpoints</h1>
      <GridRow>
        <GridColumn className="nwc-grid-col-sm-6 nw-block">
          <h2>For media max-width</h2>
          <div>$screen-max-xs = 768px</div>
          <div>$screen-max-sm = 992px</div>
          <div>$screen-max-md = 1200px</div>
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-6 nw-block">
          <h2>For media min-width</h2>
          <div>$screen-min-sm = 769px</div>
          <div>$screen-min-md = 993px</div>
          <div>$screen-min-lg = 1201px</div>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default MediaBreakpoints;
