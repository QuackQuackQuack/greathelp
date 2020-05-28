'use strict';

/**
 * @param {*} item item
 * @return {number} return number
 */
function convertNumer(item) {
  if (!item) {
    return 0;
  } else {
    return (!item || isNaN(item)) ? 0 : parseFloat(item);
  }
}

/**
 * @example A
 * @return {number} reutrn added number.
 */
module.exports = function sumAll(...arg) {

  if (arg.length === 0) {
    return 0;
  }
  const reducer = (accumulator, currentValue) => accumulator + convertNumer(currentValue);

  return arg.reduce(reducer, 0);
};