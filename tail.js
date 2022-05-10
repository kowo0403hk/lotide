const tail = function(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("parameter has to be an array");
  }
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;