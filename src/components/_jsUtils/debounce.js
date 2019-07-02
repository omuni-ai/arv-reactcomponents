const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export default debounce;
