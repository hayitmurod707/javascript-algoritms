/**
 * @param {string} value
 * @return {string}
 */
const reverseString = string =>
	typeof string === 'string' ? [...string].reverse().join('') : '';

reverseString('Hello World'); // dlroW olleH
