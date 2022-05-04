// Impelment without function which will return a subset of a given array, removing unwanted elements.
// The without function should have 2 inputs: source array and itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
// Original Array should not be modified.
// Use assertArraysEqual to write test cases
// This test can be written below the definition of your function.



const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${arr1} !== ${arr2}`);
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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let isIncluded = itemsToRemove.includes(source[i]); 
    if (!isIncluded) {
      result.push(source[i]);
    }
  }
  return result;
}

assertArraysEqual(without(['Lighthouse', 'Foo'], ['Foo']), ['Lighthouse']);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// Test case
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
