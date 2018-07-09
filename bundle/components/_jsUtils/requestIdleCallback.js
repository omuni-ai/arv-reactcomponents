let lastTime = 0;
const vendors = ["ms", "moz", "webkit", "o"];
let rAF = window.requestIdleCallback;

if (!rAF) {
  rAF = vendors.find(prefix => window[`${prefix}RequestIdleCallback`]);
}

if (!rAF) {
  rAF = cB => {
    const currTime = new Date().getTime();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = setTimeout(() => {
      cB(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function requestIdleCallback(callback) {
  return rAF(callback);
}

export default requestIdleCallback;
