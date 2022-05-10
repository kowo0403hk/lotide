const middle = (arr) => {
  let length = arr.length;
  let middle = [];

  if (!Array.isArray(arr)) {
    throw new Error("Invalid entry. Please input an array with 3 or more elements.");
  }
  
  if (arr.length < 3) {
    return middle;
  }

  if (arr.length % 2 === 0) {
    middle.push(arr[(length / 2) - 1]);
    middle.push((arr[(length / 2)]));
    return middle;
  } else {
    middle.push(arr[Math.floor(length / 2)]);
    return middle;
  }
};

module.exports = middle;