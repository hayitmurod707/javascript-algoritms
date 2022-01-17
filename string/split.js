/**
 * @param {string || number} value
 * @param {number} from
 * @param {string} value
 * @return {string}
 */
const split = (value, from, fill) => {
	if (typeof value === 'number' || typeof value === 'string') {
		const text = value.toString();
		const count = typeof from === 'number' ? from : 3;
		const replaceText = typeof fill === 'string' ? fill : ' ';
		const array = [];
		for (let x = 0; x < text.length; x += count) {
			array.push(text.slice(x, x + count));
		}
		return array.join().replace(/,/g, replaceText);
	} else {
		return '';
	}
};
split('javascript'); // jav asc rip t
split(1234567890, 4, '-'); // 1234-5678-90
split('Hello world', 2, '__'); // He__ll__o __wo__rl__d
