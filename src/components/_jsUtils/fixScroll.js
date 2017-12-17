let { scrollY } = window;

function fixScroll() {
  ({ scrollY } = window);
  setTimeout(() => {
    const bodyElem = document.querySelector('body');
    bodyElem.classList.toggle('nwc-hide-scrollbar', true);
    bodyElem.style.top = `-${scrollY}px`;
  }, 0, false);
}

function unFixScroll() {
  const bodyElem = document.querySelector('body');
  bodyElem.classList.toggle('nwc-hide-scrollbar', false);
  bodyElem.style.top = null;
  if (scrollY) {
    window.scrollTo(0, scrollY);
  }
}

export {
  fixScroll,
  unFixScroll,
};
