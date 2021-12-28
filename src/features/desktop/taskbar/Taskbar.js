import TimeAndDate from "./timeAndDate/TimeAndDate";
import "./taskbar.module.css";
import MinIcon from "./MinIcon/MinIcon";
import WifiIcon from "./icons/WifiIcon";
import SoundIcon from "./icons/SoundIcon";
import PowerIcon from "./icons/PowerIcon";

const Taskbar = () => {
	return (
		<div className="taskbar-container">
			<div></div>
			<div className="taskbar-programs taskbar-programs-gap">
				<MinIcon icon="LinkedIn" value="linkedin" />
				<MinIcon icon="GitHub" value="github" />
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
					<WifiIcon />
					<SoundIcon />
					<PowerIcon />
				</div>
				<TimeAndDate />
			</div>
		</div>
	);
};

export default Taskbar;
