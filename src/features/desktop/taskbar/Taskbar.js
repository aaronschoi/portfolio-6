import TimeAndDate from "./timeAndDate/TimeAndDate";
import "./taskbar.module.css";
import MinIcon from "./icons/MinIcon";

const Taskbar = () => {

	return (
		<div className="taskbar-container">
			<div></div>
			<div className="taskbar-programs taskbar-programs-gap">
				{/*YO YOU SHOULD MAKE YOUR OWN PAGES FOR THESE LOL*/}
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
