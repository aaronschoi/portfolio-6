import {
	windowStates,
	minimize,
	maximize,
} from "../../../../store/windowStatesStore";
import "./minIcon.module.css";

const MinIcon = ({ icon, value }) => {
	const minStates = windowStates.use((store) => store);

	const minMaxHandler = (event) => {
		if (minStates[value].minimized === true) {
			maximize(event.target.getAttribute("value"));
		} else {
			minimize(event.target.getAttribute("value"));
		}
	};

	return (
		<div
			className="taskbar-programs taskbar-right-icon"
			value={value}
			onClick={minMaxHandler}
		>
			<div value={value}>{icon}</div>
			<div className={minStates[value].minimized ? "greybar" : "redbar"}></div>
		</div>
	);
};

export default MinIcon;
