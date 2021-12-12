import {
	windowStates,
	minimize,
	unminimize,
	open,
} from "../../../../store/windowStatesStore";
import "./minIcon.module.css";

const MinIcon = ({ icon, value }) => {
	const minStates = windowStates.use((store) => store);

	const mmocHandler = (event) => {
		// if (value === "gitcrash") {
			if (minStates[value].open) {
				if (minStates[value].minimized) {
					unminimize(value);
				} else {
					minimize(value);
				}
			} else {
				open(value);
			}
		// } else {
		// 	if (value === "linkedin") {
		// 		window.open("https://www.linkedin.com/in/aaronschoi/", "_blank");
		// 	} else {
		// 		window.open("https://github.com/aaronschoi", "_blank");
		// 	}
		// }
	};

	const botBar = minStates[value].open
		? minStates[value].minimized
			? "greybar"
			: "redbar"
		: "nobar";

	return (
		<div
			className={`taskbar-programs taskbar-right-icon minicon ${
				minStates[value].open ? "minicon-selected" : ""
			}`}
			value={value}
			onClick={mmocHandler}
		>
			<div></div>
			<div value={value} className="prevent-select">
				<img
					className="minicon-icon"
					src={`http://localhost:8000/www/${icon}.png`}
				/>
			</div>
			<div className="minicon-bar">
				<div className={botBar}></div>
			</div>
		</div>
	);
};

export default MinIcon;
