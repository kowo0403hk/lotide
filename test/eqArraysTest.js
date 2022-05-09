const test = require('../eqArrays')


// Test Case
test.assertEqual(test.eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
test.assertEqual(test.eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

test.assertEqual(test.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
test.assertEqual(test.eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

test.assertEqual(test.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS