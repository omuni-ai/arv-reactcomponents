const vendors = ["ms", "moz", "webkit", "o"];

let cAF = window.cancelAnimationFrame;

/* istanbul ignore next */
if (!cAF) {
  cAF = vendors.find(
    prefix =>
      window[`${prefix}CancelAnimationFrame`] ||
      window[`${prefix}CancelRequestAnimationFrame`],
  );
}

/* istanbul ignore next */
if (!cAF) {
  cAF = clearTimeout;
}

function cancelAnimationFrame(requestId) {
  cAF(requestId);
}

export default cancelAnimationFrame;
