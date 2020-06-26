const { matchKey, searchKeyGetValue, searchKeyDelete, getFinalDataKey } = require('../src/object'); 

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
    };
    expect(searchKeyGetValue(obj,'a')).toEqual(1);
    expect(searchKeyGetValue(obj,'d.apple')).toEqual('apple');
    expect(searchKeyGetValue(obj,'f.1.c')).toEqual('c');
    expect(searchKeyGetValue(obj,'e')).toEqual(undefined);
    expect(searchKeyGetValue(null,'a')).toEqual(null);
    expect(searchKeyGetValue({},'a')).toEqual({});
  });
});


describe("Object|searchKeyDelete", () => {
  // Object에서 String 매칭되는 값을 찾아 삭제 한다. (a.b.c 형태) 
  test('Locate and delete the corresponding key.', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' },
      d: { a: { a: 'a' }, b: 'b' },
    }

    const result1 = {
      b: 'b',
      c: { a: 'a', b: 'b' },
      d: { a: { a: 'a' }, b: 'b' },
    }

    const result2 = {
      a: 'a',
      b: 'b',
      c: { b: 'b' },
      d: { a: { a: 'a' }, b: 'b' },
    }

    const result3 = {
      a: 'a',
      b: 'b',
      c: { a: 'a', b: 'b' },
      d: { a: {}, b: 'b' },
    }

    expect(searchKeyDelete(obj,'a')).toEqual(result1);
    expect(searchKeyDelete(obj,'c.a')).toEqual(result2);
    expect(searchKeyDelete(obj,'d.a.a')).toEqual(result3);
    expect(searchKeyDelete(obj)).toEqual(obj);
    expect(searchKeyDelete({})).toEqual({});
    expect(searchKeyDelete(123, 12)).toEqual({});
    expect(obj).toEqual(obj);
  });
});

describe("Object|getFinalDataKey", () => {
  // filter값에 따라 데이터를 오브젝트로 감싼다. 
  test('Wrap data around objects according to filter values', () => {
    const obj = { test:1 };
    const arr = [{ a: 1, b: 2}];
    const arr2 = [];

    //data object
    expect(getFinalDataKey(obj,'a')).toEqual({ a: { test: 1}});
    // data arr
    expect(getFinalDataKey(arr,'arr.obj.test')).toEqual({ arr: { obj: { test: [ { a: 1, b: 2 }]}} });
    // filter none    
    expect(getFinalDataKey(arr, '')).toEqual([{ a:1, b: 2 }]);
    // data none    
    expect(getFinalDataKey([], 'test.arr2')).toEqual({ test: { arr2: [] } });
    expect(getFinalDataKey({}, 'test.arr2')).toEqual({ test: { arr2: {} } });
    expect(getFinalDataKey(null, 'test.arr2')).toEqual({ test: { arr2: null } });
  });
});

