import {
  windowCancelAnimationFrame,
  vendorCancelAnimationFrame,
} from "../constants";

function cancelAnimationFrame(requestId) {
  const cAF =
    windowCancelAnimationFrame || vendorCancelAnimationFrame || clearTimeout;
  return cAF(requestId);
}

export default cancelAnimationFrame;
