import easeInOut from "./easingFunctions";
import windowScroll from "./windowScroll";
import requestAnimationFrame from "./requestAnimationFrame";

const scrollTo = (element, toX, toY, duration = 0) => {
  const elem = element;
  const isWindow = elem === window;
  let startX;
  let startY;

  if (isWindow) {
    const windowVals = windowScroll();
    startY = windowVals.top;
    startX = windowVals.left;
  } else {
    startY = elem.scrollTop;
    startX = elem.scrollLeft;
  }

  const changeY = toY - startY;
  const changeX = toX - startX;
  const increment = 20;

  const animateScroll = elapsedTime => {
    let elTime = elapsedTime;
    elTime += increment;
    const positionX = easeInOut(elTime, startX, changeX, duration);
    const positionY = easeInOut(elTime, startY, changeY, duration);
    if (isWindow) {
      elem.scrollTo(positionX, positionY);
    } else {
      elem.scrollTop = positionY || elem.scrollTop;
      elem.scrollLeft = positionX || elem.scrollLeft;
    }
    if (elTime < duration) {
      requestAnimationFrame(() => {
        animateScroll(elTime);
      });
    }
  };

  if (isWindow && !duration) {
    window.scrollTo(toX, toY);
  } else if (!duration) {
    elem.scrollTop += changeY;
    elem.scrollLeft += changeX;
  } else {
    requestAnimationFrame(() => {
      animateScroll(0);
    });
  }
};

export default scrollTo;
