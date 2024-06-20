export default () => {
	const tmp = "0123456789abcdef";
	return (
		"#" +
		Array(6)
			.fill(0)
			.map(() => tmp[Math.floor(Math.random() * tmp.length)])
			.join("")
	);
};

