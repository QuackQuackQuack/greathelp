
'use strict';

/**
 * getFinalDataKey
 * @example getFinalDataKey([1, 2, 3]], 'a') => // { a: [1, 2, 3]},
 * @param {Array|Object} data data
 * @param {string} filter filter
 * @returns {Object} final key with data
 */
module.exports = function getFinalDataKey(data, filter) {
  const obj = {};
  let dataKeys = filter.split('.');
  let last = obj;

  if (filter) {
    while (dataKeys.length) {
      let part = dataKeys.shift();
      if (dataKeys.length > 0) {
        last[part] = last[part] || {};
        last = last[part];
      } else {
        last[part] = data;
      }
    }

    return obj;
  } else {
    return data;
  }
}
