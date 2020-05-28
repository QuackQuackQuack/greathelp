# greathelp

> javascirpt util

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
* `String`
  * [`lPad`](#lPad)
* `Url`
  * [`getParameter`](#getParameter)
* `Validation`
    * [`isUrl`](#isUrl)
    * [`isSpace`](#isSpace)

## Array
### chunkArray
```js
const { chunkArray } = require('greathelp');
console.log(chunkArray([1, 2, 3], 2));
// [[1,2],[3]]
```

## Object
### matchKey
```js
const { matchKey } = require('greathelp');
console.log(matchKey({a: 1, b: 2}, 'a'));
console.log(matchKey({a: 1, b: 2, c: 3}, ['a', 'c']));
// {a: 1}
// {a: 1, c: 3}
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
console.log(searchKeyGetValue(obj,'a'));
console.log(searchKeyGetValue(obj,'d.apple'));
console.log(searchKeyGetValue(obj,'f.1.c'));
console.log(searchKeyGetValue(obj,'e'));
console.log(searchKeyGetValue(null,'a'));
console.log(searchKeyGetValue({},'a'));
// 1
// 'apple'
// 'c',
// undefined
// null
// {}
```

## String
### lPad

```js
const { lPad } = require('greathelp');
console.log(lPad(10, 4, 0));
// 0010
```

## Url
### getParameter

```js
const { getParameter } = require('greathelp');
const url = 'https://www.test.test/?test=1&test2=2';
const url2 = 'https://www.test.test/';
console.log('url', getParameter(url));
console.log('url2', getParameter(url2));
// url {test: "1", test2: "2"}
// url2 {}
```

## Validation
### isUrl
with hangul domain

```js
const { isUrl } = require('greathelp');
const url = 'https://ttt';
const url2 = 'abc';
const url3 = 'https://한글도메인.com/';
const url4 = 'https://www.test.com?prdNo=123&dispNo=312&NaPm=ct%3Djoh05t74%7Cci%3D71cf11951';
const url5 = 'https://192.0.1.1';
console.log('url', isUrl(url));
console.log('url2', isUrl(url2));
console.log('url3', isUrl(url3));
console.log('url4', isUrl(url4));
console.log('url5', isUrl(url5));
// url false
// url2 false
// url3 true
// url4 true
// url5 true
```

### isSpace
```js
const { isSpace } = require('greathelp');
const string1 = 'test';
const string2 = 'te st';
const string3 = 'test ';

console.log('string1', isSpace(string1));
console.log('string2', isSpace(string2));
console.log('string3', isSpace(string3));

// string1, false,
// string2, true,
// string3, true,
```


## Author

**QuackQuackQuack**

+ [github/QuackQuackQuack](https://github.com/QuackQuackQuack)

## License
Copyright (c) 2018 QuackQuackQuack
Released under the MIT license

***

