import { useIconWrapper } from "./useIconWrapper";

const IconWrapper = ({ children, className }) => {
	const svgDetails = useIconWrapper();
	return (
		<svg {...svgDetails} className={className}>
			{children}
		</svg>
	);
};

export default IconWrapper;
