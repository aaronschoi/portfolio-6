import TimeAndDate from "./timeAndDate/TimeAndDate";
import "./taskbar.module.css";

const Taskbar = () => {
	return (
		<div className="taskbar-container">
			<div></div>
			<div className="taskbar-programs taskbar-programs-gap">
				{/*YO YOU SHOULD MAKE YOUR OWN PAGES FOR THESE LOL*/}
				<div className="taskbar-programs taskbar-right-icon"><div>LinkedIn</div></div>
				<div className="taskbar-programs taskbar-right-icon"><div>GitHub</div></div>
				<div className="taskbar-programs taskbar-right-icon"><div>Resume</div></div>
				<div className="taskbar-programs taskbar-right-icon"><div>GitCrash</div></div>
			</div>
			<div className="taskbar-programs taskbar-right">
				{/* create notifications */}
				<div className="taskbar-programs taskbar-caret"><div>^</div></div>
				<div className="taskbar-programs taskbar-right-icon"><div>ENG</div></div>
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
