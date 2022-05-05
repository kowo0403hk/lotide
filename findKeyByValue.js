// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that value is found, then it should return undefined.

// What input is required? an object, and a value
// Limitations?  (number, string, boolean ==> direct compare) (array or object ==> for in loop?)

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = (obj, value) => {
  for (let key in obj) {
    // if value of the key is an object, there will be an inner loop to search
    if (obj[key] instanceof Object) {
      for (let innerKey in obj[key]) {
        if (obj[key][innerKey] === value) {
          return key;
        }
      }
    } else if (obj[key] instanceof Array) { // if value of key is an Array, we use .includes method
      if (obj[key].includes(value)) {
        return key;
      }
    } else { //other cases, we use direct comparison
      if (obj[key] === value) {
        return key;
      }
    }
  }
  return undefined;
};

// test case
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: {
    asia: "Ring",
    western: "Vampires"
  },
  documentary: ["Donkeyote", "Earth"],
  number: 10
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Ring"), "horror");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Earth"), "documentary");
assertEqual(findKeyByValue(bestTVShowsByGenre, 10), "number");
