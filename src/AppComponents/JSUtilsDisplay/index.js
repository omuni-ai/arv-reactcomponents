import React from "react";
import { GridRow, GridColumn } from "../../components";
import ShowCode from "../ShowCode";

const componentFilePath = "JSUtilsDisplay/index.js";

function JSUtilsDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1 className="nw-header">JS Utils</h1>
      <ShowCode fileName={componentFilePath} />
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
