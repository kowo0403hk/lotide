const flatten = (arr) => {
  let flat = [];

  function helper (arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        flat.push(item);
      }
    }
  }
  helper(arr);
  return flat;
};

module.exports = flatten;