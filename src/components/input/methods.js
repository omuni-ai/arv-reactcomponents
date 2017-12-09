const restrictVal = (value, props) => {
  const { type, maxLength } = props;

  const newValue = value;

  switch (type) {
    case 'number':
      if (maxLength) {
        return newValue.slice(0, maxLength);
      }
      return newValue;
    default:
      return newValue;
  }
};

const validateValue = (value, props) => {
  const { validateWithPattern } = props;

  let isValid = true;
  let errorMsg;

  try {
    validateWithPattern.forEach((item) => {
      if (!item.pattern.test(value)) {
        isValid = false;
        errorMsg = item.msg;
        throw new Error('break');
      }
    });
  } catch (err) {
    /** break */
  }

  return { isValid, errorMsg };
};

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
