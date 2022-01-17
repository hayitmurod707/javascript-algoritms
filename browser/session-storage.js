const sessionStorage = () => {
	/**
	 * @param {array} keys
	 * @return {object}
	 */
	const get = keys =>
		Array.isArray(keys)
			? keys.reduce((item, key) => {
					item[key] = sessionStorage.getItem(key);
					return item;
			  }, {})
			: [];
	/**
	 * @param {array} keys
	 * @return {void}
	 */
	const set = keys => {
		if (Array.isArray(keys)) {
			keys.forEach(key => {
				sessionStorage.setItem(key?.name, key?.value);
			});
		}
	};
	/**
	 * @param {array} keys
	 * @return {void}
	 */
	const remove = keys => {
		if (Array.isArray(keys)) {
			keys.forEach(key => {
				window.sessionStorage.removeItem(key);
			});
		}
	};
	/**
	 * @return {void}
	 */
	const clear = () => sessionStorage.clear();
	return { get, set, remove, clear };
};
