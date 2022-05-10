
const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) {
    throw new Error();
  }

  const areArrays = (arr1, arr2) => {
    if(Array.isArray(arr1) && Array.isArray(arr2)) {
      return true;
    }
    return false;
  };

  // eliminate edge cases: arrays are not having same length, and either of the input is not array
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let indx in arr1) {
    if (
      // recursive call
      // for each index, if both arr1 and arr2 has Arrays, then we call eqArrays again to verify if the inside arrays are equal, if not, return false and the validation ends
      // if inside of a recursive all, there is another nested array for arr1 an arr2, eqArrays will be called again until it is not
      areArrays(arr1[indx],arr2[indx]) && !eqArrays(arr1[indx], arr2[indx]) ||
      // if no nested arrays, direct compare the value of primitives
      !areArrays(arr1[indx], arr2[indx]) && arr1[indx] !== arr2[indx]) {
      return false;
    };
  }
  return true;
};

module.exports = eqArrays;