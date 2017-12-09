import React from 'react';

import './_index.scss';

import AutocompleteExample from '../AutocompleteExample';
import InputExample from '../InputExample';
import ButtonModalExample from '../ButtonModalExample';

function App() {
  return (
    <div className="nw-app">
      <AutocompleteExample />
      <InputExample />
      <ButtonModalExample />
    </div>
  );
}

export default App;
