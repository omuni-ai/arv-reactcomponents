/* eslint-disable */

export const isMobile = window.innerWidth <= 768;
export const localStorage = "localStorage" in window && window.localStorage || null;



export const vendorsPrefixes = ["ms", "moz", "webkit", "o"];
export const requestAnimationFrameVendor = vendorsPrefixes.find(prefix => window[`${prefix}RequestAnimationFrame`]);
export const cancelAnimationFrameVendor = vendorsPrefixes.find(
prefix =>
  window[`${prefix}CancelAnimationFrame`] ||
  window[`${prefix}CancelRequestAnimationFrame`],
);
