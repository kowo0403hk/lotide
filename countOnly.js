// implement countOnly function which will be given an array and an object. It will return an object countaining counts of everything that the input object listed.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const result = {};
  const allKeys = Object.keys(itemsToCount);

  for (let item of allItems) {
    // make sure allKeys includes the item, and object value is true
    if (allKeys.includes(item) && itemsToCount[item]) {
      if (!(result[item])) {
        result[item] = 1;
      } else {
        result[item] += 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;
// tried to use for in loop inside the compare object against the name list, didn't work. Fang is supposed to have 2 counters but it came up only one. That is because there is only one Fang key in the object.