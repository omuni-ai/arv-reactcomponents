import Utils from "../_jsUtils";

function setFocus(context) {
  if (context) {
    context.focus();
  }
}

function onEscapeClose(e) {
  Utils.preventEventPropagation(e);
  const { onClose } = this.props;
  console.log(e.key);
  if (e.key === "Escape") {
    onClose(e);
  }
}

export { setFocus, onEscapeClose };
