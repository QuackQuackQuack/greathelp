const { findType, isUrl, isSpace } = require('../src/validation'); 

describe("Validation|findType", () => {
  // 타입을 스트링으로 반환.
  test('find out the type of variable', () => {

    const num = 123;
    const str = 'test';
    const boolean = true;
    const arr = [];
    const obj = {};
    const func = () => {};
    const symbol = Symbol.for('key');
    const date = new Date();
    const nul = null;

    expect(findType(num)).toEqual('Number');
    expect(findType(str)).toEqual('String');
    expect(findType(boolean)).toEqual('Boolean');
    expect(findType(arr)).toEqual('Array');
    expect(findType(obj)).toEqual('Object');
    expect(findType(func)).toEqual('Function');
    expect(findType(symbol)).toEqual('Symbol');
    expect(findType(date)).toEqual('Date');
    expect(findType(nul)).toEqual('Null');
    expect(findType()).toEqual('Undefined');
  });
});

describe("Validation|isUrl", () => {
  // url형식인지, 아닌지 여부를 반환한다.
  test('Returns whether or not in url format.', () => {
    const url = 'https://ttt';
    const url2 = 'abc';
    const url3 = 'https://한글도메인.com/';
    const url4 = 'https://www.test.com?prdNo=123&dispNo=312&NaPm=ct%3Djoh05t74%7Cci%3D71cf11951';
    const url5 = 'https://192.0.1.1';

    expect(isUrl(url)).toEqual(false); 
    expect(isUrl(url2)).toEqual(false); 
    expect(isUrl(url3)).toEqual(true); 
    expect(isUrl(url4)).toEqual(true); 
    expect(isUrl(url5)).toEqual(true); 
  });
});

describe("Validation|isSpace", () => {
  // 문자 사이에 공백이 있는 지 여부 반환 
  test('Whether there is a space between characters', () => {
    expect(isSpace('test ')).toEqual(true); 
    expect(isSpace(' test')).toEqual(true); 
    expect(isSpace('te st')).toEqual(true); 
    expect(isSpace('   ')).toEqual(true); 
    expect(isSpace('test')).toEqual(false); 
    expect(isSpace('')).toEqual(false); 
  });
});