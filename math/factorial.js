/**
 * @param {number} position
 * @return {number}
 */
const factorial = number => {
	let result = 1;
	if (number > -1) {
		for (let i = 1; i <= number; i += 1) {
			result *= i;
		}
	}
	return result;
};
factorial(1); // 1
factorial(0); // 1
factorial(2); // 2
factorial(3); // 6
factorial(4); // 24

// const factorial = number =>
// 	number > -1
// 		? [...Array(number).keys()]
// 				.map(number => number + 1)
// 				.reduce((total, number) => (total *= number), 1)
// 		: 0;
