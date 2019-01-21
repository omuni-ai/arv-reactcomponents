import React from "react";

import { GridContainer, GridRow, Utils } from "../../components";

import ColorsDisplay from "../ColorsDisplay";
import FontSizes from "../FontSizes";
import MediaBreakpoints from "../MediaBreakpoints";
import ButtonDisplay from "../ButtonDisplay";
import InputDisplay from "../InputDisplay";
import CheckboxDisplay from "../CheckboxDisplay";
import RadioDisplay from "../RadioDisplay";
import GridDisplay from "../GridDisplay";
import CSSGlobalClassesDisplay from "../CSSGlobalClassesDisplay";
import JSUtilsDisplay from "../JSUtilsDisplay";

import AutocompleteExample from "../AutocompleteExample";
import SelectExample from "../SelectExample";
import InputExample from "../InputExample";
import ButtonModalExample from "../ButtonModalExample";
import ButtonToastrExample from "../ButtonToastrExample";
import CarouselExample from "../CarouselExample";
import MasonryExample from "../MasonryExample";
import RecyclerViewExample from "../RecyclerViewExample";

function App() {
  return (
    <GridContainer
      className="nw-app"
      onTouchStart={Utils.addInputBlurForIOS}
      strict
    >
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
        <CarouselExample />

        <CSSGlobalClassesDisplay />
        <JSUtilsDisplay />
        <RecyclerViewExample />
        <MasonryExample />
      </GridRow>
    </GridContainer>
  );
}

export default App;
