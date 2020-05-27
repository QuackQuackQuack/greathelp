
'use strict';

/**
 * matchKey
 * @example searchKeyGetValue({ a: { c: 1, d: 2}, b: 2, }, 'a.c') => // 1,
 * @description filter값을 매치하여 object key value 반환
 * @param {Object} obj obj.
 * @param {string} filter filter.
 * @returns {Object} new Obejct.
 */
module.exports = function searchKeyGetValue(obj, filter) {
  if (obj) {
    const filterArr = filter.split('.');
    const hasOwn = Object.prototype.hasOwnProperty;

    let result = {};
    let target = obj;

    if (Object.keys(obj).length) {
      for (const value of filterArr) {
        if (target) {
          if (hasOwn.call(target, value)) {
            result = target[value];
          } else {
            return;
          }
          target = result;
        }
      }
    }
    return result;

  } else {
    return null;
  }
};