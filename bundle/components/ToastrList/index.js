import React from "react";
import PropTypes from "prop-types";
import Close from "../Close";

function ToastrList(props) {
  const { item, hideToastr, ...otherProps } = props;
  return (
    <li
      key={`toastr-${item.id}`}
      className={`nwc-toastr-list ${item.className}`}
      {...otherProps}
    >
      <Close
        className="nwc-close-sm"
        onClick={() => {
          hideToastr(item);
        }}
      />
      {item.message}
    </li>
  );
}

ToastrList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    message: PropTypes.string.isRequired,
  }).isRequired,
  hideToastr: PropTypes.func.isRequired,
};

export default ToastrList;
