import getBoundClientRect from "./getBoundClientRect";

function scrollElemToTop(parent, child) {
  const parentElem = parent;
  const childElem = child;
  if (parentElem && child) {
    const parentVals = getBoundClientRect(parentElem);
    const childVals = getBoundClientRect(childElem);
    const offset =
      childVals.bottom -
      parentVals.bottom +
      (parentVals.height - childVals.height);

    parentElem.scrollTop += offset;
  }
}

export default scrollElemToTop;
