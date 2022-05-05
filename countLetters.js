// Create a function called countLetters that take in a sentence and then return a count of each of the letters in that sentence
// Input required: a string
// Edge case: space, punctuations, numbers

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// a function to test if this is a letter
const isLetter = (char) => {
  return (/[a-zA-Z]/).test(char);
};

// actual counting function
const countLetters = (string) => {
  let result = {};

  for (const char of string) {
    // eliminating the edge cases first
    if (isLetter(char)) {
      console.log(char);
      if (!(result[char])) {
        result[char] = 1;
      } else {
        result[char] += 1;
      }
    }
  }
  return result;
};

// test case
let test = "Hello, my name is Alex";

console.log(countLetters(test));