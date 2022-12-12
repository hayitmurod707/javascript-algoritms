/**
 * @param {value} value
 * @return {boolean}
 */
const isPassportNumber = value => {
	if (typeof value === "string") {
		const seriesNumber = value.toUpperCase();
		const series = seriesNumber.slice(0, 2);
		const number = seriesNumber.slice(2, 9);
		const seriesTest = new RegExp(/^[A-Z]{0,2}$/).test(series);
		const numberTest = new RegExp(/^[0-9]{0,7}$/).test(number);
		return seriesTest && numberTest && seriesNumber.length < 10
			? true
			: false;
	} else {
		return false;
	}
};
export default isPassportNumber;
// isPassportNumber('AA1234'); // true
// isPassportNumber('AA1234567890'); // false
// isPassportNumber('12323'); // false
