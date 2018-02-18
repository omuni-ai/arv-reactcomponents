import getBoundClientRect from "./getBoundClientRect";
import scrollTo from "./scrollTo";

function scrollElemToTop(parent, child, duration = 0) {
  const parentElem = parent;
  const childElem = child;
  if (parentElem && child) {
    const parentVals = getBoundClientRect(parentElem);
    const childVals = getBoundClientRect(childElem);

    const offsetTop =
      childVals.bottom -
      parentVals.bottom +
      (parentVals.height - childVals.height);
    const offsetLeft =
      childVals.right - parentVals.right + (parentVals.width - childVals.width);

    const scrollTop = parentElem.scrollTop + offsetTop;
    const scrollLeft = parentElem.scrollLeft + offsetLeft;

    scrollTo(parentElem, scrollLeft, scrollTop, duration);
  }
}

export default scrollElemToTop;
