/**
 * @param {array} keys
 * @return {object}
 */
const get = keys => {
	if (process.browser) {
		const items = Array.isArray(keys) ? keys : [];
		const data = items.reduce((item, key) => {
			item[key] = window.localStorage.getItem(key);
			return item;
		}, {});
		return data;
	} else {
		console.warn("Environment is not browser");
	}
};
export default get;
