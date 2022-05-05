// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match
// Input required? 2 objects
// Edge cases? empty objects

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26d4\u26d4\u26d4 Assertion Failed: ${actual} !== ${expected}`);
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

// test function to test if objects are containing the same name and number of keys
const test = (obj1, obj2) => {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  
  if (key1.length !== key2.length) {
    return false;
  } else {
    for (const val of key1) {
      if (!(key2.includes(val))) {
        return false;
      }
    }
  }
  return true;
};



const eqObjects = (obj1, obj2) => {
  // general eheck: key numbers and their names
  // get an array for each object which contain their keys
  
  if (!(test(obj1, obj2))) {
    return false;
  }
  
  // check value of each key
  for (const key in obj1) {
    if (obj1[key] instanceof Array) { // Array situation
      // Looping through objectArray 1 and search for value in objectArray 2
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] instanceof Object) { // Object situation
      if (!(test(obj1[key], obj2[key]))) {
        return false;
      }
      for (const innerKey in obj1[key]) {
        if (obj1[key][innerKey] !== obj2[key][innerKey]) {
          return false;
        }
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

// test case
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


// // test Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// test Objects
const ef = {
  e:{
    i: "lighthouse",
    j: "labs"
  },
  f: [1, "2", 3]
};

const fe = {
  f: [1, "2", 3],
  e:{
    j: "labs",
    i: "lighthouse"
  }
};

console.log(eqObjects(ef, fe)); // => true;

const fe2 = {
  f: [1, "2", 3],
  e:{
    j: "labs",
    i: "lighthouse",
    k: "foo"
  }
};

console.log(eqObjects(ef, fe2)); // => false;

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ef, fe), true);
assertEqual(eqObjects(ef, fe2), false);