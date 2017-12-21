import React from "react";

import { GridContainer, GridRow } from "../../components";
import "./_index.scss";

import ColorsDisplay from "../ColorsDisplay";
import FontSizes from "../FontSizes";
import MediaBreakpoints from "../MediaBreakpoints";

import AutocompleteExample from "../AutocompleteExample";
import SelectExample from "../SelectExample";
import InputExample from "../InputExample";
import ButtonModalExample from "../ButtonModalExample";
import ButtonToastrExample from "../ButtonToastrExample";

function App() {
  return (
    <GridContainer className="nw-app" strict>
      <GridRow>
        <ColorsDisplay />
        <FontSizes />
        <MediaBreakpoints />

        <AutocompleteExample />
        <SelectExample />
        <InputExample />
        <ButtonModalExample />
        <ButtonToastrExample />
      </GridRow>
    </GridContainer>
  );
}

export default App;
