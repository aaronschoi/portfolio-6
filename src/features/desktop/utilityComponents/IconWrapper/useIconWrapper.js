export const useIconWrapper = (multiplier, strokeColor) => {
	const hAndW = `${1 * multiplier}em`;
	return {
		height: hAndW,
		width: hAndW,
		fill: "none",
		stroke: strokeColor,
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
	};
};
