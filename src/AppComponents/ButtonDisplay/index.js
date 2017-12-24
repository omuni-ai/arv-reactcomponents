import React from "react";
import { GridRow, GridColumn, Button } from "../../components";

function ButtonDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Buttons</h1>
      <GridRow>
        <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
          <h2>Color Variants</h2>
          <div className="nw-div-wrapper">
            <Button>Button</Button>
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-primary">Button</Button>
            .nwc-btn-primary
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-secondary">Button</Button>
            .nwc-btn-secondary
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-notification">Button</Button>
            .nwc-btn-notification
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-success">Button</Button>
            .nwc-btn-success
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-warning">Button</Button>
            .nwc-btn-warning
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-danger">Button</Button>
            .nwc-btn-danger
          </div>
        </GridColumn>
        <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
          <h2>Size Variants</h2>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-xxl">Button</Button>
            .nwc-btn-xxl
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-xl">Button</Button>
            .nwc-btn-xl
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-lg">Button</Button>
            .nwc-btn-lg
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-normal">Button</Button>
            .nwc-btn-normal
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-sm">Button</Button>
            .nwc-btn-sm
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-xs">Button</Button>
            .nwc-btn-xs
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-xxs">Button</Button>
            .nwc-btn-xxs
          </div>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default ButtonDisplay;
