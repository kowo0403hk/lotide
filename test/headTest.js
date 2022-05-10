const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5');
  });
  it('shoud return head string in an array', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('throws error if input parameter is not an array', () => {
    let str = 'abc';
    assert.throws(() => head(str), Error);
  });
});
