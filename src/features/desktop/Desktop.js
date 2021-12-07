import RecycleBin from "./files/recycleBin/RecycleBin";
import GitCrash from "./GitCrash/GitCrash";
import "./desktop.module.css"
import Taskbar from "./taskbar/Taskbar";

const Desktop = () => {
	//GitCrash
	//Trash Can

	return (
		<>
			{/* desktop container */}
			<div className="desktop-container">
				{/* GitCrash Container to position the icon */}
				<div>
					<GitCrash />
					<RecycleBin />
				</div>
				<Taskbar />
			</div>
		</>
	);
};

export default Desktop;
