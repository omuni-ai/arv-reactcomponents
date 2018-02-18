import requestAnimationFrame from "./requestAnimationFrame";
import windowScroll from "./windowScroll";
import { isBodyFixed } from "./fixScroll";

function getScrollDirection(current, prev) {
  if (prev - current < -5) {
    return "down";
  } else if (prev - current > 5) {
    return "up";
  }

  return "";
}

function onElementScroll(element, callback, optional = false) {
  const isWindow = element === window;
  let prevScroll = 0;

  const onScroll = () => {
    if (isWindow && isBodyFixed()) {
      return;
    }

    requestAnimationFrame(() => {
      const scrollTop = (isWindow && windowScroll().top) || element.scrollTop;
      callback({
        scrollTop,
        direction: getScrollDirection(scrollTop, prevScroll),
      });

      prevScroll = scrollTop;
    });
  };

  element.addEventListener("scroll", onScroll, optional);

  return () => {
    element.removeEventListener("scroll", onScroll, optional);
  };
}

export default onElementScroll;
