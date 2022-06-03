/**
 * @return {object}
 */
const localStorage = () => {
	/**
	 * @param {array} keys
	 * @return {object}
	 */
	const getData = keys =>
		Array.isArray(keys)
			? keys?.reduce((item, key) => {
					item[key] = localStorage.getItem(key);
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
				localStorage.setItem(name, value);
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
				localStorage.removeItem(key);
			});
		}
	};
	/**
	 * @return {void}
	 */
	const clearData = () => localStorage.clear();
	return { getData, setData, removeData, clearData };
};
