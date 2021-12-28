import "./bscodeTopBar.module.css";
import MinimizeIcon from "../../../desktop/utilityComponents/BasicApplication/icons/MinimizeIcon";
import CloseIcon from "../../../desktop/utilityComponents/BasicApplication/icons/CloseIcon";
import BSCodeIcon from "./icons/BSCodeIcon";
import { v4 } from "uuid";
import MaximizeIcon from "./icons/MaximizeIcon";

const BSCodeTopBar = () => {
	const [topBarOptions, setTopBarOptions] = React.useState([
		"File",
		"Edit",
		"Selection",
		"View",
		"Go",
		"Run",
		"Terminal",
		"Help",
	]);
	const [maximizeBoxes, setMaximizeBoxes] = React.useState(false);

	const maximizeMouseOverHandler = (event) => {
		setMaximizeBoxes(true);
	};

	const maximizeMouseOutHandler = (event) => {
		setMaximizeBoxes(false);
	};

	return (
		<div className="bscode-topbar-container">
			<div className="bscode-topbar-options bscode-topbar-left">
				<div className="bscode-topbar-left-icon">
					<BSCodeIcon />
				</div>
				{topBarOptions.map((option) => (
					<div className="bscode-topbar-left-option" key={v4()}>
						<div>{option}</div>
					</div>
				))}
			</div>
			<div className="bscode-topbar-options bscode-topbar-middle">
				<div>App.js - frontend - BS Code</div>
			</div>
			<div className="bscode-topbar-options bscode-topbar-right">
				<div className="bscode-topbar-right-icon bscode-topbar-right-minimize">
					<MinimizeIcon />
				</div>
				<div
					className="bscode-topbar-right-icon bscode-topbar-right-minimize"
					onMouseOver={maximizeMouseOverHandler}
					onMouseOut={maximizeMouseOutHandler}
				>
					<MaximizeIcon className={`${maximizeBoxes ? "max-dg" : ""}`} />
				</div>
				<div className="bscode-topbar-right-icon bscode-topbar-right-close">
					<CloseIcon />
				</div>
			</div>
		</div>
	);
};

export default BSCodeTopBar;
