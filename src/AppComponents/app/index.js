import React from 'react';

import { GridContainer, GridRow } from '../../components';
import './_index.scss';

import AutocompleteExample from '../AutocompleteExample';
import DropdownExample from '../DropdownExample';
import InputExample from '../InputExample';
import ButtonModalExample from '../ButtonModalExample';

function App() {
  return (
    <GridContainer className="nw-app" strict>
      <GridRow>
        <AutocompleteExample />
        <DropdownExample />
        <InputExample />
        <ButtonModalExample />
      </GridRow>
    </GridContainer>
  );
}

export default App;
