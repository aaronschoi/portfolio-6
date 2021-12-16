import explorerOptions from "./explorerOptions/explorerOptions.json";
import "./bscodeExplorerBar.module.css";
import { v4 } from "uuid";
import NestedOptions from "./NestedOptions/NestedOptions";

const BSCodeExplorerBar = () => {
	return (
		<div className="bscode-explorer-container">
			<div className="bscode-explorer-options">
				<div className="bscode-explorer-title">
					<div>EXPLORER</div>
					<div className="bscode-explorer-dots">...</div>
				</div>
				{explorerOptions.map((dir) => (
					<NestedOptions
						key={v4()}
						dir={dir}
						className="explorer-option-title"
					/>
				))}
			</div>
		</div>
	);
};

export default BSCodeExplorerBar;
