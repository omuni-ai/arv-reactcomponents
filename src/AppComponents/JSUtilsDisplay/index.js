import React from "react";
import { GridRow, GridColumn } from "../../components";

function JSUtilsDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>JS Utils</h1>
      <GridRow>
        <GridColumn className="nw-block">
          noop, getBoundClientRect, scrollElemToView, scrollElemToTop, scrollTo,
          fixScroll, unFixScroll, isBodyFixed, requestIdleCallback,
          cancelIdleCallback, easeInOut, requestAnimationFrame,
          cancelAnimationFrame, customPropTypes, windowScroll, localStorage,
          isMobile, isTouch, onElementScroll, polyfill, preventDefault,
          preventEventPropagation, getUrlParameter, setUrlParameter
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default JSUtilsDisplay;
