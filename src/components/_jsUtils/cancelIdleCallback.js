const vendors = ["ms", "moz", "webkit", "o"];

let cAF = window.cancelIdleCallback;

if (!cAF) {
  cAF = vendors.find(prefix => window[`${prefix}CancelIdleCallback`]);
}

if (!cAF) {
  cAF = clearTimeout;
}

function cancelIdleCallback(requestId) {
  cAF(requestId);
}

export default cancelIdleCallback;
