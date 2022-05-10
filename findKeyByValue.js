// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that value is found, then it should return undefined.

// What input is required? an object, and a value
// Limitations?  (number, string, boolean ==> direct compare) (array or object ==> for in loop?)

const findKeyByValue = (obj, value) => {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      if(obj[key].includes(value)) {
        return key;
      }
    }
    
    if (obj[key] instanceof Object) {
      for (let innerKey in obj[key]) {
        if (obj[key][innerKey] === value) {
          return key;
        }
      }
    }

    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

