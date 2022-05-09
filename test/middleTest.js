const middle = require('../middle');
const equal = require('../assertArraysEqual');

equal.assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
equal.assertArraysEqual(middle(['Lighthouse', 'Labs', 'Bootcamp']), ['Labs']);
equal.assertArraysEqual(middle(['Lighthouse', 'Labs', 'Bootcamp']), ['Bootcamp']);