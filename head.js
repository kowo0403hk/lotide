const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (!arr instanceof Array || arr === undefined) {
    throw new Error('Parameter has to be an Array');
  }
  return arr[0];
};

module.exports = {
  head: head,
  assertEqual: assertEqual
};

assertEqual(head([1, 2, 3]), 1);