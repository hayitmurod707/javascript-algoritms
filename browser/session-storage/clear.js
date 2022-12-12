/**
 * @return {void}
 */
const clear = () => {
	if (process.browser) {
		window.sessionStorage.clear();
	} else {
		console.warn("Environment is not browser");
	}
};
export default clear;
