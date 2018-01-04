import PropTypes from "prop-types";

function Dummy(props) {
  return props.children;
}

Dummy.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dummy;
