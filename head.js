const head = function(arr) {
  if (!(arr instanceof Array) || arr === undefined) {
    throw new Error();
  }
  return arr[0];
};

module.exports = head;