import { cancelAnimationFrameVendor } from "../constants";

function cancelAnimationFrame(requestId) {
  const cAF =
    window.cancelAnimationFrame || cancelAnimationFrameVendor || clearTimeout;
  return cAF(requestId);
}

export default cancelAnimationFrame;
