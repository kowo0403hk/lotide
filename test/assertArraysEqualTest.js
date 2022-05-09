const test = require('../assertArraysEqual');

test.assertArraysEqual([1, 2, 3], [1, 2, 3], true);
test.assertArraysEqual([1, 2, 4], [1, 2, 3], false);
