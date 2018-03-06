import React from "react";
import { GridRow, GridColumn } from "../../components";

function CSSGlobalClassesDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Global CSS classes</h1>
      <GridRow>
        <GridColumn className="nw-block">
          .nwc-clearfix, .nwc-hide, .nwc-hidden, .nwc-text-primary,
          .nwc-bg-primary, .nwc-contentloader
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default CSSGlobalClassesDisplay;
