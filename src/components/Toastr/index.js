import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Close from '../Close';

import './styles/_index.scss';
import {
  showToastr,
  renderToastr,
} from './methods';

class Toastr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'toastrList': [], // eslint-disable-line react/no-unused-state
    };

    Toastr.showToastr = showToastr.bind(this);
  }

  componentWillMount() {
    const toastrContainer = document.createElement('div');
    toastrContainer.className = 'nwc-toastr-container';
    document.querySelectorAll('body')[0].appendChild(toastrContainer);
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

export default Toastr;
