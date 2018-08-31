const getUrlParameter = (url, name) => {
  const replacedName = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp(`[\\?&]${replacedName}=([^&#]*)`);
  const results = regex.exec(url);
  return results === null
    ? undefined
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

const setUrlParameter = (url, name, value) => {
  const regex = new RegExp(`([?&])${name}=.*?(&|$)`, "i");
  const separator = url.indexOf("?") !== -1 ? "&" : "?";
  if (url.match(regex)) {
    const replaceWith = (value && `$1${name}=${value}$2`) || separator;
    return url.replace(regex, replaceWith);
  }

  const returnUrl = setUrlParameter(
    `${url}${separator}${name}=${value}`,
    name,
    value,
  );

  return returnUrl;
};

export { getUrlParameter, setUrlParameter };
