import ExplorerComponent from "./explorerComponent/ExplorerComponent";
import "./bscodeExplorerBar.module.css";

const BSCodeExplorerBar = () => {
	//it's actually 5 of the same components with different data in each
	return (
		<div className="bscode-explorer-container">
			<div className="bscode-explorer-options">
				<div>EXPLORER</div>
				<div>...</div>
			</div>
			<ExplorerComponent title="OPEN EDITORS">
				<ExplorerComponent title="someFile.js" icon="JS" />
				<ExplorerComponent title="someOtherFile.js" icon="JS" />
				<ExplorerComponent title="yetAnotherFile.js" icon="JS" />
			</ExplorerComponent>
			<ExplorerComponent title="FRONTEND">
				<ExplorerComponent title="folder" spacer={1}>
					<ExplorerComponent title="folderWithin" spacer={1}>
						<ExplorerComponent title="someJSFile.js" icon="JS" />
					</ExplorerComponent>
				</ExplorerComponent>
				<ExplorerComponent title="someOtherFile.js" icon="JS" />
				<ExplorerComponent title="yetAnotherFile.js" icon="JS" />
			</ExplorerComponent>
			<ExplorerComponent title="OUTLINE">
				<div>someFile.js</div>
				<div>someOtherFile.js</div>
				<div>yetAnotherFile.js</div>
			</ExplorerComponent>
			<ExplorerComponent title="TIMELINE">
				<div>Uncommited Changes</div>
			</ExplorerComponent>
			<ExplorerComponent title="NPM SCRIPTS">
				<div>dev</div>
				<div>build</div>
				<div>serve</div>
				<div>start</div>
			</ExplorerComponent>
		</div>
	);
};

export default BSCodeExplorerBar;
