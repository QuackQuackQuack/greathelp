const { matchKey, searchKeyGetValue } = require('../src/object'); 

describe("Object|matchKey", () => {
  // Object에서 매칭되는 값만 오브젝트로 반환한다. 1depth only
  test('Return the key value in the object according to the filter value.', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: {
        test: 'test',
      }
    }
    // filter 1 key 
    expect(matchKey(obj,'a')).toEqual({ a: 1});
    // filter array type 
    expect(matchKey(obj,['a', 'c'])).toEqual({ a: 1, c: 3});
    expect(matchKey(obj,['a', 'b', 'd'])).toEqual({ a: 1, b: 2, d: { test: 'test'} });
  });
});


describe("Object|searchKeyGetValue", () => {
  // Object에서 String 매칭되는 값만 반환 한다 (a.b.c 형태) 
  test('Returns only the values matched on the object.', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: {
        test: 'test',
        apple: 'apple',
        dog: 'dog',
      },
      f: [
        {
          a: 'a',
          b: 'b',
        },
        {
          c: 'c',
          d: 'd',
        }
     ]
    }
    expect(searchKeyGetValue(obj,'a')).toEqual(1);
    expect(searchKeyGetValue(obj,'d.apple')).toEqual('apple');
    expect(searchKeyGetValue(obj,'f.1.c')).toEqual('c');
    expect(searchKeyGetValue(obj,'e')).toEqual(undefined);
    expect(searchKeyGetValue(null,'a')).toEqual(null);
    expect(searchKeyGetValue({},'a')).toEqual({});
  });
});