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
    return url.replace(regex, `$1${name}=${value}$2`);
  }

  return `${url}${separator}${name}=${value}`;
};

export { getUrlParameter, setUrlParameter };
