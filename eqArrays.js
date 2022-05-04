// Write a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// What inputs are required? 2 functions(assertEqual and eqArrays) + 2 arrays (within the eqArrays function)
// What has to be checked inside of the ? 1. Length of arrays 2. Value of arrays 3. ===
// After evaluating, return true or false for eqArrays
// Input the returned result into the assertEqual function to evaluate again

//Hand written "console.assert" function
const assertEqual = function(arrCompare, boolean) {
  if (arrCompare === boolean) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${arrCompare} === ${boolean}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${arrCompare} !== ${boolean}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



// Test Case
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS