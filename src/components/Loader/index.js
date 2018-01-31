import React from "react";
import PropTypes from "prop-types";

function Loader(props) {
  const { className } = props;
  return (
    <svg
      className={`nwc-loader ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        className="nwc-loader-circle"
        cx="50"
        cy="50"
        fill="none"
        stroke="#f2258b"
        strokeWidth="8"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(313.584 50 50)"
      />
    </svg>
  );
}

Loader.defaultProps = {
  className: "",
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
