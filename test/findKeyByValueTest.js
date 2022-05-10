const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    documentary: ["Donkeyote", "Earth"],
    horror: {
      asia: "Ring",
      western: "Vampires"
    },
    number: 10
  };

  it('should return key by direct comparison', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it('should return undefined if no key is found', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('should return key if there is a nested arry', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Earth"), "documentary");
  });
  it('should return key if there is a nested object', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Ring"), "horror");
  });
});