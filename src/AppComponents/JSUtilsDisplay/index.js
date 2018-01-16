import React from "react";
import { GridRow, GridColumn } from "../../components";

function JSUtilsDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>JS Utils</h1>
      <GridRow>
        <GridColumn className="nw-block">
          noop, getBoundClientRect, scrollElemToView, scrollElemToTop,
          fixScroll, unFixScroll, isBodyFixed, preventEventPropagation,
          requestAnimationFrame, cancelAnimationFrame, customPropTypes,
          windowScroll, localStorage
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default JSUtilsDisplay;
