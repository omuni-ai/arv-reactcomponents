import requestAnimationFrame from "./requestAnimationFrame";
import windowScroll from "./windowScroll";

function getScrollDirection(current, prev) {
  if (prev - current < 0) {
    return "down";
  } else if (prev - current > 0) {
    return "up";
  }

  return "";
}

function onElementScroll(element, callback) {
  const isWindow = element === window;
  let prevScroll = 0;
  element.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      const scrollTop = (isWindow && windowScroll().top) || element.scrollTop;
      callback({
        scrollTop,
        direction: getScrollDirection(scrollTop, prevScroll),
      });

      prevScroll = scrollTop;
    });
  });
}

export default onElementScroll;
