/**
 * @param {array} array
 * @return {array}
 */
const shuffleArray = array => {
	let maxSize = array.length;
	const newArray = [];
	let prevArray = [...array];
	for (let x = 0; x < array.length; x++) {
		maxSize = maxSize - 1;
		const currentIndex = Math.round(Math.random() * maxSize);
		newArray.push(prevArray[currentIndex]);
		prevArray = prevArray?.filter((item, index) => currentIndex !== index);
	}
	return newArray;
};
