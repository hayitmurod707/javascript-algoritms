/**
 * @param {string || number} value
 * @param {number} from
 * @param {string} value
 * @return {string}
 */
const split = (value, from, fill) => {
	if (typeof value === "number" || typeof value === "string") {
		const text = [...value.toString()].reverse().join("");
		const count = typeof from === "number" ? from : 3;
		const replaceText = typeof fill === "string" ? fill : " ";
		const array = [];
		for (let x = 0; x < text.length; x += count) {
			array.push([...text.slice(x, x + count)].reverse().join(""));
		}
		return array.reverse().join().replace(/,/g, replaceText);
	} else {
		return "";
	}
};
export default split;
// split("javascript"); // j ava scr ipt
// split(1234567890, 4, "-"); // 12-3456-7890
// split("Hello world", 2, "--"); // H--el--lo-- w--or--ld
// 1000000?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
