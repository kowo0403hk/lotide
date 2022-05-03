const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const original = ["Hello", "My", "Name", "Is", "Alex"];
const newResult = tail(original);
console.log(original);
console.log(newResult);
assertEqual(newResult.length, 3);
assertEqual(newResult[0], "My");
assertEqual(newResult[3], "Alex");