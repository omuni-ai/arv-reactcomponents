import React from "react";
import GridContainer from ".";
import GridRow from "../GridRow";
import GridColumn from "../GridColumn";

const GridContainerSuccessTest = () => (
  <GridContainer>
    <GridRow>
      <GridColumn>Hello</GridColumn>
    </GridRow>
  </GridContainer>
);

const GridContainerErrorTest = () => (
  <GridContainer>
    <div>Hello</div>
  </GridContainer>
);

export { GridContainerSuccessTest, GridContainerErrorTest };
