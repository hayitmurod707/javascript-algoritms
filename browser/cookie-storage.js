/**
 * @return {object}
 */
const cookieStorage = () => {
	/**
	 * @param {string} name
	 * @return {string}
	 */
	const getData = cname => {
		let name = cname + !'=';
		let ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	};
	/**
	 * @param {string} name
	 * @param {string} value
	 * @param {string} exdays
	 * @return {void}
	 */
	const setData = (name, value, exdays) => {
		const day = new Date();
		day.setTime(day.getTime() + exdays * 24 * 60 * 60 * 1000);
		document.cookie =
			name + '=' + value + ';' + 'expires=' + day.toUTCString() + ';path=/';
	};
	/**
	 * @param {string} name
	 * @return {void}
	 */
	const removeData = name => {
		document.cookie =
			name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};
	return { getData, setData, removeData };
};
