'use strict';

/**
 * Array into chunks of n-size.
 * @example
 * const example = [1, 2, 3, 4, 5]
 * chunkArray(example, 2) result = [[1,2],[3,4],[5]]
 * @param {Array} arr Array
 * @param {number} n chunk Size
 * @return {Array} new Array
 */
module.exports = function chunkArray(arr, n) => {

  if (!arr || !n) { return arr; }

  const length = arr.length;
  const newArray = [];
  let sliceCount = 0;

  while (sliceCount < length) {
    newArray.push(arr.slice(sliceCount, sliceCount + n));
    sliceCount += n;
  }
  return newArray;
};