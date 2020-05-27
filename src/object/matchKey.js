'use strict';

/**
 * matchKey
 * @example matchKey({ a: 1, b: 2}, 'a') => // { a: 1},
 * @description filter값을 매치하여 object 반환
 * @param {Object} obj obj.
 * @param {Array|string} filter filter.
 * @returns {Object} new Obejct.
 */
module.exports = function matchKey(obj, filter) {
  const hasOwn = Object.prototype.hasOwnProperty;
  const objLength = Object.keys(obj).length;
  const newObj = {};

  if (typeof filter === 'string') {
    for (let i = 0; i < objLength; i++) {
      if (Object.keys(obj)[i] === filter) {
        newObj[filter] = obj[filter];
        break;
      }
    }
  } else {
    for (const value of filter) {
      if (hasOwn.call(obj, value)) {
        newObj[value] = obj[value];
      }
    }
  }
  return newObj;
};
  
