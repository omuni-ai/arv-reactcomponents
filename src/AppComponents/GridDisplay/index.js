import React from "react";
import { GridRow, GridColumn } from "../../components";

import "./styles/_index.scss";

function GridDisplay() {
  return (
    <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
      <h1>Grid Layout</h1>
      <GridRow>
        <GridColumn>
          <h2>1) .nwc-grid-col class</h2>
          <GridRow>
            <GridColumn className="nw-block">.nwc-grid-col</GridColumn>
            <GridColumn className="nw-block">.nwc-grid-col</GridColumn>
            <GridColumn className="nw-block">.nwc-grid-col</GridColumn>
          </GridRow>
        </GridColumn>
        <GridColumn>
          <h2>2) .nwc-grid-col-[sm, md, lg]</h2>
          <h3>
            Fills space in a row with equal width till it reaches breakpoint
          </h3>
          <GridRow>
            <GridColumn className="nwc-grid-col-sm nw-block">
              .nwc-grid-col-sm
            </GridColumn>
            <GridColumn className="nwc-grid-col-sm nw-block">
              .nwc-grid-col-sm
            </GridColumn>
            <GridColumn className="nwc-grid-col-md nw-block">
              .nwc-grid-col-md
            </GridColumn>
            <GridColumn className="nwc-grid-col-lg nw-block">
              .nwc-grid-col-lg
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn className="nwc-grid-col-sm nw-block">
              .nwc-grid-col-sm
            </GridColumn>
            <GridColumn className="nwc-grid-col-md nw-block">
              .nwc-grid-col-md
            </GridColumn>
            <GridColumn className="nwc-grid-col-sm nw-block">
              .nwc-grid-col-sm
            </GridColumn>
            <GridColumn className="nwc-grid-col-lg nw-block">
              .nwc-grid-col-lg
            </GridColumn>
          </GridRow>
        </GridColumn>
        <GridColumn>
          <h2>3) .nwc-grid-col-[sm-[1-12], md-[1-12], lg-[1-12]]</h2>
          <h3>
            Eqaual Width Columns with different breakpoints. `-4` here is to
            divide row into 3(12 / 4) sections
          </h3>
          <GridRow>
            <GridColumn className="nwc-grid-col-sm-4 nw-block">
              .nwc-grid-col-sm-4
            </GridColumn>
            <GridColumn className="nwc-grid-col-sm-4 nw-block">
              .nwc-grid-col-sm-4
            </GridColumn>
            <GridColumn className="nwc-grid-col-sm-4 nw-block">
              .nwc-grid-col-sm-4
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn className="nwc-grid-col-md-4 nw-block">
              .nwc-grid-col-md-4
            </GridColumn>
            <GridColumn className="nwc-grid-col-md-4 nw-block">
              .nwc-grid-col-md-4
            </GridColumn>
            <GridColumn className="nwc-grid-col-md-4 nw-block">
              .nwc-grid-col-md-4
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn className="nwc-grid-col-lg-4 nw-block">
              .nwc-grid-col-lg-4
            </GridColumn>
            <GridColumn className="nwc-grid-col-lg-4 nw-block">
              .nwc-grid-col-lg-4
            </GridColumn>
            <GridColumn className="nwc-grid-col-lg-4 nw-block">
              .nwc-grid-col-lg-4
            </GridColumn>
          </GridRow>
        </GridColumn>
        <GridColumn>
          <h2>4) .nwc-grid-col-[sm-[1-12], md-[1-12], lg-[1-12]]</h2>
          <h3>Different Width Columns with different breakpoints</h3>
          <GridRow>
            <GridColumn className="nwc-grid-col-sm-7 nw-block">
              .nwc-grid-col-sm-7
            </GridColumn>
            <GridColumn className="nwc-grid-col-sm-2 nw-block">
              .nwc-grid-col-sm-2
            </GridColumn>
            <GridColumn className="nwc-grid-col-sm-3 nw-block">
              .nwc-grid-col-sm-3
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn className="nwc-grid-col-md-3 nw-block">
              .nwc-grid-col-md-3
            </GridColumn>
            <GridColumn className="nwc-grid-col-md-2 nw-block">
              .nwc-grid-col-md-2
            </GridColumn>
            <GridColumn className="nwc-grid-col-md-7 nw-block">
              .nwc-grid-col-md-7
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn className="nwc-grid-col-lg-2 nw-block">
              .nwc-grid-col-lg-2
            </GridColumn>
            <GridColumn className="nwc-grid-col-lg-7 nw-block">
              .nwc-grid-col-lg-7
            </GridColumn>
            <GridColumn className="nwc-grid-col-lg-3 nw-block">
              .nwc-grid-col-lg-3
            </GridColumn>
          </GridRow>
        </GridColumn>
        <GridColumn>
          <h2>
            5) Nesting Columns is also possible. But use a row(GridRow) first
            and then nest columns(GridColumn)
          </h2>
        </GridColumn>
      </GridRow>
    </GridColumn>
  );
}

export default GridDisplay;
