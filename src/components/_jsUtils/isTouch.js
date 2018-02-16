import isMobile from "./isMobile";

function isTouch(e) {
  return (
    (("ontouchstart" in window || "onmsgesturechange" in window) &&
      e.sourceCapabilities &&
      e.sourceCapabilities.firesTouchEvents) ||
    isMobile
  );
}

export default isTouch;
