const isDarkMode =
	matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDarkMode);
