const assert = require('chai').assert;
const eqArrays = require('../eqArrays')

describe('#eqArrays', () => {
  it('checks if each index has the same element', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it('should be able to check nested arrays', () => {
    assert.isTrue(eqArrays([1, 2, [3, 4, [5]], 6], [1, 2, [3, 4, [5]], 6]), true);
    assert.isFalse(eqArrays([1, 2, [3, 4, [5]], 6], [1, 2, [3, 4, 5], 6]), false);
  });
  it('should throw Error if either of the parameter is undefined', () => {
    assert.throw(() => eqArrays([1]));
  });
});