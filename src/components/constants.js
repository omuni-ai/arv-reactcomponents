export const screenMedia = {
  lg: 1200,
  md: 992,
  sm: 768,
};

export const isMobile = window.innerWidth <= 768;
export const localStorage =
  ("localStorage" in window && window.localStorage) || null;

export const windowRequestAnimationFrame = window.requestAnimationFrame;
export const windowCancelAnimationFrame = window.cancelAnimationFrame;

export const vendorsPrefixes = ["ms", "moz", "webkit", "o"];
export const vendorRequestAnimationFrame = vendorsPrefixes.find(
  prefix => window[`${prefix}RequestAnimationFrame`],
);
export const vendorCancelAnimationFrame = vendorsPrefixes.find(
  prefix =>
    window[`${prefix}CancelAnimationFrame`] ||
    window[`${prefix}CancelRequestAnimationFrame`],
);
