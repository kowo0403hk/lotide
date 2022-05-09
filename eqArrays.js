// Write a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// What inputs are required? 2 functions(assertEqual and eqArrays) + 2 arrays (within the eqArrays function)
// What has to be checked inside of the ? 1. Length of arrays 2. Value of arrays 3. ===
// After evaluating, return true or false for eqArrays
// Input the returned result into the assertEqual function to evaluate again

//Hand written "console.assert" function
const assertEqual = require('./assertEqual')

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

module.exports = {
  eqArrays,
  assertEqual
}
