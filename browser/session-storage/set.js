/**
 * @param {array} keys
 * @return {void}
 */
const set = keys => {
	if (process.browser) {
		const data = Array.isArray(keys) ? keys : [];
		data.forEach(({ name, value }) => {
			window.sessionStorage.setItem(name, value);
		});
	} else {
		console.warn("Environment is not browser");
	}
};
export default set;
