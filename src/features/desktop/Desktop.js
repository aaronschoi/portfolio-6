import RecycleBin from "./recycleBin/RecycleBin";
import GitCrash from "./GitCrash/GitCrash";
import "./desktop.module.css";
import Taskbar from "./taskbar/Taskbar";
import { windowStates } from "../../store/windowStatesStore";

const Desktop = () => {

	const { linkedin, github, resume, gitcrash, vscode } = windowStates.use(store => store)

	return (
		<div className="desktop-container">
			<div>
				{gitcrash.open && !gitcrash.minimized ? <GitCrash /> : null}
				<RecycleBin />
			</div>
			<Taskbar />
		</div>
	);
};

export default Desktop;
