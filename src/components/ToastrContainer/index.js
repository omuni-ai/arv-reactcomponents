import React from "react";
import PropTypes from "prop-types";
import ToastrList from "../ToastrList";

function ToastrContainer(props) {
  const { toastrList, limitTo, hideToastr } = props;
  return (
    <div role="button" tabIndex={0}>
      <ul className="nwc-toastr-container">
        {[...toastrList].reverse().map((item, index) => {
          if (index < limitTo) {
            return (
              <ToastrList item={item} key={item.id} hideToastr={hideToastr} />
            );
          }

          return null;
        })}
      </ul>
    </div>
  );
}

ToastrContainer.propTypes = {
  toastrList: PropTypes.arrayOf(PropTypes.object).isRequired,
  limitTo: PropTypes.number.isRequired,
  hideToastr: PropTypes.func.isRequired,
};

export default ToastrContainer;
