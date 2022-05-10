// if order of the object does matter, we can imply use JSON.stringify(obj1) === JSON.stringify(obj2) to evalute them.
// comeback on another for recursion version (deep equal)


const eqObjects = (obj1, obj2) => {
  const eqArrays = function(arr1, arr2) {
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

module.exports = eqObjects;