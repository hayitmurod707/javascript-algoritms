/**
 * @param {array} keys
 * @return {void}
 */
const remove = keys => {
	if (process.browser) {
		const data = Array.isArray(keys) ? keys : [];
		data.forEach(key => {
			window.sessionStorage.removeItem(key);
		});
	} else {
		console.warn("Environment is not browser");
	}
};
export default remove;
