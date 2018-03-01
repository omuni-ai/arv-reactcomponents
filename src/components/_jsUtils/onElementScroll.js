import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";
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
  const elem = element;
  const isWindow = elem === window;
  let prevScroll = 0;

  let requestAnimationFrameId;
  const onScroll = () => {
    if (isWindow && isBodyFixed()) {
      return;
    }

    cancelAnimationFrame(requestAnimationFrameId);
    requestAnimationFrameId = requestAnimationFrame(() => {
      const scrollTop = (isWindow && windowScroll().top) || elem.scrollTop;
      callback({
        scrollTop,
        direction: getScrollDirection(scrollTop, prevScroll),
      });

      prevScroll = scrollTop;
    });
  };

  elem.addEventListener("scroll", onScroll, optional);

  return () => {
    elem.removeEventListener("scroll", onScroll, optional);
  };
}

export default onElementScroll;
