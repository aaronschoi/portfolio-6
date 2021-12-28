import IconWrapper from "../../../../../desktop/utilityComponents/IconWrapper/IconWrapper";
import "./iconBarIconWrapper.module.css";

const IconBarIconWrapper = ({ children, explorer = false }) => {
	const [styles, setStyles] = React.useState({
		multiplier: 2.5,
		strokeColor: explorer ? "white" : "rgba(122, 122, 122)",
	});

	const mouseOverHandler = (event) => {
		if (!explorer) {
			setStyles({
				...styles,
				strokeColor: "white",
			});
		}
	};

	const mouseOutHandler = (event) => {
		if (!explorer) {
			setStyles({
				...styles,
				strokeColor: "rgba(122, 122, 122)",
			});
		}
	};

	return (
		<div
			className="iconbar-iconwrapper"
			onMouseOver={mouseOverHandler}
			onMouseOut={mouseOutHandler}
		>
			<IconWrapper
				multiplier={styles.multiplier}
				strokeColor={styles.strokeColor}
			>
				{children}
			</IconWrapper>
		</div>
	);
};

export default IconBarIconWrapper;
