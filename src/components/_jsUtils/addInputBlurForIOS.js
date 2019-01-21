function isTextInput(node) {
  return ["INPUT"].indexOf(node.nodeName) !== -1;
}

function addInputBlurForIOS(e) {
  if (!isTextInput(e.target) && isTextInput(document.activeElement)) {
    document.activeElement.blur();
  }
}

export default addInputBlurForIOS;
