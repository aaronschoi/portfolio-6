import RecycleBin from "./recycleBin/RecycleBin";
import GitCrash from "./GitCrash/GitCrash";
import "./desktop.module.css";
import Taskbar from "./taskbar/Taskbar";

const Desktop = () => {
	return (
		<div className="desktop-container">
			<div>
				<GitCrash />
				<RecycleBin />
			</div>
			<Taskbar />
		</div>
	);
};

export default Desktop;
