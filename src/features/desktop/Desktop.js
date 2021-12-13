import GitCrash from "./GitCrash/GitCrash";
import "./desktop.module.css";
import Taskbar from "./taskbar/Taskbar";
import { windowStates } from "../../store/windowStatesStore";
import LinkedIn from "./linkedin/LinkedIn";
import GitHub from "./github/GitHub";

const Desktop = () => {
	const { github, linkedin, gitcrash, bscode } = windowStates.use(
		(store) => store
	);

	return (
		<div className="desktop-container">
			<div>
				{gitcrash.open ? <GitCrash /> : null}
				{linkedin.open ? <LinkedIn /> : null}
				{github.open ? <GitHub /> : null}
				<a
					href="https://twitter.com/messages/compose?recipient_id=1378992938760331266"
					className="twitter-dm-button"
					data-screen-name="@AarSaChoi"
				>
					Message
				</a>
			</div>
			<Taskbar />
		</div>
	);
};

export default Desktop;
