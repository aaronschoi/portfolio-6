import { useIconWrapper } from "./useIconWrapper";

const IconWrapper = ({ children }) => {
	const svgDetails = useIconWrapper();
	return (
		<svg {...svgDetails}>
			{children}
		</svg>
	);
};

export default IconWrapper;
