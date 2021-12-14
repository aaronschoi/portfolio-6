import GitCrash from "./GitCrash/GitCrash";
import "./desktop.module.css";
import Taskbar from "./taskbar/Taskbar";
import { windowStates } from "../../store/windowStatesStore";
import LinkedIn from "./linkedin/LinkedIn";
import GitHub from "./github/GitHub";

const Desktop = () => {
	const { github, linkedin, gitcrash } = windowStates.use(
		(store) => store
	);

	return (
		<div className="desktop-container">
			<div>
				{gitcrash.open ? <GitCrash /> : null}
				{linkedin.open ? <LinkedIn /> : null}
				{github.open ? <GitHub /> : null}
			</div>
			<Taskbar />
		</div>
	);
};

export default Desktop;
