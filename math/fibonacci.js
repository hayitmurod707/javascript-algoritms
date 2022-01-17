/**
 * @param {number} position
 * @return {number}
 */
const fibonacci = position => {
	if (position === 1) {
		return 1;
	}
	let iterationsCounter = position - 1;
	let fib = null;
	let fibPrev = 1;
	let fibPrevPrev = 0;
	while (iterationsCounter) {
		fib = fibPrev + fibPrevPrev;
		fibPrevPrev = fibPrev;
		fibPrev = fib;
		iterationsCounter -= 1;
	}
	return fib;
};
fibonacci(6); // [0, 1, 1, 2, 3, 5]

// const fibonacci = n =>
//   Array.from({ length: n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );
