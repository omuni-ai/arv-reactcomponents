function getBoundClientRect(elem) {
  // crossbrowser version
  if (!elem) {
    return null;
  }

  const box = elem.getBoundingClientRect();

  const { body, documentElement } = document;

  const scrollTop =
    window.pageYOffset || documentElement.scrollTop || body.scrollTop;
  const scrollLeft =
    window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;

  const clientTop = documentElement.clientTop || body.clientTop || 0;
  const clientLeft = documentElement.clientLeft || body.clientLeft || 0;

  const top = box.top + (scrollTop - clientTop);
  const left = box.left + (scrollLeft - clientLeft);

  return {
    top,
    right: left + box.width,
    bottom: top + box.height,
    left,
    width: box.width,
    height: box.height,
  };
}

export default getBoundClientRect;
