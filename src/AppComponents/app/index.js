import React from "react";

import { GridContainer, GridRow } from "../../components";

import ColorsDisplay from "../ColorsDisplay";
import FontSizes from "../FontSizes";
import MediaBreakpoints from "../MediaBreakpoints";
import ButtonDisplay from "../ButtonDisplay";
import InputDisplay from "../InputDisplay";
import CheckboxDisplay from "../CheckboxDisplay";
import RadioDisplay from "../RadioDisplay";
import GridDisplay from "../GridDisplay";

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
        <ButtonDisplay />
        <InputDisplay />
        <CheckboxDisplay />
        <RadioDisplay />
        <GridDisplay />

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
