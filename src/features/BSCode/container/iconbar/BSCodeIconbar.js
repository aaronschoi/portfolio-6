import "./bscodeIconBar.module.css"
import DebugButActuallyACakeIcon from "./icons/DebugButActuallyACake";
import ExplorerIcon from "./icons/ExplorerIcon";
import ExtensionsButActuallyAPuzzleIcon from "./icons/ExtensionsButActuallyAPuzzleIcon";
import GitButActuallyShareIcon from "./icons/GitButActuallyShareIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";
import SettingIcon from "./icons/SettingIcons";

const BSCodeIconBar = () => {
	return (
		<div className="bscode-iconbar-container">
			<div className="bscode-iconbar-icons">
				<ExplorerIcon />
				<SearchIcon />
				<GitButActuallyShareIcon />
				<DebugButActuallyACakeIcon />
				<ExtensionsButActuallyAPuzzleIcon />
			</div>
			<div className="bscode-iconbar-icons">
				<UserIcon />
				<SettingIcon />
			</div>
		</div>
	);
};

export default BSCodeIconBar;