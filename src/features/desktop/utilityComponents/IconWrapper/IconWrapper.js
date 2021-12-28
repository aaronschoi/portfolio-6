import { useIconWrapper } from "./useIconWrapper";

const IconWrapper = ({ children, multiplier = 1, strokeColor = "currentColor" }) => {
	const svgDetails = useIconWrapper(multiplier, strokeColor);
	return (
		<svg {...svgDetails}>
			{children}
		</svg>
	);
};

export default IconWrapper;
