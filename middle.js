// implement middle function which will take in an array and return the middle-most element(s) of the given array.
// What is the input required? An array, we need to use the Math.floor method
// Limitation? Not array, array.length less than 3
// Output: for odd number arrays, return a rounded up (Math.ceil) number; for even number arrays, return the middle two number (Math.floor and Math.ceil)

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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = (arr) => {
  let length = arr.length;
  let middle = [];

  if (!Array.isArray(arr)) {
    return "Invalid entry. Please input an array with 3 or more elements.";
  } else if (arr.length < 3) {
    return middle;
  }

  if (arr.length % 2 === 0) {
    middle.push(arr[(length / 2) - 1]);
    middle.push((arr[(length / 2)]));
    return middle;
  } else {
    middle.push(arr[Math.floor(length / 2)]);
    return middle;
  }
};

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2]));
console.log(middle(1234));
console.log(middle(['Lighthouse', 'Labs', 'Bootcamp']));
console.log(middle(['Lighthouse', 'Labs', 'Bootcamp', 'yay']));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle(['Lighthouse', 'Labs', 'Bootcamp']), ['Labs']);
assertArraysEqual(middle(['Lighthouse', 'Labs', 'Bootcamp']), ['Bootcamp']);