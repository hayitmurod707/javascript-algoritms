/**
 * @param {array} array
 * @return {array}
 */
const removeDuplicate = array =>
	Array.isArray(array) ? [...new Set(array)] : [];

removeDuplicate([12, 2, 2, 2, 12, 3, 4]); // [ 12, 2, 3, 4]
