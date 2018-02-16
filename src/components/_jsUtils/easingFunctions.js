// https://github.com/danro/jquery-easing/blob/master/jquery.easing.js

const easeInOut = (currentTime, start, change, duration) => {
  let currTime = currentTime / (duration / 2);
  if (currTime < 1) {
    return change / 2 * currTime * currTime + start;
  }
  currTime -= 1;
  return -change / 2 * (currTime * (currTime - 2) - 1) + start;
};

export default easeInOut;
