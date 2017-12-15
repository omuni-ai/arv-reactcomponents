function propsRequiredForType(props, propName) {
  const CheckFor = {
    'text': ['value', 'placeholder'],
    'checkbox': ['value', 'name', 'checked'],
    'radio': ['value', 'name', 'checked'],
  };

  if (
    CheckFor[props.type] &&
    CheckFor[props.type].indexOf(propName) !== -1 &&
    props[propName] === undefined
  ) {
    return new Error(`Missed \`${propName}\` prop on input type ${props.type}`);
  }

  return null;
}

function restrictVal(value, props) {
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
}

function validateValue(value, props) {
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

export {
  propsRequiredForType,
  getValidatedOutput,
};
