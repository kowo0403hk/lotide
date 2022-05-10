const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should flatten a nested array', () => {
    let nested = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(nested), [1, 2, 3, 4, 5, 6]);
  });
});