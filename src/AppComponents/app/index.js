import React from "react";

import { GridContainer, GridRow } from "../../components";
import "./_index.scss";

import AutocompleteExample from "../AutocompleteExample";
import SelectExample from "../SelectExample";
import InputExample from "../InputExample";
import ButtonModalExample from "../ButtonModalExample";
import ButtonToastrExample from "../ButtonToastrExample";

function App() {
  return (
    <GridContainer className="nw-app" strict>
      <GridRow>
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
