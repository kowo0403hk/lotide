const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns a new array with the first element removed', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
  it('returns an empty array if number of elements is equal or less than 1', () => {
    assert.deepEqual(tail([1]), []);
  });
  it('throws Error if input parameter is not an array', () => {
    assert.throw(() => tail(123), Error);
  });
});