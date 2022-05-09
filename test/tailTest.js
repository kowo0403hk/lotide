const test = require('../tail');

// Test Case 1: Check the returned array elements
const result = test.tail(["Hello", "Lighthouse", "Labs"]);
test.assertEqual(result.length, 2); // ensure we get back two elements
test.assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
test.assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const original = ["Hello", "My", "Name", "Is", "Alex"];
const newResult = test.tail(original);
test.assertEqual(newResult.length, 3);
test.assertEqual(newResult[0], "My");
test.assertEqual(newResult[3], "Alex");