function restrictVal(value, type, maxLength) {
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

function validateValue(value, validateWithPattern) {
  const errorObj = { isValid: true, errorMsg: "" };

  if (!Array.isArray(validateWithPattern)) {
    return errorObj;
  }

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

export { restrictVal, validateValue };
