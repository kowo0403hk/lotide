// Our map function will take in two arguments: 1. An array to map 2. a callback function
// The map function will return a new array based on the results of the callback function

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u26d4 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // eliminate edge cases: arrays are not having same length, and either of the input is not array
  if (arr1.length !== arr2.length || !(Array.isArray(arr1)) || !(Array.isArray(arr2))) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};



// test case
const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5, 6];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => `${word} is fun`);

const results3 = map(nums, num => num * 2);

console.log(results1);
console.log(results2);
console.log(results3);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 'q']);
assertArraysEqual(results2, ['ground is fun', 'control is fun', 'to is fun', 'major is fun', 'tom is fun']);
assertArraysEqual(results2, ['ground is fun', 'control is fun', 'to is fun', 'major is fun', 'tom is funny']);
assertArraysEqual(results3, [2, 4, 6, 8, 10, 12]);
assertArraysEqual(results3, [1, 3, 5, 7, 9, 11]);