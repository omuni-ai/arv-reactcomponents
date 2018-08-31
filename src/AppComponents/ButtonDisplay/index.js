import React from "react";
import { GridRow, GridColumn, Button, Ripple } from "../../components";
import ShowCode from "../ShowCode";

const componentFilePath = "ButtonDisplay/index.js";

function ButtonDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1 className="nw-header">Buttons</h1>
      <ShowCode fileName={componentFilePath} />
      <GridRow>
        <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
          <h2>Color Variants</h2>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-primary-txt">Button</Button>
            .nwc-btn-primary-txt
          </div>
          <div className="nw-div-wrapper">
            <Button className="nwc-btn-dark-background">Button</Button>
            .nwc-btn-dark-background
          </div>
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
      <GridRow>
        <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
          <div className="nw-div-wrapper">
            <Ripple className="nwc-ripple-dark">
              <Button className="nwc-btn-secondary">
                Button with Dark Ripple
              </Button>
            </Ripple>
            &nbsp;&nbsp;
            <Ripple className="nwc-ripple-light">
              <Button className="nwc-btn-dark-background">
                Button with light Ripple
              </Button>
            </Ripple>
            &nbsp;&nbsp;
          </div>
          <div className="nw-div-wrapper">
            <Button disabled>Normal Disabled</Button>
            &nbsp;&nbsp;
            <Button className="nwc-btn-primary" disabled>
              Solid Disabled
            </Button>
            &nbsp;&nbsp;
            <Button className="nwc-btn-secondary" disabled>
              Flat Disabled
            </Button>
          </div>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default ButtonDisplay;
