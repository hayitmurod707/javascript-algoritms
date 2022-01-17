/**
 * @param {array} array
 * @param {boolean} ascending
 * @return {array}
 */
const sortNumbers = (array, ascending = true) =>
	Array.isArray(array) ? array.sort((a, b) => (ascending ? a - b : b - a)) : [];
sortNumbers([23, 2, 45, 1, 2, 2, 344], true); // [ 344, 45, 23, 2, 2, 2, 1 ]
sortNumbers([23, 2, 45, 1, 2, 2, 344], false); // [ 1, 2, 2, 2, 23, 45, 344 ]
