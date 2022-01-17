/**
 * @param {string} value
 * @return {boolean}
 */
const checkLatin = value =>
	typeof value === 'string'
		? new RegExp(
				/^[^аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]*$/,
		  ).test(value)
		: false;
checkLatin('ABC'); // true
checkLatin('АБВ'); // false
