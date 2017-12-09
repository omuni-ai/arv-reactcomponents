function onInpChange(e) {
  this.props.onChange(e);

  this.setState({
    val: e.target.value,
  });
}

function restrictVal(val, type) {
  switch (type) {
    case 'number':
      if (this.props.maxLength) {
        return val.slice(0, this.props.maxLength);
      }
      return val;
    default:
      return val;
  }
}

function validateInput(restrictedVal, validateWithPattern) {
  try {
    validateWithPattern.forEach((item) => {
      if (!item.pattern.test(restrictedVal)) {
        this.props.onError({
          status: false,
          msg: item.msg,
        });
        throw new Error('break');
      }
    });
  } catch (err) {
    this.isError = true;
    return;
  }
  this.props.onError({
    status: true,
  });
  this.isError = false;
}

export {
  onInpChange,
  restrictVal,
  validateInput,
};
