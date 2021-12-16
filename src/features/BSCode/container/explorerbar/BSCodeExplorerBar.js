import explorerOptions from "./explorerOptions/explorerOptions.json";
import "./bscodeExplorerBar.module.css";
import { v4 } from 'uuid';
import NestedOptions from "./NestedOptions/NestedOptions";

const BSCodeExplorerBar = () => {
	//it's actually 5 of the same components with different data in each
	return (
		<div className="bscode-explorer-container">
			<div className="bscode-explorer-options">
				<div>EXPLORER</div>
				<div>...</div>
				{explorerOptions.map(dir => <NestedOptions key={v4()} dir={dir} className="explorer-option-title" />)}
			</div>
		</div>
	);
};

export default BSCodeExplorerBar;
