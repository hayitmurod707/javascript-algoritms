/**
 * @param {string} value
 * @return {boolean}
 */
const isLatin = value =>
	typeof value === "string"
		? new RegExp(
				/^[^аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]*$/
		  ).test(value)
		: false;
export default isLatin;
// checkLatin('ABC'); // true
// checkLatin('АБВ'); // false
