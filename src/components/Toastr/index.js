import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Close from '../Close';

import './styles/_index.scss';
import {
  clearAll,
  showToastr,
  renderToastr,
  setConfig,
  createBaseContainer,
} from './methods';

class Toastr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'toastrList': [], // eslint-disable-line react/no-unused-state
    };

    Toastr.clearAll = clearAll.bind(this);
    Toastr.showToastr = showToastr.bind(this);
    Toastr.setConfig = setConfig.bind(this);
    Toastr.setConfig({ limitTo: 5 });
  }

  componentDidUpdate() {
    renderToastr.bind(this)();
  }

  render() {
    return null;
  }
}

ReactDOM.render(
  <Toastr />,
  document.createElement('div'),
);

createBaseContainer();

export default Toastr;
