'use strict';

const { findType } = require('../validation');

/**
 * searchKeyDelete
 * @example searchKeyDelete({ a: 1, b: { c: 3 }}, 'b.c') => { a: 1, b: {} }
 * @description filter값을 매치하여 object key 를 삭제
 * @param {Object} obj obj.
 * @param {string} [filter= ''] filter.
 */
module.exports = function searchKeyDelete(obj, filter = '') {
  const isObject = findType(obj) === 'Object';
  const isString = findType(filter) === 'String';
  const filterArr = isString ? filter.split('.') : [];
  const filterArrLength = filterArr.length;
  const hasOwn = Object.prototype.hasOwnProperty;
  const cloneObj = JSON.parse(JSON.stringify(obj)); 
  let targetObj = cloneObj;  

  // type Check
  if (!isObject || isObject && !Object.keys(obj).length) {
    return {};
  }

  // has filter check
  if (!filterArrLength) {
    return obj;
  }  

  // 2depth more
  if (filterArrLength > 1) {
    
    for (let i = 0; i < filterArrLength; i++) {
      
      const hasOwn = Object.prototype.hasOwnProperty;
      const hasTarget = hasOwn.call(targetObj, filterArr[i]);
      
      if (hasTarget) {    
        targetObj = targetObj[filterArr[i]];        
        if (i === filterArrLength - 2) {      
          delete targetObj[filterArr[filterArrLength - 1]];
        }
      }
    }
  // only 1depth
  } else {    
    delete targetObj[filter];
  }
  return cloneObj;
};