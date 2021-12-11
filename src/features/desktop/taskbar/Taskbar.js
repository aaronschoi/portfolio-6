import TimeAndDate from "./timeAndDate/TimeAndDate";
import "./taskbar.module.css";
import MinIcon from "./icons/MinIcon";
import { windowStates } from "../../../store/windowStatesStore";

const Taskbar = () => {

	const openOrNah = windowStates.use(store => store)

	return (
		<div className="taskbar-container">
			<div></div>
			<div className="taskbar-programs taskbar-programs-gap">
				<MinIcon icon="LinkedIn" value="linkedin" />
				<MinIcon icon="GitHub" value="github" />
				<MinIcon icon="Resume" value="resume" />
				<MinIcon icon="GitCrash" value="gitcrash" />
			</div>
			<div className="taskbar-programs taskbar-right">
				{/* create notifications */}
				<div className="taskbar-programs taskbar-caret">
					<div>^</div>
				</div>
				<div className="taskbar-programs taskbar-right-icon">
					<div>ENG</div>
				</div>
				<div className="taskbar-programs taskbar-right-icon taskbar-settings">
					<div>wifi</div>
					<div>sound</div>
					<div>battery</div>
				</div>
				<TimeAndDate />
			</div>
		</div>
	);
};

export default Taskbar;
