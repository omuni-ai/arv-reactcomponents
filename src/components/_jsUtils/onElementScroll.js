import requestAnimationFrame from "./requestAnimationFrame";
import windowScroll from "./windowScroll";
import { isBodyFixed } from "./fixScroll";

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

  element.addEventListener("scroll", onScroll);

  return () => {
    element.removeEventListener("scroll", onScroll);
  };
}

export default onElementScroll;
