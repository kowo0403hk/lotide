const head = require('../head')

// TEST CODE
head.assertEqual(head.head([5,6,7]), 5);
head.assertEqual(head.head(["Hello", "Lighthouse", "Labs"]), "Hello");
head.assertEqual(head.head(["Alex", "Lighthouse", "Labs"]), "Hello");
head.assertEqual(head.head([]), 5);
head.assertEqual(head.head([1]), 5);
head.assertEqual(head.head([5]), 5);