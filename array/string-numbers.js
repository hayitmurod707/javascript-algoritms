/**
 * @param {array} array
 * @return {array}
 */
const stringNumbers = array => (Array.isArray(array) ? array.map(Number) : []);
stringNumbers(['123', '4.45', 'abc', '1000']); // [123, 4.45, NaN, 1000]
