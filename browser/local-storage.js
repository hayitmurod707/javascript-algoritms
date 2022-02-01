const localStorage = () => {
	/**
	 * @param {array} keys
	 * @return {object}
	 */
	const get = keys =>
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
	const set = keys => {
		if (Array.isArray(keys)) {
			keys?.forEach(key => {
				localStorage.setItem(key?.name, key?.value);
			});
		}
	};
	/**
	 * @param {array} keys
	 * @return {void}
	 */
	const remove = keys => {
		if (Array.isArray(keys)) {
			keys?.forEach(key => {
				localStorage.removeItem(key);
			});
		}
	};
	/**
	 * @return {void}
	 */
	const clear = () => localStorage.clear();
	return { get, set, remove, clear };
};
