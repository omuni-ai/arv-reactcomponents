import React from "react";
import { GridRow, GridColumn } from "../../components";
import ShowCode from "../ShowCode";

const componentFilePath = "CSSGlobalClassesDisplay/index.js";

function CSSGlobalClassesDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1 className="nw-header">Global CSS classes</h1>
      <ShowCode fileName={componentFilePath} />
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
