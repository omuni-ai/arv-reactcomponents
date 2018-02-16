/* eslint-disable */
const storage = "localStorage" in window;
const ls = window.localStorage;

const getItem = function(key) {
  try {
    let env;
    /*if we dont have key in constant or jenkins we will not store in Cache
    *if time is set as -1 means we can store till infinite time
    * */
    // if (!key || !env.expirationTimeForCachingApi.hasOwnProperty(key)) return;
    //defined in minutes
    if (!storage) {
      throw new Error(" storage is not supported ");
    }
    let expiryTimeDefined =
      env &&
      env.expirationTimeForCachingApi &&
      env.expirationTimeForCachingApi[key]
        ? +env.expirationTimeForCachingApi[key]
        : +60;
    let objectWithTime = ls[key];
    if (!objectWithTime) return;
    objectWithTime = JSON.parse(ls[key]);
    if (expiryTimeDefined === -1) return objectWithTime.content;
    let now = new Date();
    let expiration = new Date(objectWithTime.timestamp);
    expiration.setMinutes(expiration.getMinutes() + expiryTimeDefined);
    // ditch the content if too old === getTime -- miliseconds
    if (now.getTime() > expiration.getTime()) {
      ls.removeItem(key);
      return null;
    }
    return objectWithTime.content || null;
  } catch (e) {
    console.debug("some error happen in fetching from client cache");
    return null;
  }
};

const setItem = function(key, value) {
  try {
    if (!storage) {
      throw new Error(
        "not able to set in cache **********************************",
      );
    }
    if (!key || !value) return;
    const objectWithTime = { content: value, timestamp: new Date() };
    ls[key] = JSON.stringify(objectWithTime);
  } catch (exception) {
    console.info(
      "not able to set in cache **********************************",
      exception,
    );
    return null;
  }
};
const removeItem = function(key) {
  try {
    if (!ls[key]) return;
    delete ls[key];
  } catch (exception) {
    console.info("not able to remove data from cache");
    return null;
  }
};

const localStorage = {
  getItem,
  setItem,
  removeItem,
};

export default localStorage;

// var emptyAllData = function(ObjectPassed) {
//   var key;
//   if (ObjectPassed) {
//     /*if we dont have key in constant or jenkins we will not store in Cache
//     *  if (!key || !env.expirationTimeForCachingApi.key) return;*/
//     for (key in ObjectPassed) {
//       self.removeItem(ObjectPassed[key]);
//     }
//     return;
//   }
//   for (key in localStorage) {
//     self.removeItem(key);
//   }
// };
