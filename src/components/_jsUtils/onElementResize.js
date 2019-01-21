import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";

function onElementResize(element, callback, optional = false) {
  const elem = element;

  let requestAnimationFrameId;
  const onResize = () => {
    cancelAnimationFrame(requestAnimationFrameId);
    requestAnimationFrameId = requestAnimationFrame(callback);
  };

  elem.addEventListener("resize", onResize, optional);

  return () => {
    elem.removeEventListener("resize", onResize, optional);
  };
}

export default onElementResize;
