// Impelement a function called letterPositions which will return all the indices in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up. It means that array should be used for each key value


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

// helper function to check if char is a letter
const isLetter = (char) => {
  return (/[a-zA-Z]/).test(char);
};

const letterPositions = (sentence) => {
  const results = {};

  for (let index in sentence) {
    let letter = sentence[index];
    if (isLetter(letter)) {
      if (!(results[letter])) {
        results[letter] = [Number(index)];
      } else {
        results[letter].push(Number(index));
      }
    }
  }
  return results;
};

// test case
// let test = "Hello, my name is Alex";
let test2 = "lighthouse in the house";

// console.log(letterPositions(test));
// console.log(letterPositions(test2).i);
// console.log(letterPositions(test2)["i"]);
console.log(letterPositions(test2));
assertArraysEqual(letterPositions(test2).l, [0]);