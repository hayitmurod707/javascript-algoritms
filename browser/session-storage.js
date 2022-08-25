/**
 * @return {object}
 */
const sessionStorage = () => {
	/**
	 * @param {array} keys
	 * @return {object}
	 */
	const getData = keys =>
		Array.isArray(keys)
			? keys?.reduce((item, key) => {
					item[key] = sessionStorage.getItem(key);
					return item;
			  }, {})
			: [];
	/**
	 * @param {array} keys
	 * @return {void}
	 */
	const setData = keys => {
		if (Array.isArray(keys)) {
			keys?.forEach(({ name, value }) => {
				sessionStorage.setItem(name, value);
			});
		}
	};
	/**
	 * @param {array} keys
	 * @return {void}
	 */
	const removeData = keys => {
		if (Array.isArray(keys)) {
			keys?.forEach(key => {
				window.sessionStorage.removeItem(key);
			});
		}
	};
	/**
	 * @return {void}
	 */
	const clearData = () => sessionStorage.clear();
	return { getData, setData, removeData, clearData };
};
