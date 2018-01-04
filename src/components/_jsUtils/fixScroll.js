let { scrollY } = window;
let bodyFixedState = false;

function fixScroll() {
  ({ scrollY } = window);
  setTimeout(
    () => {
      const bodyElem = document.querySelector("body");
      bodyElem.classList.toggle("nwc-hide-scrollbar", true);
      bodyElem.style.top = `-${scrollY}px`;
      bodyFixedState = true;
    },
    0,
    false,
  );
}

function unFixScroll() {
  const bodyElem = document.querySelector("body");
  bodyElem.classList.toggle("nwc-hide-scrollbar", false);
  bodyElem.style.top = null;
  bodyFixedState = false;
  if (scrollY) {
    window.scrollTo(0, scrollY);
  }
}

function isBodyFixed() {
  return bodyFixedState;
}

export { fixScroll, unFixScroll, isBodyFixed };
