import getBoundClientRect from './getBoundClientRect';

function scrollElemToView(parent, child) {
  const parentElem = parent;
  const childElem = child;
  if (parentElem && child) {
    const parentVals = getBoundClientRect(parentElem);
    const childVals = getBoundClientRect(childElem);
    let offset = 0;
    if (childVals.bottom > parentVals.bottom) {
      offset = childVals.bottom - parentVals.bottom;
    } else if (childVals.top < parentVals.top) {
      offset = childVals.top - parentVals.top;
    }

    parentElem.scrollTop += offset;
  }
}

export default scrollElemToView;
