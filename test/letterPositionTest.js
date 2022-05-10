const assert = require('chai').assert;
const letterPosition = require('../letterPositions');

describe('#letterPosition', () => {
  it('should return each of the index position of appearance of each letter in a string as an object', () => {
    assert.deepEqual(letterPosition("lighthouse in the house"), {
      l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ]
    })
  });
  it('should be able to access a particular letter and it\'s index locations', () => {
    assert.deepEqual(letterPosition('lighthouse in the house').h, [3, 5, 15, 18]);
  });
});