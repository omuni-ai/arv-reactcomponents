const vendors = ["ms", "moz", "webkit", "o"];

let cAF = window.cancelAnimationFrame;

if (!cAF) {
  cAF = vendors.find(
    prefix =>
      window[`${prefix}CancelAnimationFrame`] ||
      window[`${prefix}CancelRequestAnimationFrame`],
  );
}

if (!cAF) {
  cAF = clearTimeout;
}

function cancelAnimationFrame(requestId) {
  cAF(requestId);
}

export default cancelAnimationFrame;
