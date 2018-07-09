const windowScroll = () => {
  const doc = document.documentElement;

  const windowScrollTop =
    (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  const windowScrollLeft =
    (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const windowScrollBottom = windowScrollTop + window.innerHeight;
  const windowScrollRight = windowScrollLeft + window.innerWidth;

  return {
    top: windowScrollTop,
    right: windowScrollRight,
    bottom: windowScrollBottom,
    left: windowScrollLeft,
  };
};

export default windowScroll;
