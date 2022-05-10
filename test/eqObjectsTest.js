const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should compare primitive values', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isTrue(eqObjects(ab, ba));
    assert.isFalse(eqObjects(ab, abc));
  });
  it('should compare Arrays inside an Object', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isTrue(eqObjects(cd, dc));
    assert.isFalse(eqObjects(cd, cd2));
  });
  it('should compare Objects inside an Object', () => {
    const ef = {
      e:{
        i: "lighthouse",
        j: "labs"
      },
      f: [1, "2", 3]
    };
    
    const fe = {
      f: [1, "2", 3],
      e:{
        j: "labs",
        i: "lighthouse"
      }
    };
    
    const fe2 = {
      f: [1, "2", 3],
      e:{
        j: "labs",
        i: "lighthouse",
        k: "foo"
      }
    };
    assert.isTrue(eqObjects(ef, fe));
    assert.isFalse(eqObjects(ef, fe2));

  });
  it('should throw error if one of the parameters is undefined', () => {
    assert.throw(() => eqObjects({a: 1}), Error);
  });
});