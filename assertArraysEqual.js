// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console

// Calling the eqArrays function inside the assertArrayfunction

// function that evaluate each of the element of two arrays

const test = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (test.eqArrays(arr1, arr2)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


module.exports = {
  assertArraysEqual,
  test: test.eqArrays,
};