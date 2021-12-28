import explorerOptions from "./explorerOptions/explorerOptions.json";
import "./bscodeExplorerBar.module.css";
import { v4 } from "uuid";
import NestedOptions from "./NestedOptions/NestedOptions";
import ThreeDots from "../../utilityComponents/ThreeDots/ThreeDots";

const BSCodeExplorerBar = () => {
	return (
		<div className="bscode-explorer-container">
			<div className="bscode-explorer-options">
				<div className="bscode-explorer-title">
					<div className="bscode-explorer-flex-center">
						<div>EXPLORER</div>
					</div>
					<ThreeDots />
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
