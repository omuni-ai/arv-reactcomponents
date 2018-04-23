/* eslint-disable */
import { localStorage } from "../constants";

const getItem = function(key) {
  if (localStorage) {
    if (!localStorage[key]) {
      return null;
    }
    const objectWithTime = JSON.parse(localStorage[key]);
    return objectWithTime.content;
  }
};

const setItem = function(key, value) {
  if (localStorage) {
    const objectWithTime = { content: value, timestamp: new Date() };
    localStorage[key] = JSON.stringify(objectWithTime);
  }
};
const removeItem = function(key) {
  if (localStorage) {
    if (!localStorage[key]) return;
    delete localStorage[key];
  }
};

const obj = {
  getItem,
  setItem,
  removeItem,
};

export default obj;

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
