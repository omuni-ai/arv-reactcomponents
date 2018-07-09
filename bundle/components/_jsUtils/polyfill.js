import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";
import requestIdleCallback from "./requestIdleCallback";
import cancelIdleCallback from "./cancelIdleCallback";

function polyfill() {
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
  window.requestIdleCallback = requestIdleCallback;
  window.cancelIdleCallback = cancelIdleCallback;
}

export default polyfill;
