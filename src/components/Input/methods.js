function restrictVal(value, props) {
  const { type, maxLength } = props;

  const newValue = value;

  switch (type) {
    case "number":
      if (maxLength) {
        return newValue.slice(0, maxLength);
      }
      return newValue;
    default:
      return newValue;
  }
}

function validateValue(value, props) {
  const { validateWithPattern } = props;
  const errorObj = { isValid: true, errorMsg: "" };

  validateWithPattern.find(item => {
    if (!item.pattern.test(value)) {
      errorObj.isValid = false;
      errorObj.errorMsg = item.msg;
      return true;
    }
    return false;
  });

  return errorObj;
}

function getValidatedOutput(value) {
  const { props } = this;

  const newValue = restrictVal(value, props);

  const isValidObj = validateValue(newValue, props);
  const { isValid, errorMsg } = isValidObj;

  return {
    value: newValue,
    isValid,
    errorMsg,
  };
}

export default getValidatedOutput;
