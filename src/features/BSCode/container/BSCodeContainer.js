import BSCodeExplorerBar from "./explorerbar/BSCodeExplorerBar";
import BSCodeIconBar from "./iconbar/BSCodeIconbar";
import BSCodeTopBar from "./topbar/BSCodeTopBar";
import "./bscodeContainer.module.css";

const BSCodeContainer = ({ children }) => {
	return (
		<div className="bscode-container">
			<BSCodeTopBar />
			<div className="bscode-main-area">
			<BSCodeIconBar />
			<BSCodeExplorerBar />
			{children}
			</div>
		</div>
	);
};

export default BSCodeContainer;
