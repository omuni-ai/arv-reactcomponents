import Utils from "../_jsUtils";

function setFocus(context) {
  if (context) {
    context.focus();
  }
}

function onEscapeClose(e) {
  Utils.preventEventPropagation(e);
  const { onClose } = this.props;
  if (e.key === "Escape") {
    onClose(e);
  }
}

export { setFocus, onEscapeClose };
