const storage = "localStorage" in window;

function getItem(key) {
  if (storage) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  return null;
}

function setItem(key, value) {
  if (storage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

const localStorage = {
  getItem,
  setItem,
};

export default localStorage;
