import React from "react";
import { GridRow, GridColumn } from "../../components";

function FontSizes() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Font Sizes</h1>
      <GridRow className="nw-color-row">
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-xxxl</h2>
          <div className="nw-font-xxxl">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-xxl</h2>
          <div className="nw-font-xxl">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-xl</h2>
          <div className="nw-font-xl">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-lg</h2>
          <div className="nw-font-lg">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-normal</h2>
          <div className="nw-font-normal">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-sm</h2>
          <div className="nw-font-sm">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-xs</h2>
          <div className="nw-font-xs">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-xxs</h2>
          <div className="nw-font-xxs">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-xxsm</h2>
          <div className="nw-font-xxsm">A B C a b c</div>
        </GridColumn>
        <GridColumn className="nw-block nwc-grid-col-sm-4">
          <h2>$font-size-xxxs</h2>
          <div className="nw-font-xxxs">A B C a b c</div>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default FontSizes;
