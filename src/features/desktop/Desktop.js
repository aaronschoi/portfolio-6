import RecycleBin from "./recycleBin/RecycleBin";
import GitCrash from "./GitCrash/GitCrash";
import "./desktop.module.css";
import Taskbar from "./taskbar/Taskbar";
import { windowStates } from "../../store/windowStatesStore";
import { changeToDesktop, changeToLoading } from "../../store/currentWindowStore";

const Desktop = () => {

	const { linkedin, github, resume, gitcrash, vscode } = windowStates.use(store => store)

	const handleThisPlease = (event) => {
		changeToLoading();
	}

	return (
		<div className="desktop-container">
			<div>
				{gitcrash.open ? <GitCrash /> : null}
				<RecycleBin />
				<div onClick={handleThisPlease}>push this</div>
			</div>
			<Taskbar />
		</div>
	);
};

export default Desktop;
