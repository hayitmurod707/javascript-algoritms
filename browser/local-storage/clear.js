/**
 * @return {void}
 */
const clear = () => {
	if (process.browser) {
		window.localStorage.clear();
	} else {
		console.warn("Environment is not browser");
	}
};
export default clear;
