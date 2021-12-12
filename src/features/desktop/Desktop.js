import RecycleBin from "./recycleBin/RecycleBin";
import GitCrash from "./GitCrash/GitCrash";
import "./desktop.module.css";
import Taskbar from "./taskbar/Taskbar";
import { windowStates } from "../../store/windowStatesStore";
import LinkedIn from "./linkedin/LinkedIn";

const Desktop = () => {

	const { linkedin, gitcrash, bscode } = windowStates.use(store => store)

	return (
		<div className="desktop-container">
			<div>
				{gitcrash.open ? <GitCrash /> : null}
				{linkedin.open ? <LinkedIn /> : null}
				<RecycleBin />
			</div>
			<Taskbar />
		</div>
	);
};

export default Desktop;
