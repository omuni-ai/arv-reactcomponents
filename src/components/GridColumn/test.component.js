import React from "react";
import GridColumn from "./";

const GridColumnSuccessTest = () => (
  <GridColumn>
    <div>Hello</div>
  </GridColumn>
);

const GridColumnErrorTest = () => (
  <GridColumn>
    <GridColumn>Hello</GridColumn>
  </GridColumn>
);

export { GridColumnSuccessTest, GridColumnErrorTest };
