import getBoundClientRect from "./getBoundClientRect";
import scrollTo from "./scrollTo";

function scrollElemToView(parent, child, duration = 0) {
  const parentElem = parent;
  const childElem = child;
  if (parentElem && child) {
    const parentVals = getBoundClientRect(parentElem);
    const childVals = getBoundClientRect(childElem);
    let offsetTop = 0;
    let offsetLeft = 0;
    if (childVals.bottom > parentVals.bottom) {
      offsetTop = childVals.bottom - parentVals.bottom;
    } else if (childVals.top < parentVals.top) {
      offsetTop = childVals.top - parentVals.top;
    }

    if (childVals.right > parentVals.right) {
      offsetLeft = childVals.right - parentVals.right;
    } else if (childVals.left < parentVals.left) {
      offsetLeft = childVals.left - parentVals.left;
    }

    const scrollTop = parentElem.scrollTop + offsetTop;
    const scrollLeft = parentElem.scrollLeft + offsetLeft;

    scrollTo(parentElem, scrollLeft, scrollTop, duration);
  }
}

export default scrollElemToView;
