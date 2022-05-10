const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns middle 2 elements if given an array with even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
  it('returns middle element if given an array with odd number of elements', () => {
    assert.deepEqual(middle(['Lighthouse', 'Labs', 'Bootcamp']), ['Labs']);
  });
  it('returns an empty array if number of elements in an array is less than 3', () => {
    assert.deepEqual(middle([]), []);
  });
  it('throw Error if input paraemeter is not an array', () => {
    let num = 123;
    assert.throw(() => middle(num), Error)
  });
});