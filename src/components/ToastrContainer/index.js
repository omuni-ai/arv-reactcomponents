import React from "react";
import PropTypes from "prop-types";
import ToastrList from "../ToastrList";

import "./styles/_index.scss";

function ToastrContainer(props) {
  const { toastrList, limitTo, hideToastr } = props;
  return (
    <ul className="nwc-toastr-container">
      {[...toastrList].reverse().map((item, index) => {
        if (index < limitTo) {
          return <ToastrList item={item} hideToastr={hideToastr} />;
        }

        return null;
      })}
    </ul>
  );
}

ToastrContainer.propTypes = {
  toastrList: PropTypes.arrayOf(PropTypes.object).isRequired,
  limitTo: PropTypes.number.isRequired,
  hideToastr: PropTypes.func.isRequired,
};

export default ToastrContainer;
