'use strict';

/**
 * findType
 * @example findType({}) => Object,
 * @param {*} any any
 * @returns {string} type string
 */
module.exports = function findType(any) {
  return Object.prototype.toString.call(any).slice(8,-1);
};
