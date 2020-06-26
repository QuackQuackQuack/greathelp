# greathelp

> Javascirpt Util

## Build Setup

``` bash
# install
$ npm install greathelp
```
### **Contents**
* `Array`
  * [`chunkArray`](#chunkArray)
* `Object`
  * [`matchKey`](#matchKey)
  * [`searchKeyGetValue`](#searchKeyGetValue)
  * [`getFinalDataKey`](#getFinalDataKey)
* `Math`
  * [`sumAll`](#sumAll)
* `String`
  * [`lPad`](#lPad)
* `Url`
  * [`getParameter`](#getParameter)
* `Validation`
    * [`findType`](#findType)
    * [`isUrl`](#isUrl)
    * [`isSpace`](#isSpace)

## Array
### chunkArray
```js
const { chunkArray } = require('greathelp');
console.log(chunkArray([1, 2, 3], 2)); // [[1,2],[3]]
console.log(chunkArray([1, 2, 3], 1)); // [[1],[2],[3]]
```

## Object
### matchKey
```js
const { matchKey } = require('greathelp');
console.log(matchKey({a: 1, b: 2}, 'a')); // {a: 1}
console.log(matchKey({a: 1, b: 2, c: 3}, ['a', 'c'])); // {a: 1, c: 3}
```
### searchKeyGetValue
```js
const { searchKeyGetValue } = require('greathelp');
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: { test: 'test', apple: 'apple', dog: 'dog', },
  f: [
    {
      a: 'a', b: 'b',
    },
    {
      c: 'c', d: 'd',
    }
  ]
}
console.log(searchKeyGetValue(obj,'a')); // 1
console.log(searchKeyGetValue(obj,'d.apple')); // 'apple'
console.log(searchKeyGetValue(obj,'f.1.c')); // 'c'
console.log(searchKeyGetValue(obj,'e')); // undefined
console.log(searchKeyGetValue(null,'a')); // null
console.log(searchKeyGetValue({},'a')); // {}
```

### searchKeyDelete
```js
const { searchKeyDelete } = require('greathelp');
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: { test: 'test', apple: 'apple', dog: 'dog', },
}
console.log(searchKeyDelete(obj,'a')); // {  b: 2, c: 3,  d: { test: 'test', apple: 'apple', dog: 'dog' } }
console.log(searchKeyDelete(obj,'d.test')); // {  a: 1, b: 2, c: 3,  d: { apple: 'apple', dog: 'dog' } }
```
### getFinalDataKey
```js
const { getFinalDataKey } = require('greathelp');
const obj = { test:1 };
const arr = [{ a: 1, b: 2}];
const arr2 = [];

//data object
console.log(getFinalDataKey(obj,'a'));
// => { a: { test: 1}}

// data arr
console.log(getFinalDataKey(arr,'arr.obj.test'));
// => ({ arr: { obj: { test: [ { a: 1, b: 2 }]}} })

// filter none    
console.log(getFinalDataKey(arr, ''));
// => [{ a:1, b: 2 }]

// data none    
console.log(getFinalDataKey([], 'test.arr2'));
console.log(getFinalDataKey({}, 'test.arr2'));
console.log(getFinalDataKey(null, 'test.arr2'));
// => { test: { arr2: [] } }
// => { test: { arr2: {} } }
// => { test: { arr2: null } }
```

## Math
### sumAll

```js
const { sumAll } = require('greathelp');

console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(0, 12, 50, 28, 10)); // 100

// string character  => 0
console.log(sumAll(5, 'a')); // 5

// string number => convert number
console.log(sumAll(5, '5.1')); // 10.1
console.log(sumAll(15.5, '5.1')); // 20.6

// null, undefined => 0
console.log(sumAll(null, '5.1')); // 5.1
console.log(sumAll(undefined, 10, '51')); // 61    
```

## String
### lPad

```js
const { lPad } = require('greathelp');
console.log(lPad(10, 4, 0)); // 0010
```

## Url
### getParameter

```js
const { getParameter } = require('greathelp');
const url = 'https://www.test.test/?test=1&test2=2';
const url2 = 'https://www.test.test/';
console.log('url', getParameter(url)); // url {test: "1", test2: "2"}
console.log('url2', getParameter(url2)); // url2 {}
```

## Validation
### findType

```js
const { findType } = require('greathelp');
const num = 123;
const str = 'test';
const boolean = true;
const arr = [];
const obj = {};
const func = () => {};
const symbol = Symbol.for('key');
const date = new Date();
const nul = null;

console.log(findType(num)); // 'Number'
console.log(findType(str)); // 'String'
console.log(findType(boolean)); // 'Boolean'
console.log(findType(arr)); // 'Array'
console.log(findType(obj)); // 'Object'
console.log(findType(func)); // 'Function'
console.log(findType(symbol)); // 'Symbol'
console.log(findType(date)); // 'Date'
console.log(findType(nul)); // 'Null'
console.log(findType()); // 'Undefined'
```

### isUrl
with hangul domain

```js
const { isUrl } = require('greathelp');
const url = 'https://ttt';
const url2 = 'abc';
const url3 = 'https://한글도메인.com/';
const url4 = 'https://www.test.com?prdNo=123&dispNo=312&NaPm=ct%3Djoh05t74%7Cci%3D71cf11951';
const url5 = 'https://192.0.1.1';
console.log('url', isUrl(url)); // url false
console.log('url2', isUrl(url2)); // url2 false
console.log('url3', isUrl(url3)); // url3 true
console.log('url4', isUrl(url4)); // url4 true
console.log('url5', isUrl(url5)); // url5 true
```

### isSpace
```js
const { isSpace } = require('greathelp');
const string1 = 'test';
const string2 = 'te st';
const string3 = 'test ';

console.log('string1', isSpace(string1)); // string1, false
console.log('string2', isSpace(string2)); // string2, true
console.log('string3', isSpace(string3)); // string3, true
```

## Author
**QuackQuackQuack**
+ [github/QuackQuackQuack](https://github.com/QuackQuackQuack)

## License
Copyright (c) 2018 ~ 2020 QuackQuackQuack
Released under the MIT license

***

