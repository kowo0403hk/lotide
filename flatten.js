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

let nested = [1, 2, [3, 4], 5, [6]];
let test = [1, 2, 3, 4, 5, 6];

console.log(flatten(nested));
console.log([1, 2, 3, 4, 5, 6]);