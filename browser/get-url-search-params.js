export default params => {
	const search = new URLSearchParams(window.location.search);
	const newParams = (Array.isArray(params) ? params : []).reduce(
		(total, param) => {
			total[param] = search.get(param);
			return total;
		},
		{}
	);
	return newParams;
};
