const test = require('../head')

// TEST CODE
test.assertEqual(test.head([5,6,7]), 5);
test.assertEqual(test.head(["Hello", "Lighthouse", "Labs"]), "Hello");
test.assertEqual(test.head(["Alex", "Lighthouse", "Labs"]), "Hello");
test.assertEqual(test.head([]), 5);
test.assertEqual(test.head([1]), 5);
test.assertEqual(test.head([5]), 5);