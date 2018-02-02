import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Close from '../Close';
import ToastrContainer from "../ToastrContainer";
import {
  clearAll,
  hideToastr,
  showToastr,
  setConfig,
  createBaseContainer,
} from "./methods";

let hideToastrFn;

class Toastr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toastrList: [], // eslint-disable-line react/no-unused-state
    };

    Toastr.clearAll = clearAll.bind(this);
    Toastr.showToastr = showToastr.bind(this);
    Toastr.setConfig = setConfig.bind(this);
    Toastr.setConfig({ limitTo: 5 });
    hideToastrFn = hideToastr.bind(this);
  }

  render() {
    const { toastrList } = this.state;

    return ReactDOM.createPortal(
      <ToastrContainer
        toastrList={toastrList}
        limitTo={this.limitTo}
        hideToastr={hideToastrFn}
      />,
      document.querySelectorAll(".nwc-toastr-holder")[0],
    );
  }
}

createBaseContainer();

ReactDOM.render(<Toastr />, document.querySelectorAll(".nwc-toastr-holder")[0]);

export default Toastr;
